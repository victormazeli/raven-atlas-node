# Raven Atlas Node Libary

A Nodejs libary for working with raven atlas, for more information take a look at raven atlas docs [click here](https://raven-atlas.readme.io)


## Getting Started

To start using this libary, signup on [raven atlas](https://atlas.getravenbank.com/register) to get an API key

Run the command below to install this package

`npm i raven-atlas-node`

## How to use

Importing package using common js
```
const { RavenAtlas } = require("raven-atlas-node");

const { bill, kyc, misc, transaction } = new RavenAtlas({apiKey: "YOUR_API_KEY"})

```
Importing package using es module
```
import { RavenAtlas } from "raven-atlas-node";

const { bill, kyc, misc, transaction } = new RavenAtlas({apiKey: "YOUR_API_KEY"})

```

### Miscellenous
```
try {
    const checkAccount = await misc.accountNumberLookUp({accountNumber: "3028422066", bank: "076"})
        return checkAccount; // response
    } catch (error) {
        console.log(error)
        // handle error
    }

try {
    const retriveBankList = await misc.getBankList()
        return retriveBankList; // response
    } catch (error) {
        console.log(error)
        // handle error
    }

try {
    const updateWebhook = await misc.updateWebhookDetails({webhookSecretKey: "YOUR_KEY", webhookUrl:"YOUR_URL"})
        return updateWebhook; // response
    } catch (error) {
        console.log(error)
        // handle error
    }

```
### Bills

```
try {
    const buyAirtime = await bill.purchaseAirtime({amount:"100", merchantReference:"1234", phoneNumber:"08102516540"});
        return buyAirtime; // response
    } catch (error) {
        console.log(error)
        // handle error
    }

try {
    const buyCablePlan = await bill.purchaseCablePlan({code:"gotv-smallie", merchantReference:"122345", provider:"gotv", phoneNumber:"07039765515", smartCardNumber:"8062093542"});
        return buyCablePlan; // response
    } catch (error) {
        console.log(error)
        // handle error
    }

```
### Kyc

```
try {
    const verifyCustomerBvn = await kyc.verifyBvn({bvn:"22278595765"})
        return verifyCustomerBvn; // response
    } catch (error) {
        console.log(error)
        // handle error
    }

try {
    const verifyCustomerPVC = await kyc.verifyPvc({vin: "455669999"})
        return verifyCustomerBvn; // response
    } catch (error) {
        console.log(error)
        // handle error
    }

```

## Resources
#
1. Bill
    - purchaseAirtime()
    - purchaseDataPlan()
    - purchaseCablePlan()
    - purchaseElectricity()
    - validateCableAccount()
    - validateMeterNumber()
    - getAirtimeRecord()
    - getAirtimeRecords()
    - getDataPlans()
    - getDataPlanRecords()
    - getCableProviders()
    - getElectricityDiscos()
    - getElectricityRecords()
    - validateBetAccount()
    - rechargeBettingAccount()
    - getBettingPlatforms()
    - getBettingRecords()
    
2. Miscellenous
    - accountNumberLookUp()
    - getBankList()
    - getWalletBalance()
    - updateWebhookDetails()
    
3. Collection
    - generateCollectionAccount()
    
4. Transfer
    - initiateTransfer()
    - getSingleTransfer()
    
5. Kyc
    - verifyBvn()
    - verifyPvc()
    - verifyPassport()
    - verifyDriverLicence()
    
#
## Todos                                                                                                                                                 

1. Cards

