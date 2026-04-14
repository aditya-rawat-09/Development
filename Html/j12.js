let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnIndicator = document.querySelector("#turn-indicator");

let turnO = true; // true for O, false for X
let count = 0; // To check for draw
let gameOver = false; // Prevent further moves after win/draw

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to reset the game
const resetGame = () => {
    turnO = true;
    count = 0;
    gameOver = false;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.style.color = "#fff";
    });
    msgContainer.classList.add("hide");
    turnIndicator.innerText = "Player O's Turn";
};

// Function to disable all boxes
const disableBoxes = () => {
    boxes.forEach((box) => box.disabled = true);
};

// Function to show winner
const showWinner = (winner) => {
    msg.innerText = `🎉 Congratulations! Winner is ${winner} 🎉`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    gameOver = true;
    setTimeout(resetGame, 2000); // Reset after 2 seconds
};

// Function to check for a draw
const showDraw = () => {
    msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
    gameOver = true;
    setTimeout(resetGame, 2000); // Reset after 3 seconds
};

// Function to check for winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            showWinner(pos1);
            return true;
        }
    }
    return false;
};

// Updated click event
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "" || gameOver) return;

        box.innerText = turnO ? "O" : "X";
        box.style.color = turnO ? "#0a0" : "#a00";
        box.disabled = true;
        count++;

        if (checkWinner()) {
            return; // Stop execution if a winner is found
        }

        if (count === 9) {
            showDraw();
            return;
        }

        turnO = !turnO; // Switch turn
        turnIndicator.innerText = turnO ? "Player O's Turn" : "Player X's Turn";
    });
});

// Reset button event
resetBtn.addEventListener("click", resetGame);

// Initialize game on load
resetGame();