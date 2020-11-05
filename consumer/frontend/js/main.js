const keyPair = {
  "publicKey": "ak_fUq2NesPXcYZ1CcqBcGC3StpdnQw3iVxMA3YSeCNAwfN4myQk",
  "secretKey": "7c6e602a94f30e4ea7edabe4376314f69ba7eaa2f355ecedb339df847b6f0d80575f81ffb0a297b7725dc671da0b1769b1fc5cbe45385c7b5ad1fc2eaf1d609d"
}

var getCurrentQueriesCount = 0
var client = null
var contract = null
async function init () {
  const node1 = await Ae.Node({ url: 'https://sdk-testnet.aepps.com', internalUrl: 'https://sdk-testnet.aepps.com' })
  const acc1 = Ae.MemoryAccount({ keypair: keyPair })
  client = await Ae.Universal({
    nodes: [
      { name: 'someNode', instance: node1 },
    ],
    compilerUrl: 'https://latest.compiler.aepps.com',
    accounts: [
      acc1,
    ],
    address: keyPair.publicKey
  })
  contract = await client.getContractInstance(contractSource, { contractAddress })
  getCurrentQueriesCount = await contract.call('get_queries', [], { callStatic: true }).catch(e => console.error(e))
  console.log(getCurrentQueriesCount.decodedResult)
}
init()
async function onAsking () {
  var getString = $("#city_name").val()
  var call_registerOracle = await contract.call('create_query', [getString, 10, 100, 100], { amount: 10 }).catch(e => console.error(e))
  console.log(call_registerOracle)
}


if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  window.alert("Geolocation is not supported by this browser.")
}

function showPosition (position) {
  $("#city_name").val(position.coords.latitude + "," + position.coords.longitude)
}