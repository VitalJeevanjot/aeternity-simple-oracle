const fs = require('fs');
const { Universal, Node, MemoryAccount } = require('@aeternity/aepp-sdk');
const OracleContractCode = fs.readFileSync(__dirname + '/../../contracts/CreateOracle.aes', 'utf-8');
const contract_address = fs.readFileSync(__dirname + '/../../data/contract_address.txt', 'utf-8');
const config = require(__dirname + '/../../aeprojectConfig.json');


console.log(config.defaultWallets[0])
async function initNode () {
  var client = await Universal({
    nodes: [
      {
        name: 'node',
        instance: await Node({
          url: config.host,
          internalUrl: config.internalHost,
        }),
      }],
    accounts: [MemoryAccount({ keypair: config.defaultWallets[0] })],
    compilerUrl: config.compilerUrl
  });
  var contract = await client.getContractInstance(OracleContractCode, { contractAddress: contract_address })

  let query = await contract.methods.create_query("Hello how it's going", 5, 50, 50, {
    amount: 5
  })
  let stringquery = await contract.methods.get_question(query.decodedResult)
  console.log(stringquery.decodedResult)
}
initNode()


