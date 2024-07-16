var num = window.prompt("Enter a number");
num = parseInt(num);

var movableElement = document.createElement("div");
movableElement.setAttribute("class", "movable_element fa-solid fa-chess-king");


var rightSection = document.createElement("div");
rightSection.setAttribute("class", "right_section");

var randomX = Math.floor(Math.random() * num);
var randomY = Math.floor(Math.random() * num);


var scoreDivHead = document.createElement("div");
scoreDivHead.setAttribute("class", "score_div_head");
scoreDivHead.innerHTML = "SCORE";


var scoreDiv = document.createElement("div");
scoreDiv.setAttribute("class", "score_div");
var score = 0;
scoreDiv.innerHTML = score;

if (num > 8) {
    alert("Please enter a number less than 9");
} 
else {
    var container = document.getElementsByClassName("container")[0];
    var gridContainer = document.createElement("div");
    gridContainer.setAttribute("class", "grid_container");

    var obstacle = document.createElement("div");
    obstacle.setAttribute("class", "obstacle fa-solid fa-chess-queen");
    obstacle.style.transition = "all 1s";
    obstacle.style.transitionDelay = "0.1s";

    var index = 1;

    
    console.log(randomX, randomY);
    for (let i = 0; i < num; i++) {
        let gridRow = document.createElement("div");
        gridRow.setAttribute("class", "grid_row");
        for (let j = 0; j < num; j++) {
            var gridElement = document.createElement("div");
            gridElement.setAttribute("class", "grid_element");
            // gridElement.innerHTML = i + " - " + j;
            gridRow.appendChild(gridElement);
            if ((i % 2 == 0 && j % 2 != 0) || (i % 2 != 0 && j % 2 == 0)) {
                gridElement.style.backgroundColor = "#739552";
            }
        }
        gridContainer.appendChild(gridRow);
    }
    gridContainer.appendChild(movableElement);
    container.appendChild(gridContainer);


    var buttonsContainer = document.createElement("div");
    buttonsContainer.setAttribute("class", "buttons_container");

    var currX = 0;
    var currY = 0;

    

    var leftButton = document.createElement("div");
    leftButton.setAttribute("class", "buttons left_button fa-solid fa-arrow-left");
    // leftButton.innerHTML = "left";
    leftButton.onclick = function() {
        if (currY > 0) {
            currY -= 1;
            movableElement.style.left = `${(currY) * (100 / num)}%`;
            if (currX == randomX && currY == randomY) {
                generateObstacle();
            }
        } else {
            score = 0;
            scoreDiv.innerHTML = score;
            alert("out of grid");
        }
    }

    var rightButton = document.createElement("div");
    rightButton.setAttribute("class", "buttons right_button fa-solid fa-arrow-right");
    // rightButton.innerHTML = "right";
    rightButton.onclick = function() {
        if (currY < num - 1) {
            currY += 1;
            movableElement.style.left = `${(currY) * (100 / num)}%`;
            if (currX == randomX && currY == randomY) {
                generateObstacle();
            }
        } else {
           alert("out of grid");
           score = 0;
           scoreDiv.innerHTML = score;
        }
        
    }

    var upAndDownButtonsContainer = document.createElement("div");
    upAndDownButtonsContainer.setAttribute("class", "up_and_down");

    var upButton = document.createElement("div");
    upButton.setAttribute("class", "buttons fa-solid fa-arrow-up");
    // upButton.innerHTML = "up";
    upButton.onclick = function() {
        if (currX > 0) {
            currX -= 1;
            movableElement.style.top = `${(currX) * (100 / num)}%`;
            if (currX == randomX && currY == randomY) {
                generateObstacle();
            }
        } else {
           alert("out of grid");
           score = 0;
           scoreDiv.innerHTML = score;

        }
    }

    var downButton = document.createElement("div");
    downButton.setAttribute("class", "buttons fa-solid fa-arrow-down");
    // downButton.innerHTML = "down";
    downButton.onclick = function() {
        if (currX < num - 1) {
            currX += 1;
            movableElement.style.top = `${(currX) * (100 / num)}%`;
            if (currX == randomX && currY == randomY) {
                generateObstacle();
            }
        } else {
           alert("out of grid");
           score = 0;
           scoreDiv.innerHTML = score;
        }
    }

    


    buttonsContainer.appendChild(leftButton);
    upAndDownButtonsContainer.appendChild(upButton);
    upAndDownButtonsContainer.appendChild(downButton);
    buttonsContainer.appendChild(upAndDownButtonsContainer);
    buttonsContainer.appendChild(rightButton);

    

    rightSection.appendChild(scoreDivHead);
    rightSection.appendChild(scoreDiv);
    rightSection.appendChild(buttonsContainer);
    container.appendChild(rightSection);
}

function keyDown(event) {
    var myKeys = {
        "ArrowRight" : rightButton,
        "ArrowLeft" : leftButton,
        "ArrowDown" : downButton,
        "ArrowUp" : upButton
    }
    
    Object.entries(myKeys).map(obj  => {
        if (event.key == obj[0]) {
            obj[1].click();
            obj[1].setAttribute("style", "box-shadow: 0px 0px 2px 2px #739552");
        }
        
        console.log(currX, currY);
        if (currX == randomX && currY == randomY) {
            generateObstacle();
        }
    })

}

function keyUp(event) {
    var myKeys = {
        "ArrowRight" : rightButton,
        "ArrowLeft" : leftButton,
        "ArrowDown" : downButton,
        "ArrowUp" : upButton
    }
    
    Object.entries(myKeys).map(obj  => {
        if (event.key == obj[0]) {  
            obj[1].removeAttribute("style", "box-shadow: none");
        }
    })
}



gridContainer.appendChild(obstacle);
obstacle.style.left = `${randomY * (100 / num)}%`;
obstacle.style.top = `${randomX * (100 / num)}%`;
generateObstacle();

function generateObstacle() {
    while (currX == randomX && currY == randomY) {
        score++;
        console.log(score);
        randomX = Math.floor(Math.random() * num);
        randomY = Math.floor(Math.random() * num);
        obstacle.style.left = `${randomY * (100 / num)}%`;
        obstacle.style.top = `${randomX * (100 / num)}%`;
        scoreDiv.innerHTML = score;
    }
}


