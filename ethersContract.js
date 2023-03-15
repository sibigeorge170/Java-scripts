//Test ether contract
const { ethers } = require("ethers");

const sender_pvt_key = "pvt key";
const contract_address = "Contract address";

let provider = new ethers.InfuraProvider("goerli");
console.log(provider);

let sender_wallet = new ethers.Wallet(sender_pvt_key, provider);
console.log(sender_wallet.address);

const contract_ABI = 
[
{
    "inputs":[],
    "name":"decrement",
    "outputs":[{"internalType":"uint256","name":"","type":"uint256"}],
    "stateMutability":"nonpayable",
    "type":"function"
},
{
    "inputs":[],
    "name":"increment",
    "outputs":[{"internalType":"uint256","name":"","type":"uint256"}],
    "stateMutability":"nonpayable",
    "type":"function"
},
{
    "inputs":[],
    "name":"x",
    "outputs":[{"internalType":"uint256","name":"","type":"uint256"}],
    "stateMutability":"view",
    "type":"function"
}
]

const contract = new ethers.Contract(contract_address, contract_ABI, provider);

async function interact() {
    console.log("contract start...");
    const value = await contract.x();
    console.log(value);
   }
interact();

