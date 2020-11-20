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


prepareFood(function(value){
    console.log("Food callback = ",value);
    prepareFrenchToast(function(value){
        console.log("French Toast callback = ", value);
        prepareCoffee(function(value){
            console.log("Coffee callback = ", value);
        });
    });
});

console.log("After Preparing Food; Dinner is ready !");
