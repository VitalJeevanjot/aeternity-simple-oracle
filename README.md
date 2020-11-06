# A simple oracle to provide weather data on Aeternity blockchain
A simple oracle that explains the working of oracle in aeternity by responding with current temprature in kelvin

-----
# How to run this.
- Install aeproject CLI: https://aeproject.gitbook.io/aeproject/
## Setup Environment
- Run `git clone https://github.com/genievot/aeternity-simple-oracle.git`
- `cd aeternity-simple-oracle/`
- Install all dependencies by running `npm i` or `yarn`

## Deploy contract
Deploy to testnet using `aeproject deploy -n testnet` , The **deploy.js** used here also create a new file inside **data** directory `contract_address.txt` that will have
latest deployed contract address used by our backend.

Check this https://github.com/genievot/aeternity-simple-oracle/blob/master/data/contract_address.txt
And this https://github.com/genievot/aeternity-simple-oracle/blob/master/consumer/backend/index.js#L5

## Run back-end to start listening reuqests from this contract
- `cd consumer/backend`
- Inside `consumer/backend/conf.json` add your weather api key from https://openweathermap.org/api
- Run `yarn` or `npm i` to install backend dependencies
- `node index.js` and keep it running

## Run front-end
- Checkout https://github.com/genievot/aeternity-simple-oracle/blob/master/consumer/frontend/js/contract.js#L58
Here you should change the address to latest deployed contract.
- Run front-end, You can use [live-server](https://www.npmjs.com/package/live-server) or whatever way you like.

### Go to the serving address
Allow the location access. This will take Lat and Long reported by your browser api and fill that correctly (with current standards). You can then click `Ask
Temperature` to query it. And later find that your backend it serving with response.

![](https://res.cloudinary.com/dpnrocxf9/image/upload/v1604647001/Screenshot_2020-11-06_124625.png)

![](https://res.cloudinary.com/dpnrocxf9/image/upload/v1604647741/Screenshot_2020-11-06_125838.png)

## Query responses
There are many calls offered by middleware, You can get all your calls with this endpoint
https://testnet.aeternity.io/middleware/contracts/calls/address/<Contract_address>

There are much more endpoints to learn about, Some are oracle specific, Visit:- https://github.com/aeternity/aeternal#supported-queries

> The keypairs use in this repo have enough Testnet aeternity to go a long way with current fee standard. But you can always get yours with `aeproject export-config` command
To learn more about AeProject, Visit https://aeproject.gitbook.io/aeproject/

## To learn how to build this from start, Visit https://medium.com/@jeevanjotsinghvital/weather-oracle-with-aeternity-from-scratch-97ee04625463
## To check how it works, Visit: https://www.youtube.com/watch?v=gPuhMhC-q-Y
