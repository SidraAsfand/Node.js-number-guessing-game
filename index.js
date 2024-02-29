import inquirer from "inquirer";
const systemgeneratedNo = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([{
        type: "number",
        name: "userGuess",
        message: "Guess a Number between 1 to 10 and write it"
    }]);
const { userGuess } = answers;
console.log(`Guessed NO: ${userGuess}, Correct Answer is: ${systemgeneratedNo}`);
if (userGuess === systemgeneratedNo) {
    console.log("correct  Answer!Congratulations you Win!");
}
else {
    console.log("Wrong Answer! Better  luck next time!");
}
