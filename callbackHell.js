console.log("Class will be Started at 9:00 am ");

const classTimeTable = (callback) =>{
    setTimeout( ()=>{
        console.log("Class 1: Started => Programming");
        callback("Web Development");
    },2000);
}

const class_2 = (callback) => {
    setTimeout( () => {
        console.log("Class 2 Started => Web Development");
        callback("DataBase Systems");
    },4000);
}

const class_3 = (callback) => {
    setTimeout( ()=>{
        console.log("Class 3 Started => DataBase Systems");
        callback("Off Time !");
    },6000);
}

classTimeTable(function(value){
    console.log("Next Class is => ",value);
    class_2(function(value){
        console.log("Next Class is => ",value);
        class_3(function(value){
            console.log(" => ",value);
        });
    });
});


console.log("Classes Off Time !");