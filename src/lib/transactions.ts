import { AxiosInstance, AxiosError } from "axios";
import { Base } from "./base";

interface AllRecordFilterOption {
  page: string;
  perPage: string;
}

export class Transaction extends Base {
  protected readonly fetchTransactionPath: string;
  constructor(protected readonly axios: AxiosInstance) {
    super(axios);
    this.fetchTransactionPath = "/accounts/transactions";
  }

  async getAllTransactions(query: AllRecordFilterOption) {
    const url = this.fetchTransactionPath + `?page=${query.page}&perPage=${query.perPage}`;
    return this.fetchRequest(url);
  }
}
