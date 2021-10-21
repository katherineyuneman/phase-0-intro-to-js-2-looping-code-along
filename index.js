// //for (let age=30; age < 40; age++){
//     console.log(`I'm ${age} years old.  Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i =0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     } 
//     return gifts;
// }

// wrapGifts(gifts);


const messageHolder =[];


function writeCards(nameArray, giftType){
    for (let i = 0; i < nameArray.length; i++) {
    messageHolder.push(`Thank you, ${nameArray[i]}, for the wonderful ${giftType} gift!`);
    }
    
    return messageHolder;
}

console.log(writeCards([], 'birthday'));

//


function countDown(number){
    let countDown = 10;
    while (countDown > -1){
        console.log(countDown--);
    }
}
countDown();