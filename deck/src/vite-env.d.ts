declare module "virtual:repo-docs" {
  export interface RepoDoc {
    path: string;
    title: string;
    category: string;
    format: "markdown" | "html";
    content: string;
  }

  export const docs: RepoDoc[];
}
