
// Indicates the type for all bank accounts in the bank
interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}

/**
 * Bank class that manages all bank accounts in the bank
 */
export default class Bank {
    // Array to store all bank accounts in the bank
    private accounts: BankAccount[] = [];

    /**
     * Creates a new account with a unique account number
     * @param {string} name - Name of the customer
     * @param {number} age - Age of the customer
     * @param {string} accountNumber - Account number of the customer
     * @returns {BankAccount} - The created account
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount | undefined{
        const isAccExists = this.findAccount(accountNumber);
        if (isAccExists) {
            throw new Error("Account already exists");
        }
        const account = {
            name: name,
            age: age,
            accountNumber: accountNumber,
            balance: 0
        }
        this.accounts.push(account);
        return account
    }

    /**
     * Method to get the balance of an account in the bank
     * @param {string} accountNumber - Account number of bank account in the bank
     * @returns balance - The current balance of the specified bank account if it exists
     */
    public getAccountBalance(accountNumber: string): number | undefined {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("Account does not exist");
        }
        return account.balance;
    }

    /**
     * Method to deposit money into an account in the bank
     * @param {string} accountNumber - Account number of a bank account in the bank
     * @param {number} money - Amount of money to be deposited into the bank account
     */
    public deposit(accountNumber: string, money: number): void | undefined {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("Account does not exist");
        }
        account.balance += money;
    }

    /**
     * Method to find account in the bank
     * @param {string} accountNumber - Account number of bank account in the Bank
     * @returns BankAccount - The existing account if it exists
     */
    private findAccount(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }
}
