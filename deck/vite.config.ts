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
  content: string;
}

function titleFromMarkdown(content: string, filePath: string): string {
  const h1 = content.match(/^#\s+(.+)$/m)?.[1]?.trim();
  if (h1) return h1;
  return path.basename(filePath, ".md").replace(/[-_]/g, " ");
}

function categoryFromPath(relativePath: string): string {
  const [top] = relativePath.split("/");
  if (!top || relativePath === "README.md") return "Overview";
  return top.charAt(0).toUpperCase() + top.slice(1);
}

function collectMarkdown(dir: string, docs: DocEntry[] = []): DocEntry[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if ([".git", "node_modules", "dist", ".vite"].includes(entry.name)) continue;
    const absolutePath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectMarkdown(absolutePath, docs);
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      const relativePath = path.relative(repoRoot, absolutePath).split(path.sep).join("/");
      const content = fs.readFileSync(absolutePath, "utf8");
      docs.push({
        path: relativePath,
        title: titleFromMarkdown(content, relativePath),
        category: categoryFromPath(relativePath),
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
      const docs = collectMarkdown(repoRoot).sort((a, b) => a.path.localeCompare(b.path));
      return `export const docs = ${JSON.stringify(docs)};`;
    },
  };
}

export default defineConfig({
  plugins: [react(), repoDocsPlugin()],
});
