import { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import Axios from "axios";

export function customAxios(baseUrl: string, apiKey: string, version: string): AxiosInstance {
  const customAxiosInstance = Axios.create({
    baseURL: `${baseUrl}` + `/${version}`,
    timeout: 10000,
    headers: {
      Accept: "application/json",
    },
  });

  const requestHandler = (request: InternalAxiosRequestConfig<any>) => {
    if (apiKey === "") {
      return Promise.reject("API key is empty!");
    }
    request.headers.Authorization = `Bearer ${apiKey}`;

    return request;
  };

  const responseHandler = (response: AxiosResponse<any, any>) => {
    if (response.status === 200 && response.data.status === "fail") {
      return Promise.reject(response.data.message);
    }
    return response;
  };

  const errorHandler = (error: any) => {
    if (error.response && error.response.data.message) {
      return Promise.reject(error.response.data.message);
    } else if (error.cause) {
      return Promise.reject(error.cause);
    } else if (error.response) {
      return Promise.reject(error.response.statusText);
    } else {
      return Promise.reject(error);
    }
  };

  customAxiosInstance.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error),
  );

  customAxiosInstance.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error),
  );

  return customAxiosInstance;
}
