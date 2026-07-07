declare module "virtual:repo-docs" {
  export type Track = "strategy" | "process";

  export interface RepoDoc {
    path: string;
    title: string;
    category: string;
    track: Track;
    format: "markdown" | "html";
    content: string;
  }

  export const docs: RepoDoc[];
}
