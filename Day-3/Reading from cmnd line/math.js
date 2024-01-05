// 1. Importing readline module
const readline = require('readline');

// 2. Configuring readline
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 3. Taking Inputs
interface.question("Enter number 1 ->  ", (num1)=>{
    interface.question("Enter number 2 ->  ", (num2)=>{
        interface.question("Choose option: 1. + | 2. - | 3. - / | 4. * ->  ", (option)=>{
            if(option === "+"){
                var res = Number(num1) + Number(num2);
            }else if(option === "-"){
                var res = Number(num1) - Number(num2);
            }else if(option === "*"){
                var res = Number(num1) * Number(num2);
            }else if(option === "/"){
                var res = Number(num1) / Number(num2);
            }
            console.log(res);
        })

    })
})