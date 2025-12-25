
// const listItems = document.querySelectorAll("li"); //store all li elements in a NodeList variable

// function toggleDone(e){
//     if(!e.target.className)
//     {
//         e.target.className = "done";
//     }
//     else
//     {
//         e.target.className = "";
//     }
// }

// listItems.forEach(function(item) {
//     item.addEventListener("click", toggleDone);
// });

// const myHeading = document.querySelector("h1"); //works only if element exists
// myHeading.textContent = "hello world";


// let fruit = prompt("what fruit to buy", "apple");
// let user = {
//     name: "Eyal",
//     age: 22,
//     isAdmin: true,
//     [fruit]: 5,
// };
// alert(user.apple);

// function makeUser(name, age){
//     return {
//         name,
//         age,
//     }
// };
// console.log(makeUser("Eyal", 22));


// function Player(name, marker){
//     this.name = name;
//     this.marker = marker;
//     this.sayName = function(){
//         return "hello " + this.name;
//     };
// }

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.walk = function(){
//     return "walking";
// }

// Player.prototype.talk = function(){
//     return "talking";
// }

// const player1 = new Player("Eyal", "X");
// const player2 = new Player("Kim", "O");
// Player.prototype = Person.prototype;
// const person1 = new Person("Eyal", 22);
// Player.prototype.fly = function(){
//     return "flying";
// }

// console.log(person1.fly());

let car = {
    brand: "Honda",
    getBrand: function(){
        return this.brand;
    },
};

let brand = car.getBrand.bind(car);
console.log(brand);
