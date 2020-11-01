/*
 * ISC License (ISC)
 * Copyright (c) 2018 aeternity developers
 *
 *  Permission to use, copy, modify, and/or distribute this software for any
 *  purpose with or without fee is hereby granted, provided that the above
 *  copyright notice and this permission notice appear in all copies.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 *  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 *  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 *  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 *  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 *  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 *  PERFORMANCE OF THIS SOFTWARE.
 */

const Deployer = require('aeproject-lib').Deployer;
// const { Universal, Node, MemoryAccount, Crypto } = require('@aeternity/aepp-sdk');
const ORACLE_CONTRACT_PATH = "./contracts/CreateOracle.aes";

describe('Create Oracle', () => {

  let deployer;
  let instance;
  let ownerKeyPair = wallets[0];
  let query_id;
  let queryString = "How can I help you";

  before(async () => {
    console.log(ownerKeyPair)
    deployer = new Deployer('local', ownerKeyPair.secretKey)
  })

  it('Deploying CreateOracle', async () => {
    const deployedPromise = deployer.deploy(ORACLE_CONTRACT_PATH) // Deploy it

    await assert.isFulfilled(deployedPromise, 'Could not deploy the Oracle Smart Contract'); // Check whether it's deployed
    instance = await Promise.resolve(deployedPromise)
    console.log(instance)
    console.log(await instance.create_query.toString())
  })


  it('Check if can Create query', async () => {
    query_id = await instance.create_query(queryString, 5, 50, 50, {
      amount: 5
    })
    console.log(query_id.decodedResult)
    await assert.isOk(query_id, 'Query not created')
  })


})