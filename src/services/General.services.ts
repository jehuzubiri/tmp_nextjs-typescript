import { ApiCommonHeaders } from "@/constant/Api.const";
import { ServicesApiProps, ServicesApiResponse } from "@/models/Services.model";

export const GeneralServices = async (
  params: ServicesApiProps
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
