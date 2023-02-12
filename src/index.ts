import { customAxios } from "./utils/custom-axios";
import { Bill } from "./lib/bills";
import { Collection } from "./lib/collections";
import { Miscellaneous } from "./lib/misc";
import { Transfer } from "./lib/transfers";

export default class RavenAtlas {
  public url: string = "https://integrations.getravenbank.com";
  public bill: Bill;
  public card: string | undefined;
  public collection: Collection;
  public transaction: string | undefined;
  public transfer: Transfer;
  public misc: Miscellaneous;
  public kyc: string | undefined;
  private version: string | undefined;
  private apiKey: string | undefined;

  constructor(options: { apiKey: string; version?: string }) {
    this.apiKey = options.apiKey;
    if (typeof options.version === "undefined" || options.version === "") {
      this.version = "v1";
    } else {
      this.version = options.version;
    }

    const axios = customAxios(this.url, this.apiKey, this.version);

    this.bill = new Bill(axios);
    this.collection = new Collection(axios);
    this.misc = new Miscellaneous(axios);
    this.transfer = new Transfer(axios);
  }
}
