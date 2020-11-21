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

async function startCooking(){
    let prepareFoodValue = await prepareFood();
    console.log("Food =>", prepareFoodValue);
    let prepareFrenchToastValue = await prepareFrenchToast();
    console.log("Toast =>", prepareFrenchToastValue);
    let prepareCoffeeValue = await prepareCoffee();
    console.log("Coffee =>", prepareCoffeeValue); 
}


startCooking();