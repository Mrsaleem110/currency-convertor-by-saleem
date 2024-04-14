import inquirer from "inquirer";
//define the list of curriencies and their exchange rates
let exchange_rate = {
    "usd": 1,
    "eur": 0.9,
    "jyp": 113,
    "cad": 1.3,
    "aud": 1.65,
    "pkr": 280. //pakistani rupee
    // add more currency and their exchange rate  
};
// prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from",
        choices: ["usd", "eur", "jyp", "cad", "aud", "pkr"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert into ",
        choices: ["usd", "eur", "jyp", "cad", "aud", "pkr"]
    },
    {
        name: "amount",
        type: "input",
        message: "enter the amount to convert"
    }
]);
// perform currency conversion by using formulaty.
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// display the converted amount
console.log(`converted amount = ${converted_amount}`);
