console.log("Day start");

const fajarTime = ()=>{
    let promise = new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            console.log("Jamat at 6:15 am !");
            resolve("Zohar");
        },1000)
    });
    return promise;
}

const zoharTime = ()=>{
    let promise = new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            console.log("Jamat at 1:30 pm !");
            resolve("Asar");
        },2000)
    });
    return promise;
}

const asarTime = ()=>{
    let promise = new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            console.log("Jamat at 4:30 pm !");
            resolve("Magrib");
        },3000)
    });
    return promise;
}

const magribTime = ()=>{
    let promise = new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            console.log("Jamat at 5:50 pm !");
            resolve("Isha");
        },4000)
    });
    return promise;
}

const ishaTime = ()=>{
    let promise = new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            console.log("Jamat at 7:30 pm !");
            resolve("Sleep");
        },5000)
    });
    return promise;
}

let promise = fajarTime();

promise.then( (value)=>{
    console.log("Next Namaz =>", value);
    return zoharTime();
})
.then( (value)=>{
    console.log("Next Namaz =>", value);
    return asarTime();
})
.then( (value)=>{
    console.log("Next Namaz =>", value)
    return magribTime();
})
.then( (value)=>{
    console.log("Next Namaz =>", value);
    return ishaTime();
})
.then( (value)=>{
    console.log(`After Isha Jamat ${value} time will stared !`);
})
.catch( (error)=>{
    console.log("Error =>", error);
})