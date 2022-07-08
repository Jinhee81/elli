//JSON

//Javascript Object Notation

//1. Object to JSON
//stringfy(obj)
let array = [1,2,3,4,5];
let rabbit = {"name":"solmi", "age":"10", 'hobby':'computer', 'birthday':new Date()};
let json = JSON.stringify(rabbit);

let json2 = JSON.stringify(rabbit, (key, value) => 
{
    // console.log(`key : ${key}, value : ${value}`);
    return key==='name'?'jinhee':value;

});
console.log(json2);

//2. JSON to Object
//parse(json)

let obj1 = JSON.parse(json);
console.log(obj1);

let obj2 = JSON.parse(json, (key, value)=>{
    return key==='birthday' ? new Date(value) : value;
});


console.log(obj2);

console.log(obj2.birthday.getDate());