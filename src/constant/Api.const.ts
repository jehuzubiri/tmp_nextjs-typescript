import { ApiSettingsRequired } from "@/models/Api.model";

export const ApiCommonHeaders = { "Content-Type": "application/json" };

export const ApiSettings: {
  main: ApiSettingsRequired;
  pokemon: ApiSettingsRequired;
  strapi: ApiSettingsRequired;
} = {
  main: {
    baseURL: "",
    defaultToken: null,
  },
  pokemon: {
    baseURL: process.env.NEXT_PUBLIC_API_HOST || "",
    defaultToken: null,
  },
  strapi: {
    baseURL: "",
    defaultToken: null,
  },
};
