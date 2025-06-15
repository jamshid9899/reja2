// E task
function goReverse(string) {
    return string.split('').reverse().join('');
}
console.log(goReverse("James"));
console.log(goReverse("MIT30"));
console.log(goReverse("UNITED STATES AMERICA"));
console.log(goReverse("Express JS"));



// D task
// function compare(word1, word2) {
//     let array1 = word1.split('').sort().join('');
//     let array2 = word2.split('').sort().join('');
//     return array1 === array2;
// }
// console.log(compare("mitgroup", "gtmirpuo"));
// console.log(compare("jamshid", "ajshimd"));
// console.log(compare("Javascript", "Python"));
// console.log(compare("learnenglish", "englishlearn"));
// console.log(compare("watermelon", " nlwaetrome"));
// C-Task
// const moment = require("moment");

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;

//     const time = moment().format("HH:mm:ss");
//     this.time = moment().format("HH:mm:ss");
//   }

//   sotish(productsName, miqdor) {
//     if (this[productsName] < miqdor) {
//       console.log(
//         `${this.time} Yetarlicha ${productsName} yo'q. jami: ${this[productsName]}ta ${productsName} bor`
//       );
//       return;
//     }
//     this[productsName] -= miqdor;
//     console.log(`${this.time} ${miqdor}ta ${productsName} sotildi`);
//   }

//   qabul(productsName, miqdor) {
//     this[productsName] += miqdor;
//     console.log(
//       `${this.time} ${miqdor}ta ${productsName} qoshildi: jami:${this[productsName]}ta ${productsName} bor`
//     );
//   }

//   qoldiq() {
//     console.log(
//       `${this.time} Skladda ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud.`
//     );
//   }
// }

// const myShop = new Shop(4, 5, 2);

// myShop.sotish("non", 3);
// myShop.qabul("cola", 4);
// myShop.qoldiq();
// // B task
// function countDigits(str) {
//   let count = 0;
//   for (let value of str) {
//     if (value >= '0' && value <= '9') {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countDigits("76kLG8y1OjHoYYoy")); //bu yerda 4ta

// A -task
// let word = "obodonlashtiraolmaganimizda";
// let letter = "a";

// function countLetter(word, letter) {
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === letter) {
//             count++;
//         }
//     }
//     console.log(`${word} da "${letter}" harfi ${count} ta`); 
// }
// countLetter(word, letter); 
// countLetter(word, "o");
// countLetter(word, "i");
// countLetter("Jaloliddin", "d");

        // console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba boling", //0-20
//     "togri boshliq tanlang va koproq xato qiling", //20-30
//     "ozingiz ishlashni boshlang", //30-40
//     "siz kuchli bolgan narsalarni qiling", //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi dam oling, foydasi yoq", //60+
// ];
//callback
 //

// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() =>{
//                 resolve(list[5]);
//             }, 1000);
//         })
//         //return list[5]
//         // setTimeout(function(){
//         //     callback(null, list[5]);
//         // }, 5000);
//     }
// }
// then & catch
// console.log("passed here 0");
// maslahatBering(65).then((data) => {
//     console.log("javob:", data);
// })
// .catch((err) => {
//     console.log("ERROR:", err);
// });
// console.log("passed here 1");

//async await
// async function run() {
//     let javob = await maslahatBering(65);
//     console.log(javob);
    // javob = await maslahatBering(71);
    // console.log(javob);
    // javob = await maslahatBering(41);
    // console.log(javob);
// }
// run();

//  ⭐️ Asynchronous: CALLBACK, ASYNC && PROMISE

// DEFINE
// function qoldiqliBolish(a, b, cb) {
//   if (b === 1) {
//     callback("Mahraj nolga teng bololmaydi", null);
//   } else {
//     cb(null, a % b, true);
//   }
// }

// // CALL
// qoldiqliBolish(10, 3, (err, data,) => {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     console.log("Data:", data);
//   }
// });