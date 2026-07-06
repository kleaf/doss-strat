declare module "virtual:repo-docs" {
  export interface RepoDoc {
    path: string;
    title: string;
    category: string;
    content: string;
  }

  export const docs: RepoDoc[];
}
