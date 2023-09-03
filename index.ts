import inquirer from "inquirer";

async function askQuestion() {
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "Which calculation you wanna do? \n",
            choices: ["Addition", "Sutraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter 1st Number:"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter 2nd Number:"
        }
    ]);

    if(answers.operator == "Addition"){
        console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
    }else if(answers.operator == "Subtraction"){
        console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
    }else if(answers.operator == "Multiplication"){
        console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`);
    }else if(answers.operator == "Division"){
        console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
    }
    
}

async function startAgain() {
    do{
        await askQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name : "restart",
            message: "Do you want to continue? Press Y or N"
        })
    }
    while(again.restart == "Y" || again.restart == "y" || again.restart == "YES" || again.restart == "yes")   
    
}
startAgain();