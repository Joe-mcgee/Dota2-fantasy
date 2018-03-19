const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../.env')});

const provider = new HDWalletProvider(
  process.env.MEMNONIC,
  process.env.INFURA_KEY
  );

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from accounts', accounts[0])
  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data: bytecode})
  .send({gas: '1000000', from: accounts[0]})

  console.log(interface)
  console.log(result.options.address)
};
deploy()
