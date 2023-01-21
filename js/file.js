const fruits = ["watermelon", "orange", "apple", "apfel", "birne"];
console.log(fruits);
// ---------------
console.log(fruits[0] = "melon");
console.log(fruits[2] = "kiwi");
console.log(fruits[3] = "pomegranate");
// ---------------
const fruit = fruits.indexOf("birne");
console.log(fruits[4] = "kaki");
// ---------------
for (let i = 0; i <fruits.length; i += 1) {
    console.log(fruits[i])    
}
