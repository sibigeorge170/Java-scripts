const contractAddress = "0xf2d748f2600ec8f15fb71626d56e8263e85565d9";
 
const connect = async () => {
 const provider = new ethers.providers.Web3Provider(window.ethereum);
 const signer = provider.getSigner();
 const walletContract = new ethers.Contract(contractAddress, abi, signer);
 const accounts = await window.ethereum.request({
   method: "eth_requestAccounts",
 });
 const account = accounts[0];
 
 document.getElementById("wallet-address").textContent =
   account.substring(0, 5) + "..." + account.substring(37, 42);
 document.getElementById("pending-allowance").textContent =
   await walletContract.myAllowance();
 document.getElementById("wallet-balance").textContent =
   await walletContract.getWalletBalance();
};