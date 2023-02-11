import { AxiosInstance, AxiosError } from "axios";
import { Base } from "./base";

interface GenerateCollectionAccountOptions {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  amount: string;
  email: string;
}

export class Collection extends Base {
  protected readonly generateCollectionAccountPath: string;
  protected readonly fetchSingleCollectionPath: string;
  protected readonly fetchAllCollectionPath: string;
  constructor(protected readonly axios: AxiosInstance) {
    super(axios);
    this.generateCollectionAccountPath = "/pwbt/generate_account";
    this.fetchAllCollectionPath = "/collections";
    this.fetchSingleCollectionPath = "/collections";
  }

  async generateCollectionAccount(data: GenerateCollectionAccountOptions) {
    const payload = {
      first_name: data.firstName,
      last_name: data.lastName,
      phone: data.phoneNumber,
      amount: data.amount,
      email: data.email,
    };

    return this.sendRequest(this.generateCollectionAccountPath, payload);
  }
}
