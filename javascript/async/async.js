//async & await
//clear style of using promise :)

//1. async
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         //do network request in 10 secs...
//         //return 'jinhee'; //이러면 pending상태가 된다.
//         resolve('jinhee');
//     })//promise의 상태는 pending, reject,fulfilled 이렇게 3개가 있음, 그래서 반드시 return 말고 resolve로 코드 작성해야 함
// }
//async를 쓰면 promisc를 감싸는 syntatic sugar (promise 코드의 줄들을 간소하게 줄여줘서 문법적 설탕이라고 말하는 것 같음)

async function fetchUser(){
    return 'jinhee';
}//async를 function 앞에 쓰면 자동으로 코드블럭이 promise로 변경되는 것!@@@

const user = fetchUser();
user.then(console.log);
// console.log('hello, '+user+', good morning!');
console.log(user+'good morning!');


// 2. await 💛
// await는 기다린다는 뜻

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '🍎';
}

async function getBanana() {
    await delay(3000);
    return '🍌';
}

// function getBanana() {
//     return delay(3000)
//     .then(()=>'🍌');
// } async를 빼면 이렇게 만드는 것임

// getBanana().then(banana => `${banana}`).then(console.log);

// function pictFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     })
// }

// async function pictFruits() {
//     try{
//         const apple = await getApple();
//         const banana = await getBanana();
//         return `${apple} + ${banana}`;
//     } catch() {

//     }
    
// }이건 직렬구조여서 애플 기다리고 바나나 기다려서 시간이 오래걸린다. 그래서 병렬로 만들어줘야 한다.

async function pictFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pictFruits().then(console.log);


//3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
//이모티콘 사용 - 이모지는 유티코드중 하나로 어느 운영체체에서 쓸 수 있다.
// 맥북은 'control + command + space', 윈도우는 '윈도우 + ;' 라고 함
