import Axios from "axios";
import { Bill } from "./lib/bills";
import { Collection } from "./lib/collections";
import { Miscellaneous } from "./lib/misc";
import { Transfer } from "./lib/transfers";

export class RavenAtlas {
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
    this.apiKey = this.apiKey;
    if (typeof options.version === "undefined" || options.version === "") {
      this.version = "v1";
    } else {
      this.version = options.version;
    }
    const axios = Axios.create({
      baseURL: this.url + `/${this.version}`,
      headers: {
        Authorization: `Bearer ${options.apiKey}`,
        Accept: "application/json",
      },
    });

    this.bill = new Bill(axios);
    this.collection = new Collection(axios);
    this.misc = new Miscellaneous(axios);
    this.transfer = new Transfer(axios);
  }
}
