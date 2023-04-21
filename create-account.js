function createAccount(pin, amount) {
    this.pin = pin;
    this.amount = amount;
  }
  
  createAccount.prototype.checkBalance = function(pin) {
   if(this.pin === pin){
      return this.amount
   }else if(this.pin !== pin){
    return "Invalid PIN."
   }
  };
  
  createAccount.prototype.deposit = function(pin, cash) {
    if(this.pin === pin){
      return `Succesfully deposited $${cash}. Current balance: $${this.amount + cash}.`
   }
  }
  
  createAccount.prototype.withdraw = function(pin, cash) {
    if(this.pin === pin){
      return `Succesfully withdrew $${cash}.Current balance: $${this.amount - cash}.`
   }else if(this.amount < cash){
     return `Withdrawal amount exceeds account balance. Transaction cancelled.`
   }
  }
  createAccount.prototype.changePin = function(oldPin, newPin) {
    if(this.pin === oldPin){
     newPin =  this.pin;
     return  "PIN successfully changed!"
    }
  }

module.exports = { createAccount };
