import { ApiCommonHeaders } from "@/constant/Api.const";
import { HelloApiProps, ServicesApiResponse } from "@/models/Services.model";

export const HelloServices = async (
  params: HelloApiProps
): Promise<ServicesApiResponse> => {
  try {
    const res = await fetch(`/api/${params.path}`, {
      method: "POST",
      headers: ApiCommonHeaders,
      body: JSON.stringify(params),
    });
    return (await res.json()) as ServicesApiResponse;
  } catch (error) {
    return {
      ok: false,
      message: "Opps! Error on: src/services/Hello.services.ts",
      axiosResponse: error,
    };
  }
};
