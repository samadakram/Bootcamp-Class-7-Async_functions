const anyFunction = ()=>{
    return Math.floor(Math.random() * 10) % 2 === 0 ? true : false;
};

const resolveFunction = ()=> console.log("Success");
const rejectFunction = ()=> console.log("Failure");

const result = new Promise((resolve, reject)=>{
    setTimeout(()=>
    (anyFunction() ? rejectFunction() : rejectFunction()),2000);
});

result.then(resolveFunction).catch(rejectFunction);

console.log("Hello World");