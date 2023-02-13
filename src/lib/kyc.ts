import { AxiosInstance, AxiosError } from "axios";
import { Base } from "./base";

interface BvnOptions {
  bvn: string;
}

interface PvcOptions {
  vin: string;
}

interface PassportOptions {
  passportNumber: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
}

interface DriiverLicenceOptions {
  licenseNumber: string;
  fullName: string;
  dateOfBirth: string;
  phoneNumber: string;
}

export class Kyc extends Base {
  protected readonly verifyBvnPath: string;
  protected readonly verifyVoterCardPath: string;
  protected readonly verifyPassportPath: string;
  protected readonly verifyDriverLicencePath: string;
  constructor(protected readonly axios: AxiosInstance) {
    super(axios);
    this.verifyBvnPath = "/bvn/verify";
    this.verifyVoterCardPath = "/pvc/verify";
    this.verifyPassportPath = "/passport/verify";
    this.verifyDriverLicencePath = "/drivers_license/verify";
  }

  async verifyBvn(data: BvnOptions) {
    const payload = {
      bvn: data.bvn,
    };

    return this.sendRequest(this.verifyBvnPath, payload);
  }
  async verifyPvc(data: PvcOptions) {
    const payload = {
      vin: data.vin,
    };

    return this.sendRequest(this.verifyVoterCardPath, payload);
  }
  async verifyPassport(data: PassportOptions) {
    const payload = {
      passport_number: data.passportNumber,
      first_name: data.firstName,
      last_name: data.lastName,
      date_of_birth: data.dateOfBirth,
      phone_number: data.phoneNumber,
    };

    return this.sendRequest(this.verifyPassportPath, payload);
  }
  async verifyDriverLicence(data: DriiverLicenceOptions) {
    const payload = {
      license_number: data.licenseNumber,
      full_name: data.fullName,
      date_of_birth: data.dateOfBirth,
      phone_number: data.phoneNumber,
    };

    return this.sendRequest(this.verifyDriverLicencePath, payload);
  }
}
