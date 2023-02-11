import { AxiosInstance, AxiosError } from "axios";
import { Base } from "./base";

interface AccountLookUpOptions {
  bank: string;
  accountNumber: string;
}

export class Miscellaneous extends Base {
  protected readonly accountLookUpPath: string;
  protected readonly fetchBankListPath: string;
  constructor(protected readonly axios: AxiosInstance) {
    super(axios);
    this.accountLookUpPath = "/account_number_lookup";
    this.fetchBankListPath = "/banks";
  }

  async accountNumberLookUp(data: AccountLookUpOptions) {
    const payload = {
      bank: data.bank,
      account_number: data.accountNumber,
    };

    return this.sendRequest(this.accountLookUpPath, payload);
  }

  async getBankList() {
    return this.fetchRequest(this.fetchBankListPath);
  }
}
