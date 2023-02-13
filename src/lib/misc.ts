import { AxiosInstance, AxiosError } from "axios";
import { Base } from "./base";

interface AccountLookUpOptions {
  bank: string;
  accountNumber: string;
}

interface WebhookUpdateOptions {
  webhookUrl: string;
  webhookSecretKey: string;
}

export class Miscellaneous extends Base {
  protected readonly accountLookUpPath: string;
  protected readonly fetchBankListPath: string;
  protected readonly retrieveWalletBalancePath: string;
  protected readonly webhookUpdatePath: string;
  constructor(protected readonly axios: AxiosInstance) {
    super(axios);
    this.accountLookUpPath = "/account_number_lookup";
    this.fetchBankListPath = "/banks";
    this.retrieveWalletBalancePath = "/wallet_balance";
    this.webhookUpdatePath = "/webhooks/update";
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
  async getWalletBalance() {
    return this.fetchRequest(this.retrieveWalletBalancePath);
  }
  async updateWebhookDetails(data: WebhookUpdateOptions) {
    const payload = {
      webhook_url: data.webhookUrl,
      webhook_secret_key: data.webhookSecretKey,
    };
    return this.sendRequest(this.webhookUpdatePath, payload);
  }
}
