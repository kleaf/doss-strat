import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

const repoRoot = path.resolve(__dirname, "..");
const virtualDocsId = "virtual:repo-docs";
const resolvedVirtualDocsId = `\0${virtualDocsId}`;

interface DocEntry {
  path: string;
  title: string;
  category: string;
  format: "markdown" | "html";
  content: string;
}

function titleFromMarkdown(content: string, filePath: string): string {
  const h1 = content.match(/^#\s+(.+)$/m)?.[1]?.trim();
  if (h1) return h1;
  return path.basename(filePath, ".md").replace(/[-_]/g, " ");
}

function stripHtml(value: string): string {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function titleFromHtml(content: string, filePath: string): string {
  const h1 = content.match(/<h1[^>]*>(.*?)<\/h1>/is)?.[1];
  if (h1) return stripHtml(h1);
  const title = content.match(/<title[^>]*>(.*?)<\/title>/is)?.[1];
  if (title) return stripHtml(title);
  return path.basename(filePath, ".html").replace(/[-_]/g, " ");
}

function categoryFromPath(relativePath: string): string {
  const [top, second] = relativePath.split("/");
  if (!top || relativePath === "README.md") return "Overview";
  if (top === "inputs" && second) return `Inputs / ${second.charAt(0).toUpperCase()}${second.slice(1)}`;
  return top.charAt(0).toUpperCase() + top.slice(1);
}

function collectDocuments(dir: string, docs: DocEntry[] = []): DocEntry[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if ([".git", "node_modules", "dist", ".vite"].includes(entry.name)) continue;
    const absolutePath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectDocuments(absolutePath, docs);
    } else if (entry.isFile()) {
      const relativePath = path.relative(repoRoot, absolutePath).split(path.sep).join("/");
      const isMarkdown = entry.name.endsWith(".md");
      const isInternalHtml = entry.name.endsWith(".html") && relativePath.startsWith("inputs/internal/");
      if (!isMarkdown && !isInternalHtml) continue;
      const content = fs.readFileSync(absolutePath, "utf8");
      const format = isInternalHtml ? "html" : "markdown";
      docs.push({
        path: relativePath,
        title: format === "html" ? titleFromHtml(content, relativePath) : titleFromMarkdown(content, relativePath),
        category: categoryFromPath(relativePath),
        format,
        content,
      });
    }
  }
  return docs;
}

function repoDocsPlugin(): Plugin {
  return {
    name: "repo-docs",
    resolveId(id) {
      if (id === virtualDocsId) return resolvedVirtualDocsId;
      return null;
    },
    load(id) {
      if (id !== resolvedVirtualDocsId) return null;
      const docs = collectDocuments(repoRoot).sort((a, b) => a.path.localeCompare(b.path));
      return `export const docs = ${JSON.stringify(docs)};`;
    },
  };
}

export default defineConfig({
  plugins: [react(), repoDocsPlugin()],
});
