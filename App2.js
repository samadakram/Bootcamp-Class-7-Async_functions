function fetchApi(){
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Promise Function");
            reject("error define");
        },1000)
    })

    return promise
}

async function _asyncJs(){
    try{
        let data = await fetchApi();

    console.log(data, "Successfull");
    }
    catch(error){

        console.log(error, "error")

    }
}

_asyncJs();