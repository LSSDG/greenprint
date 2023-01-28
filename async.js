console.log('person1:shows ticket');
console.log('person2:shows ticket');
const prevMovie = async()=>{
    const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket');
        },3000)
    })

const getPopcorn = new Promise((resolve,reject)=>{
    resolve('popcorn');
})
const getButter = new Promise((resolve,reject)=>{
    resolve('butter');
})
const getDrinks = new Promise((resolve,reject)=>{
    resolve('drinks');
})

let ticket = await promiseWifeBringingTicks;

console.log(`wife:i have the ${ticket}`);
console.log('husband:we should go in');
console.log('wife:i am hungry');

let popcorn = await getPopcorn;
console.log(`husband:i got ${popcorn}`);
console.log('husband:we should go in');
console.log('wife:i need butter on my popcorn');
let butter = await getButter;

console.log(`husband:i got ${butter}`);
console.log('husband:we should go in');
console.log('wife:i need drinks');
let drinks = await getDrinks;
console.log(`husband:i got ${drinks}`);
console.log('husband:we should go in');
console.log('wife:yes lets go');

return ticket;
}
prevMovie.then((t)=>{console.log(`person3:shows ${t}`)});
console.log('person4:shows ticket');
console.log('person5:shows ticket');