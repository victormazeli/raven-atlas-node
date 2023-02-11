import { AxiosInstance, AxiosError } from "axios";
import { Base } from "./base";

interface TransferOptions {
  amount: string;
  bankCode: string;
  bank: string;
  accountNumber: string;
  accountName: string;
  narration: string;
  reference: string;
  currency?: string;
}

interface FetchSingleTransferOption {
  trxRef: string;
}

export class Transfer extends Base {
  protected readonly makeTransferPath: string;
  protected readonly fetchSingleTransferPath: string;
  constructor(protected readonly axios: AxiosInstance) {
    super(axios);
    this.makeTransferPath = "/transfers/create";
    this.fetchSingleTransferPath = "/get-transfer";
  }

  async initiateTransfer(data: TransferOptions) {
    const payload = {
      amount: data.amount,
      bank_code: data.bankCode,
      bank: data.bank,
      account_number: data.accountNumber,
      account_name: data.accountName,
      narration: data.narration,
      reference: data.reference,
      currency: data.currency ? data.currency : "NGN",
    };

    return this.sendRequest(this.makeTransferPath, payload);
  }

  async getSingleTransfer(query: FetchSingleTransferOption) {
    const url = this.fetchSingleTransferPath + `?trx_ref=${query.trxRef}`;
    return this.fetchRequest(url);
  }
}
