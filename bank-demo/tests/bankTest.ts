import Bank from '../src/bank';

//setup
const bank = new Bank();

//scenario 1
const account = bank.createAccount("John Doe", 29, "45678");
if (account.accountNumber === "45678") {
    console.log("Scenario 1 passed");
} else {
    console.log("Scenario 1 failed");
}

//scenario 2
try {
    bank.createAccount("John Doe", 29, "45678");
    console.log("Scenario 2 failed");
} catch (_) {
    console.log("Scenario 2 passed");
}