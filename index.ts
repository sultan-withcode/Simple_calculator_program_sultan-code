import inquirer from "inquirer"

const answer= await inquirer.prompt([
    {
        message:"Enter first number",
        type:"number",
        name:"firstnumber"
    },
    {
        message:"Enter second number",
        type:"number",
        name:"secondnumber"
    },
    {
        message:"select one of the operators to perfome action",
        type:"list",
        name:"operators",
        choices:["addition","subtraction","multiplication","division"]
    }
]);

if (answer.operators === "addition"){
    console.log(answer.firstnumber + answer.secondnumber);
    
}
else if(answer.operators === "subtraction"){
    console.log(answer.firstnumber - answer.secondnumber);   
}
else if(answer.operators === "multiplication"){
    console.log(answer.firstnumber * answer.secondnumber);   
}
else if(answer.operators === "division"){
    console.log(answer.firstnumber / answer.secondnumber);   
}
else{
    console.log("please select  vaild  operator");
    
}