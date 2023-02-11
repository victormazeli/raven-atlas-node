import { AxiosInstance, AxiosError } from "axios";
import { Base } from "./base";

interface PurchaseAirtimeOptions {
  amount: string;
  phoneNumber: string;
  merchantReference: string;
}

interface PurchaseDataPlanOptions {
  code: string;
  phoneNumber: string;
  providerCode: string;
  merchantReference: string;
}

interface SingleAirtimeFilter {
  phoneNumber: string;
}

interface AllRecordFilterOption {
  page: string;
  perPage: string;
}

interface DataPlansOptionFilter {
  network: string;
}

interface CablePurchase {
  provider: string;
  smartCardNumber: string;
  phoneNumber: string;
  code: string;
  merchantReference: string;
}

interface ValidateCableOption {
  provider: string;
  smartCardNumber: string;
}

interface CableProviderFilterOption {
  provider: string;
}

interface PurchaseElectricity {
  provider: string;
  meterNo: string;
  meterType: string;
  amount: string;
  merchantReference: string;
  phoneNumber: string;
}

interface ValidateMeterNumberOptions {
  provider: string;
  meterNo: string;
  meterType: string;
}

interface ValidateBetAccountOptions {
  type: string;
  customerId: string;
}

interface RechargeBetAccountOptions {
  type: string;
  customerId: string;
  name: string;
  amount: string;
  merchantReference: string;
}

export class Bill extends Base {
  protected readonly rechargeAirtimePath: string;
  protected readonly fetchSingleAirtimePath: string;
  protected readonly fetchAllAirtimePath: string;
  protected readonly purchaseDataPath: string;
  protected readonly fetcheDataPlansPath: string;
  protected readonly fetchDataPlanRecordsPath: string;
  protected readonly purchaseCablePlanPath: string;
  protected readonly validateCableAccountPath: string;
  protected readonly retrieveCableProviderPath: string;
  protected readonly purchaseElectricityPath: string;
  protected readonly validateMeterNumberPath: string;
  protected readonly retrieveElectricityDiscosPath: string;
  protected readonly fetchElectricityRecordPath: string;
  protected readonly betTypesPath: string;
  protected readonly validateBetAccountPath: string;
  protected readonly rechargeBetAccountPath: string;
  protected readonly retrieveBetRecordsPath: string;
  protected readonly fetchSingleBetRecordPath: string;
  constructor(protected readonly axios: AxiosInstance) {
    super(axios);
    this.rechargeAirtimePath = "/airtime/recharge";
    this.fetchAllAirtimePath = "/airtime/records";
    this.fetchSingleAirtimePath = "/airtime/record";
    this.purchaseDataPath = "/data_plans/recharge";
    this.fetchDataPlanRecordsPath = "/data/records";
    this.fetcheDataPlansPath = "/data_plans";
    this.validateCableAccountPath = "/cable/validate_account";
    this.purchaseCablePlanPath = "/cable/subscribe";
    this.retrieveCableProviderPath = "/cable/providers";
    this.purchaseElectricityPath = "/electricity/pay";
    this.validateMeterNumberPath = "/electricity/validate_meter";
    this.retrieveElectricityDiscosPath = "/electricity/discos";
    this.fetchElectricityRecordPath = "/electricity/records";
    this.betTypesPath = "/bet_types";
    this.validateBetAccountPath = "/bet_account/validate";
    this.rechargeBetAccountPath = "/bet_account/pay";
    this.retrieveBetRecordsPath = "/bet_records";
    this.fetchSingleBetRecordPath = "/bet_record";
  }

  async purchaseAirtime(data: PurchaseAirtimeOptions) {
    const payload = {
      amount: data.amount,
      phone_number: data.phoneNumber,
      merchant_reference: data.merchantReference,
    };
    return this.sendRequest(this.rechargeAirtimePath, payload);
  }
  async purchaseDataPlan(data: PurchaseDataPlanOptions) {
    const payload = {
      code: data.code,
      phone_number: data.phoneNumber,
      provider_code: data.providerCode,
      merchant_reference: data.merchantReference,
    };
    return this.sendRequest(this.purchaseDataPath, payload);
  }
  async getAirtimeRecord(query: SingleAirtimeFilter) {
    const url = this.fetchSingleAirtimePath + `?phone_number=${query.phoneNumber}`;
    return this.fetchRequest(url);
  }

  async getAirtimeRecords(query: AllRecordFilterOption) {
    const url = this.fetchAllAirtimePath + `?page=${query.page}&per_page=${query.perPage}`;
    return this.fetchRequest(url);
  }

  async getDataPlans(query: DataPlansOptionFilter) {
    const url = this.fetcheDataPlansPath + `?network=${query.network}`;
    return this.fetchRequest(url);
  }
  async getDataPlanRecords(query: AllRecordFilterOption) {
    const url = this.fetchDataPlanRecordsPath + `?page=${query.page}&per_page=${query.perPage}`;
    return this.fetchRequest(url);
  }

  async purchaseCablePlan(data: CablePurchase) {
    const payload = {
      provider: data.provider,
      smart_card_number: data.smartCardNumber,
      phone_number: data.phoneNumber,
      code: data.code,
      merchant_reference: data.merchantReference,
    };
    return this.sendRequest(this.purchaseCablePlanPath, payload);
  }

  async validateCableAccount(data: ValidateCableOption) {
    const payload = {
      provider: data.provider,
      smart_card_number: data.smartCardNumber,
    };
    return this.sendRequest(this.validateCableAccountPath, payload);
  }

  async getCableProviders(query: CableProviderFilterOption) {
    const url = this.retrieveCableProviderPath + `?provider=${query.provider}`;
    return this.fetchRequest(url);
  }
  async purchaseElectricity(data: PurchaseElectricity) {
    const payload = {
      provider: data.provider,
      meter_no: data.meterNo,
      meter_type: data.meterType,
      amount: data.amount,
      merchant_reference: data.merchantReference,
      phone_number: data.phoneNumber,
    };
    return this.sendRequest(this.purchaseElectricityPath, payload);
  }

  async validateMeterNumber(data: ValidateMeterNumberOptions) {
    const payload = {
      provider: data.provider,
      meter_no: data.meterNo,
      meter_type: data.meterType,
    };

    return this.sendRequest(this.validateMeterNumberPath, payload);
  }

  async getElectricityDiscos() {
    return this.fetchRequest(this.retrieveElectricityDiscosPath);
  }
  async getElectricityRecords(query: AllRecordFilterOption) {
    const url = this.fetchElectricityRecordPath + `?page=${query.page}&per_page=${query.perPage}`;
    return this.fetchRequest(url);
  }

  async validateBetAccount(data: ValidateBetAccountOptions) {
    const payload = {
      type: data.type,
      customer_id: data.customerId,
    };
    return this.sendRequest(this.validateBetAccountPath, payload);
  }

  async rechargeBettingAccount(data: RechargeBetAccountOptions) {
    const payload = {
      type: data.type,
      customer_id: data.customerId,
      name: data.name,
      amount: data.amount,
      merchant_reference: data.merchantReference,
    };
    return this.sendRequest(this.rechargeBetAccountPath, payload);
  }

  async getBettingPlatforms() {
    return this.fetchRequest(this.betTypesPath);
  }

  async getBettingRecords(query: AllRecordFilterOption) {
    const url = this.retrieveBetRecordsPath + `?page=${query.page}&per_page=${query.perPage}`;
    return this.fetchRequest(url);
  }
}
