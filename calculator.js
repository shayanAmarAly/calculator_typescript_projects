import inquirer from "inquirer";
const response = await inquirer.prompt([
    {
        name: "operand1",
        type: "number",
        message: "Kindly enter your first operand"
    },
    {
        name: "operand2",
        type: "number",
        message: "Kindly enter your second operand"
    },
    {
        name: "operation",
        type: "list",
        choices: ["+", "-", "/", "*"],
        message: "Select operation"
    },
]);
// Create structure to handle (response)
const { operand1, operand2, operation } = response;
if (operand1 && operand2 && operation) {
    let result = 0;
    if (operation == "+") {
        result = operand1 + operand2;
    }
    else if (operation == "-") {
        result = operand1 - operand2;
    }
    else if (operation == "/") {
        result = operand1 / operand2;
    }
    else if (operation == "*") {
        result = operand1 * operand2;
    }
    console.log(`Your Result is ${result}`);
}
else {
    console.log("Kindle enter operands and give operations carefully");
}
