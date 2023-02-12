import { AxiosInstance, AxiosError } from "axios";

export class Base {
  constructor(protected readonly axios: AxiosInstance) {}

  protected async sendRequest(path: string, data: any): Promise<any> {
    try {
      const response = await this.axios.post(`${path}`, data);
      const result = response.data;
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  protected async fetchRequest(path: string): Promise<any> {
    try {
      const response = await this.axios.get(`${path}`);
      const result = response.data;
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}
