export type ApiMainType = "main" | "pokemon" | "strapi";
export type ApiMainMethod = "get" | "post" | "put" | "patch";
export interface ApiSettingsRequired {
  baseURL: string;
  defaultToken?: null | string;
}
