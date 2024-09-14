import Bank from '../src/bank';

// setup
const bank = new Bank();

// Create Account Tests:
console.log("Create Account Tests:");

// scenario 1
const account = bank.createAccount("John Doe", 29, "45678");
if (account.accountNumber === "45678") {
    console.log("Scenario 1 passed");
} else {
    console.log("Scenario 1 failed");
}

// scenario 2
try {
    bank.createAccount("John Doe", 29, "45678");
    console.log("Scenario 2 failed");
} catch (_) {
    console.log("Scenario 2 passed");
}

console.log(); // provide separation with next tests

// Check Balance Tests:
console.log("Get Account Balance Tests:")

// scenario 1
const accountBalance = bank.getAccountBalance("45678");
if (accountBalance === 0) {
    console.log("Scenario 1 passed");
} else {
    console.log("Scenario 1 failed");
}

try {
    bank.getAccountBalance("0");
    console.log("Scenario 2 failed");
} catch (_) {
    console.log("Scenario 2 passed");
}

console.log();