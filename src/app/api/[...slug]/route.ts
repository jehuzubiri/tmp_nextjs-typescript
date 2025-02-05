import axios from "axios";
import {
  ServicesApiResponse,
  ServicesApiRoute,
  ServicesApiProps,
} from "@/models/Services.model";
import { TheAnyConst } from "@/models/General.model";
import { ApiCommonHeaders, ApiSettings } from "@/constant/Api.const";
import { getCustomHeaders } from "@/utils/Api.helpers";

export async function POST(req: Request, { params }: ServicesApiRoute) {
  let finalResponse: ServicesApiResponse = {
    ok: true,
    message: "Success!",
    axiosResponse: null,
    apiConfig: {
      slug: params.slug,
    },
  };

  try {
    const apiRequestMethods = ["post", "put", "patch"];
    const { apiType, method, path, params, signal }: ServicesApiProps =
      await req.json();
    const { baseURL, defaultToken } = ApiSettings[apiType];

    const api = axios.create({
      baseURL,
      headers: getCustomHeaders(apiType, defaultToken),
    });

    //DESC: required for cancelation
    const reqOptions: TheAnyConst = { ...(signal && { signal }) };

    if (defaultToken) {
      api.defaults.headers.common["Authorization"] = `Bearer ${defaultToken}`;
    }

    if (params) {
      if (method === "get") reqOptions.params = params;
      if (apiRequestMethods.includes(method)) reqOptions.data = params;
    }

    const res = await api[method](path, reqOptions);
    finalResponse.axiosResponse = res.data;
    finalResponse.apiConfig = {
      ...finalResponse.apiConfig,
      baseURL,
      path,
      headers: getCustomHeaders(apiType, defaultToken),
    };

    return new Response(JSON.stringify(finalResponse), {
      status: 200,
      headers: ApiCommonHeaders,
    });
  } catch (error: TheAnyConst) {
    finalResponse = {
      ok: false,
      message: "Opps! Error on: src/app/api/[...slug]",
      axiosResponse: error,
      apiConfig: {
        slug: params.slug,
      },
    };
    return new Response(JSON.stringify(finalResponse), {
      status: 500,
      headers: ApiCommonHeaders,
    });
  }
}
