//Objects
// One of Javascript's data type.
// a collection of related data and/or functionality.
// Nearly all objects in Javascript are instances of Object
// object = { key : value };



//1. Literal properties (문법적 속성?)
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

const jinhee = { name: 'Jinhee', age: 41 };

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

print(jinhee);

jinhee.hasJob = true;
console.log(jinhee.hasJob);

delete jinhee.hasJob;
console.log(jinhee.hasJob);

//2. Computed properties (계산된 속성?)
// key should be always string

console.log(jinhee.name);  //그냥 코딩할때는 .을 쓰지만, 실시간으로 바뀌어야 할때는 ['']로 접근하는 computed property를 써야 한다.
console.log(jinhee['name']);

function printValue(obj, key) {
    console.log(obj.key);//이땐 undefined
    console.log(obj[key]);// 이땐 잘나옴
}

printValue(jinhee, 'name');

// 3. Property value shorthand
const person1 = { name: 'solmi', age: 11 };
const person2 = { name: 'siwon', age: 9 };
const person3 = { name: 'minsun', age: 8 };
const person4 = makePerson('hanju', 42);

function makePerson(name, age) {
    // return {
    //     name : name,
    //     age : age
    // };

    return {
        name,
        age
    };
    //위처럼 매개변수가 똑같을때는 name:, age: 이거를 생략해도 된다.
} //이렇게 해도 되고,

//4. Construnctor function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;가 생략된거
}

const person5 = new Person('nanhee', 38);

console.log(person5);
console.log(person4);

//5. in operator: property existence check (key in obj)
console.log('name' in jinhee);
console.log('age' in jinhee);
console.log('random' in jinhee);
console.log(jinhee.random);

//6. for..in vs for..of
//for (key in obj)
console.clear();
for(key in jinhee) {
    console.log(key);
}

//for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array){
    console.log(value);
}

//7. Fun cloning
//Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'jinhee', age: 20 };
const user2 = user;

console.clear();
console.log(user, user2);

user2.name = 'coder';
console.log(user, user2);

//old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

const user4 = {};
Object.assign(user4, user);

const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'green', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);

console.log(mixed.color);
console.log(mixed.size);//뒤에있는거가 덮어씌어져서 fruit2의 속성이 나온다.
