// Encapsulation

class BankAccount {
  #balance; // private
  publicBalance; // publix

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ${amount}, balance is now ${this.#balance}`);
    }
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew ${amount}, balance is now ${this.#balance}`);
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500); // Deposited 500, balance is now 1500
account.withdraw(200); // Withdrew 200, balance is now 1300
console.log(account.getBalance()); // Outputs: 1300
console.log(account.publicBalance); // Outputs: 1300
// account.#balance; // SyntaxError: Private field '#balance' must be declared in an enclosing class

class WorldBank {
  #worldBankBalance;

  account = new BankAccount();

  constructor(initialBalance) {
    this.#worldBankBalance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#worldBankBalance += amount;
      console.log(account);
      console.log(
        `Deposited to world Bank ${amount}, balance is now ${
          this.#worldBankBalance
        }`
      );
    } else {
      throw new Error("Please enter a sufficient amount to deposit");
    }
  }

  getBalance() {
    return this.#worldBankBalance;
  }
}

const worldBankAccount = new WorldBank(100000);
worldBankAccount.deposit(2000);

console.log(worldBankAccount.getBalance());
