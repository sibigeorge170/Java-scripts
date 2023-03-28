// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

// Start of smart contract

contract Wallet {
//Declare variables
    address public owner;
    mapping(address => User) public users; 

    struct User { 
        address userAddress;
        uint Allowance;
        uint Validity;
    } 
  event AllowanceRenewed(
      address indexed user, 
      uint allowance, 
      uint timeLimit);

  event CoinsSpent(
      address indexed receiver, 
      uint amount);

    modifier onlyOwner() {
       msg.sender == owner;
       _;}

    constructor() {
        owner == msg.sender;
    }

    receive() external payable onlyOwner {}

   function getWalletBalance() public view returns (uint) {
       return address(this).balance; }

  function renewAllowance(
      address _user, 
      uint _allowance, 
      uint _timeLimit) public onlyOwner 
      {
       uint validity = block.timestamp + _timeLimit;
       users[_user] = User(_user, _allowance, validity);
       emit AllowanceRenewed(_user, _allowance, _timeLimit);
      }
 
   function myAllowance() public view returns(uint) {
       return users[msg.sender].Allowance;
        }
 
   function spendCoins(
       address payable _receiver, 
       uint _amount) public 
       {
        User storage user = users[msg.sender];
        require(block.timestamp < user.Validity, "Validity expired!!");
        require(_amount <= user.Allowance, "Allowance not sufficient!!");
     
       user.Allowance -= _amount;
       _receiver.transfer(_amount);
       emit CoinsSpent(_receiver, _amount);
        }
}
