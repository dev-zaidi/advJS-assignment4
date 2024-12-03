const array=[42,true,'Hello, World!',{name:'John',age:25,isStudent:false,},false,3.14,'javaScript is fun!'];

// convert all elements to their string representation using map method
let array1=array.map((element)=>{
    if( typeof(element) === "object"){
        return JSON.stringify(element);
    }
    else 
    return element.toString();
});
console.log(array1);

// filter only numbers using filter method
let array2=array.filter((element)=>{
    if (typeof (element) === 'number'){
        return element;
    }
})
console.log(array2);


// log each element's type on console (do not return anything using forEach method)
let array3=array.forEach((element)=>{
    console.log(typeof (element));
})

// find the first boolean value from the array usign find method
let firstBool=array.find((element)=>{
    if (typeof(element)==='boolean')
        return element;
})
console.log(firstBool);

//find the index of the first object using findIndex method
let indexOfFirstObject= array.findIndex((element)=>{
    if (typeof(element)=='object'){
        return element;
    }
})
console.log(indexOfFirstObject);

// check if an array contains any number using some method
let checkNumber=array.some((element)=>{
     if (typeof(element)=='number'){
        return element;
    }
})
console.log(checkNumber);

// check if all elements in the array are of type 'string' using every method

let checkString=array.every((element)=>{
    if (typeof(element)=='string'){
        return element;
    }
})
console.log(checkString);
