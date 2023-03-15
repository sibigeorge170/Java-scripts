const { ethers } = require("ethers");

async function transfer ()  

{
const sender_pvt_key = "xx";
const receiver_address = "xx";
const amount = ".05";

let provider = new ethers.InfuraProvider("goerli")
//let provider = ethers.getDefaultProvider(5)
console.log(provider);

let sender_wallet = new ethers.Wallet(sender_pvt_key, "provider");
console.log(sender_wallet.address);

 tx =
{ 
  from : sender_wallet,
  to: receiver_address,
value: ethers.parseEther(amount)
//gasLimit: 0
} 

 sender_wallet.sendTransaction(tx).then((result) => {
    console.log("txHash", result.hash);
   });

console.log("Mining transaction...");
const receipt = await tx.wait();
console.log(tx);
}

transfer()