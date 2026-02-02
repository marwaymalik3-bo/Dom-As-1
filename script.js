// Task 1: Change Heading Text
let heading = document.getElementById("heading");
heading.innerText = "Welcome to lakki Marwat";

// Task 2: Change Paragraph Text
function changeParagraphText() {
    let para = document.getElementById("paragraph");
    para.innerText = "Malik Amir!";
}

// Task 3: Change Background Color
function changeBackground() {
    document.body.style.backgroundColor = "red";
}

// Task 4: Show Alert
function showAlert() {
    alert("Well come to lakki Marwat!");
}

// Task 5: Update Text Using Input
function updateText() {
    let inputValue = document.getElementById("userInput").value;
    document.getElementById("outputText").innerText = inputValue;
}
