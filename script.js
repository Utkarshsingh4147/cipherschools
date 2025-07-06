// Question 5
function showGreeting() {
    alert("Hello! Welcome to my website 😊");
}

// Question 6
const sum = (a, b) => a + b;
function showSum() {
    document.getElementById("sumResult").textContent = "Sum: " + sum(5, 3);
}

// Question 7
function changeMessage() {
    document.getElementById("message").textContent = "The message has been changed!";
}

// Question 8
function updateOutput() {
    const text = document.getElementById("inputText").value;
    document.getElementById("outputText").textContent = text;
}

// Question 9
function logDOM() {
    const parent = document.getElementById("parent");
    console.log("Parent Node:", parent.parentNode);
    console.log("Child Nodes:", parent.childNodes);
    console.log("Next Sibling:", parent.nextSibling);
}

// Question 10
function addListItem() {
    const ul = document.getElementById("myList");
    const li = document.createElement("li");
    li.textContent = "New Item";
    ul.appendChild(li);
}

// Question 11
function createPerson() {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    const person = new Person("John", 25);
    console.log("Constructor Person:", person);
}

// Question 12
function createPersonClass() {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }
    const person = new Person("Jane", 30);
    person.sayHello();
}
