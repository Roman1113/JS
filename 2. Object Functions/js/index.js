// let Person = {
//     name: "Jason",
//     age: 26,
//     ShowPerson() {
//         console.log("Name =>", Person.name);
//         console.log("Age =>", Person.age);
//     },

//     SetName(name) {
//         if (typeof (name) === "string") {
//             this.name = name;
//         }
//     }
// };

// Person.ShowPerson();
// Person.SetName("Tom");
// Person.ShowPerson();

// let Person = [
//     {
//         name: "Jason",
//         age: 26,
//         ShowPerson() {
//             console.log("Name =>", this.name);
//             console.log("Age =>", this.age);
//         },

//         SetName(name) {
//             if (typeof (name) === "string") {
//                 this.name = name;
//             }
//         }
//     },
//     {
//         name: "Jesica",
//         age: 22,
//         ShowPerson() {
//             console.log("Name =>", this.name);
//             console.log("Age =>", this.age);
//         },

//         SetName(name) {
//             if (typeof (name) === "string") {
//                 this.name = name;
//             }
//         }
//     }
// ]

//console.log(Person);

// const onePerson = Person.map((item) => {
//     item.ShowPerson();
// });

// function Plus(a, b) {
//     return a + b;
// }
// console.log(Plus(2, 6));

// function Plus(...params) {
//     console.log(params);
//     let res = 0;
//     for (let i = 0; i < params.length; i++) {
//         params += params[i];
//     }
//     return res;
// }
//console.log(Plus(2, 6, 54, 65));

const Multiple = (...params) => {
    console.log(params);
    let res = 1;
    for (let i = 0; i < params.length; i++) {
        params += params[i];
    }
    return res;
}
console.log("Multiple => ", Multiple(2, 6, 54, 65));

// const App = id => console.log(id);

// (function () {
//     let x = 5;
//     console.log(x);
// }());