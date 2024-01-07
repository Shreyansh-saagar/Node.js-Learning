// Using VSCode debugger
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

function print(value){
    console.log(value);
}

const grandTotal = calTotal(productList)
print(grandTotal)