console.log("Start Preparing Food");

const prepareFood = () => {
    let promise = new Promise((resolve, reject)=>{
        setTimeout( ()=>{
            console.log("Preparing Food");
            resolve("Food is Ready !")
        },10)
    });
    return promise;
}

const prepareFrenchToast = () => {
    let promise = new Promise( (resolve, reject)=>{
        setTimeout(()=>{
            console.log("French Toast is Preparing");
            resolve("French Toast is Ready !")
        },20)
    });
    return promise;
}

const prepareCoffee = () => {
    let promise = new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            console.log("Preparing Coffee");
            resolve("Coffee is Ready !")
        },30)
    });
    return promise;
}

let promise = prepareFood();

promise.then( (value)=>{
    console.log("Food Callback = ", value);
    return prepareFrenchToast();
})
.then( (prepareFrenchToastValue)=>{
    console.log("French Toast Callback = ", prepareFrenchToastValue);
    return prepareCoffee();
})
.then( (prepareCoffeeValue)=>{
    console.log("Coffee Callback = ", prepareCoffeeValue);
})
.catch( (error)=>{
    console.log("Error = ", error);
})


console.log("After Preparing Food; Food is Read !");