let p = new Promise( (resolve, reject)=>{
    let i = 1 + 1;
    if ( i === 2 ){
        resolve("Succeed !");
    }
    else{
        reject("Failed !");
    }
})

p.then( (message)=>{
    console.log("It is resolved, and ", message);
})
.catch( (message)=>{
    console.log("It is rejected, and ", message);
})