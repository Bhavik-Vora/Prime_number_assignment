import inquirer from "inquirer";
import SieveMethod from "./Methods/Method3.js";
import { NaiveMethod } from "./Methods/Method1.js";
import SquareRootMethod from "./Methods/Method2.js";

export const Validation = async (input) => {
  if(input<1){
    return "No Less than 1 number is allowed"
  }
  if (!isNaN(input) && input.trim() !== '') {
    return true; 
  }
  return 'You must enter a valid number!';
}

const chooseMethod = async () => {
 try {
  const { method } = await inquirer.prompt({
    type: "list",
    name: "method",
    message: "Which method would you like to perform?",
    choices: ["NaiveMethod", "SquareRootMethod", "SieveMethod"],
  });

  if (!method) {
    console.log("No option selected. Exiting...");
  }

  const { n1, n2 } = await inquirer.prompt([
    {
      type: "input",
      name: "n1",
      message: "Enter the First Number:",
      validate: Validation,
    },
    {
      type: "input",
      name: "n2",
      message: "Enter the Second Number:",
      validate: Validation,
    },
  ]);

  const start = parseInt(n1);
  const end = parseInt(n2);

  if (method === "NaiveMethod") {
    NaiveMethod(start, end);
  } else if (method === "SquareRootMethod") {
    SquareRootMethod(start, end);
  } else if (method === "SieveMethod") {
    SieveMethod(start, end);
  }
 } catch (error) {
    console.log("ForeceFully Quitted || No input detected");
    return error;
 }
};

chooseMethod();
