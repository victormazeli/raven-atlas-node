# raven-atlas-node

A Nodejs libary for working with raven atlas, for imformation take a look at raven atlas docs [click here](https://raven-atlas.readme.io)

## Getting Started

To start using this libary, signup on [raven atlas](https://dash.readme.com/to/raven-atlas/signup) to get an API key

Run the command below to install this package

`npm i raven-atlas-node`

## How to use

Importing package using common js
```
const { RavenAtlas } = require("raven-atlas-node");

const atlas = new RavenAtlas({apiKey: "YOUR_API_KEY"});

```
Importing package using es module
```
import { RavenAtlas } from "raven-atlas-node";

const atlas = new RavenAtlas({apiKey: "YOUR_API_KEY"});

```
### Miscellaneous 
```
const misc = atlas.misc
try {
    const checkAccount = await misc.accountNumberLookUp({accountNumber: "3028422066", bank: "076"})
        return checkAccount; // response
    } catch (error) {
        console.log(error)
        // handle error
    }

```
### Bills 
```
const bill = atlas.bill
try {
    const buyAirtime = await bill.purchaseAirtime({amount:"100", merchantReference:"12345", phoneNumber:"08102516540"})
        return buyAirtime; // response
    } catch (error) {
        console.log(error)
        // handle error
    }

```
#
### Available Classes

1. Bill
2. Miscellenous
3. Collection
4. Transfer
#
### Todos                                                                                                                                                 

1. Cards
2. Profile
3. KYC

