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

// Deposit Money Tests:
console.log("Deposit Money Tests:")

// scenario 1:
bank.deposit("45678", 20);
if (bank.getAccountBalance("45678") === 20) {
    console.log("Scenario 1 passed");
} else {
    console.log("Scenario 1 failed");
}

try {
    bank.deposit("0", 20);
    console.log("Scenario 2 failed");
} catch (_) {
    console.log("Scenario 2 passed");
}

console.log();

// Withdraw Money Tests:
console.log("Withdraw Money Tests:")

// scenario 1:
bank.withdraw("45678", 10);
if (bank.getAccountBalance("45678") === 10) {
    console.log("Scenario 1 passed");
} else {
    console.log("Scenario 1 failed");
}

// scenario 2:
try {
    bank.withdraw("0", 10);
    console.log("Scenario 2 failed");
} catch (_) {
    console.log("Scenario 2 passed");
}

// scenario 3:
try {
    bank.withdraw("45678", 11);
    console.log("Scenario 3 failed");
} catch (_) {
    console.log("Scenario 3 passed");
}