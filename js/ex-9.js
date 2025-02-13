// faulty calc:
let randno = Math.random()*100;
let x = Math.ceil(randno)
console.log(x);

let a = prompt("enter first no.:")
let b = prompt("enter opeeration:")
let c = prompt("enter second no.:")

let obj ={
    '+' : "-",
    "-" : "+",
    "*" : "/",
    "/" : "*",
}

if(x<=10){
    b = obj[b]
    console.log(`the result is: ${`${a} ${b} ${c}`}`);
    alert(`the reulst is ${eval(`${a} ${b} ${c}`)}`);
}
else{
    console.log(`the result is: ${`${a} ${b} ${c}`}`);
    alert(`the reulst is ${eval(`${a} ${b} ${c}`)}`);
}





// let randno = Math.random()*3;
// let x = Math.ceil(randno)
// console.log(x);

// let a = prompt("enter first three adjectives");
