// Blocking and Non Blocking 


//  Blocking code
/* The code is running a for loop that iterates 100,000 times. Inside the loop, it does nothing. After
the loop, it logs the message "waiting till loop end" to the console. Finally, it logs the message
"What a drag!" to the console. */
/* 
for(var i = 0; i < 100000 ; i++) {}

console.log("waiting till loop end");

console.log("What a drag!")
*/

// Non Blocking code

setTimeout(() => {
    console.log("waiting till loop end");
}, 8000);

console.log("What a drag!")
