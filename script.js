/*ლექცია #3 - დავალება #1 - მოცემულია მასივი 
[{name:'Temo',age:'25'},{name:'Lasha',age:'21'},{name: 'Ana',age: '28'}].
დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user-ების მასივს და დააბრუნებს 
ყველაზე პატარა ასაკის მქონე ადამიანის სახელს. */


const arr = [
    {name:'Temo',
    age: 25},

    {name:'Lasha',
    age: 21},

    {name: 'Ana',
    age: 28}
]

let minAge = arr[0].age;
let minAgeUser = '';
function min (arr){
    for(let i = 0; i<arr.length; i++){
        if(arr[i].age<minAge){
            minAge = arr[i].age
            minAgeUser = arr[i].name
    }
}
    return minAgeUser + " " + minAge
}
console.log("დავალება #1: ",min(arr))



/*ლექცია#3 - დავალება #2 - დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user ობიექტს და
დააბრუნებს იგივე მნიშვნელობების მქონე ახალ (განსხვავებულ) ობიექტს.*/

const user = {
    name:'Kakhi',
    lastName: "Varazashvili",
    age: 36,
    city: "Tbilisi"
}
function myFunction (user){
    const newUser = user;
    return newUser
}
console.log("დავალება #2: ",myFunction(user))



/*ლექცია #3 - დავალება #3 - დაწერე პროგრამა, სადაც ორი a და b მომხმარებლები
აგორებენ კამათელს მანამ, სანამ არ გაგორდება 3. რომელიც უფრო ნაკლებ ცდაში გააგორებს სამიანს
ის არის გამარჯვებული.*/


let counterA = 0;    
let counterB = 0;    
let a;
let b;

while(a!=3){
    a = parseInt(Math.random()*5)
    counterA++
    console.log("Player A:",a,"Try:",counterA)
    // break
}
while(b!=3){
    b = parseInt(Math.random()*5)
    counterB++
    console.log("Player B:",b,"Try:",counterB)
    // break
}
if(counterA<counterB){
    console.log("The winner is player A with "+counterA+" attempts")
}
else if(counterB<counterA){
    console.log("The winner is player B with "+counterB+" attempts")

}
else{
    console.log("Draw")
}