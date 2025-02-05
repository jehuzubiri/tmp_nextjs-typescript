import { ApiMainMethod, ApiMainType } from "./Api.model";
import { TheAnyConst } from "./General.model";

export interface HelloApiProps {
  method: ApiMainMethod;
  path: "hello";
  params?: Object;
  signal?: AbortSignal;
}

export interface ServicesApiProps {
  apiType: ApiMainType;
  method: ApiMainMethod;
  path: string;
  params?: Object;
  signal?: AbortSignal;
}

export interface ServicesApiResponse {
  ok: boolean;
  message: string;
  axiosResponse: TheAnyConst;
  apiConfig?: TheAnyConst;
}

export type ServicesApiRoute = { params: { slug: string } };
