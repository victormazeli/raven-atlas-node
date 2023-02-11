import { AxiosInstance, AxiosError } from "axios";

export class Base {
  constructor(protected readonly axios: AxiosInstance) {}

  protected async sendRequest(path: string, data: any): Promise<any> {
    try {
      const response = await this.axios.post(`${path}`, data);
      const result = response.data;

      if (result.status === "fail") {
        throw result.message
      }
      return result.data;
    } catch (error) {
      const err = error as AxiosError;
      throw err.response ? err.response.data : "An error occurred";
    }
  }

  protected async fetchRequest(path: string): Promise<any> {
    try {
      const response = await this.axios.get(`${path}`);
      const result = response.data;

      if (result.status === "fail") {
        throw result.message
      }
      return result.data;
    } catch (error) {
      const err = error as AxiosError;
      throw err.response ? err.response.data : "An error occurred";
    }
  }
}
