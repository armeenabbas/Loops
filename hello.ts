//array
let students=[
    {name:"Ali",rollnumber:123},
    {name:"Arham",rollnumber:234},
    {name:"Akbar",rollnumber:235},
]
// to print just the name of one student
console.log(students[1].name);

//to put a type init we will give student type but with array bracket like this


//***************************************************************************************
//slice and splice
let fruit:string[]=["Mango","Apple","Banana","Kiwi"];
let dupFruit=fruit.slice();
dupFruit.pop();
console.log(dupFruit);

//just to print to elements
let dupFruit=fruit.slice(1,3);
console.log(dupFruit)


//slice copy splice remove can also replace from it


//splice
//to remove any element from mid
let fruits:string[]=["Mango","Apple","Banana","Kiwi"];
fruits.splice(1,2,"Grapes")
console.log(fruits)

let fruitt:string[]=["Mango","Apple","Banana","Kiwi"];
fruits.splice(1,0,"Grapes","strawberry")
console.log(fruitt) // to add any elements

let fruit:string[]=[
    'm','n','o']
    console.log(fruit[0]) //to print unchange array
    fruit.splice(1,2,"grapes")
    console.log(fruit[3]) //to print change element array

    let obj1={
        age:20,
        name:"Ali"
    }
    console.log(obj1.name)

    to remove from starting use shift()
    let fruits:string[]=["Mango","Apple","Banana","Kiwi"];
    fruits.splice(1,0,"Orange")
    console.log(fruit);

//****************************************************************************/
    //Tuples
    //are only in Typescript not in javascript

    //sequence matter
    let fruits:[string,string]=["Mango","Apple"];
    let fruit:[string,number]=["Mango",22];

    type MyTuple=[string,number]
    let fruitss:MyTuple=["Mango",22] 


/*******************************************************************************/
// Loops

//loop index start from 0
// variable for staring loop,condition,increment
// crtl + c will stop the loop

for(let i=0;i<3;i++){
    console.log("sorry!!")
}

for(let i=0;i<=3;i++){
    console.log("sorry!!")
}

for(let i=1;i<=10;i++){
    console.log(i)
}



