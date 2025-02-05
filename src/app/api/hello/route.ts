import { TheAnyConst } from "@/models/General.model";
import { ServicesApiResponse } from "@/models/Services.model";

export async function POST(req: Request, _: Response) {
  const headers = { "Content-Type": "application/json" };
  let finalResponse: ServicesApiResponse = {
    ok: true,
    message: "Success!",
    axiosResponse: null,
  };

  try {
    const req_body = await req.json();
    finalResponse.axiosResponse = req_body;
    return new Response(JSON.stringify(finalResponse), {
      status: 200,
      headers,
    });
  } catch (error: TheAnyConst) {
    finalResponse = {
      ok: false,
      message: "Opps! Error on: src/app/api/hello",
      axiosResponse: error,
    };
    return new Response(JSON.stringify(finalResponse), {
      status: 500,
      headers,
    });
  }
}
