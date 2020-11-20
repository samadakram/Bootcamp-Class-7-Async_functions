// console.log("Before Preparing Food !");

// function prepareFood(){

//     console.log("Preparing Food !");

// }

// prepareFood();

// console.log("After Preparing Food; Dinner is ready !")

console.log("Before Preparing Food !");

function prepareFood(callback){
    setTimeout(()=>{
        console.log("Preparing Food");
        callback("Food is Ready !")
    },10)
}

function prepareFrenchToast(callback){
    setTimeout(()=>{
        console.log("Preparing French Toast");
        callback("French Toast is ready !")
    },20)
}

function prepareCoffee(callback){
    setTimeout(()=>{
        console.log("Preparing Coffee");
        callback("Coffee is ready !")
    },30)
}

function myCallback(value){
    console.log("Food callback = ",value);
    prepareCoffee(coffeeCallback);
}

function frenchToastCallback(value){
    console.log("French Toast callback = ", value);
    prepareFrenchToast(frenchToastCallback);
}

function coffeeCallback(value){
    console.log("Coffee callback = ", value);
}

prepareFood(myCallback);

console.log("After Preparing Food; Dinner is ready !");
