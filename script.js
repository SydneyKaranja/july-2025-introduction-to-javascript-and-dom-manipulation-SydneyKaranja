// Part 1
let age = 18;
if (age >= 18){
    console.log("You are an adult");
} else{
    console.log("You are underage")
}

let usernameInput = document.getElementById('username');
let greetBtn = document.getElementById('greetBtn');
let greetingPara = document.getElementById('greetings');

greetBtn.addEventListener('click', function (){
let name = usernameInput.value;
if (name) {
    greetingPara.textContent = "Hello " + name + ", How are you 🫱🏾‍🫲🏼";
}else{
    greetingPara.textContent = "Please enter your name!";
}
});

// part 2

function calculate(price, quantity){
    return price * quantity;
}

console.log("Total: ", calculate(50, 3));

// Part 3

for(let i = 0; i <=5; i++){
    console.log("Loop Iteration: ", i);
}

let countdownBtn = document.getElementById('countdownBtn');
let countdownPara = document.getElementById('countdown');

countdownBtn.addEventListener('click', function(){
    let count = 5;
    countdownPara.textContent = "Start Counting....";
    let interval = setInterval(function (){
        if (count > 0){
            countdownPara.textContent = count;
            count--;
        }else{
            countdownPara.textContent = "Blast Off!! 🚀";
            clearInterval(interval);
        }
    }, 1000);
});




// Part 4

document.getElementById('title').textContent = "JS Assignment OOO";

document.getElementById('title').addEventListener('click', function(){
    this.classList.toggle("highlight");
});


let newPara = document.createElement("p");
newPara.textContent = "This is a paragraph created directly from Js";
document.body.appendChild(newPara);