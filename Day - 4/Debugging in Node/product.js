function calTotal(products){
    let total = 0;
    products.forEach(product => {
       total += product.quatity * product.price 
    });
    return total;
}

const productList =[
    {name:'Lays',price:20,quatity:2},
    {name:'KitKat',price:50,quatity:3},
    {name:'Cookies',price:40,quatity:2}
]

const grandTotal = calTotal(productList)
console.log('Grand Total: '+grandTotal);

/* 
commands to debug node.js using inbuilt debugger of node.js

1. node inspect <filename>
2. setBreakpoint('<filename>',lineNo.)
2. watch('total') //to see through iteration
4. debug> cont //continue cmnd
*/


