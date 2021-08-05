const BOARD_SIZE = 3;
const grid = Array(BOARD_SIZE ** 2).fill(null);
window.sessionStorage.setItem('grid', grid)


function cleanBoard(el=null) {

    if(el!==null) el.parentNode.remove();
    else {
        const alert = document.querySelectorAll(".alert");
        if(alert) alert.forEach((cell) => {
            cell.remove(this)
        })
    }

    const cells = document.querySelectorAll(".square");

    cells.forEach((cell) => {
        cell.innerHTML = ""
    });
    
    window.sessionStorage.setItem('grid', grid.fill(null));
}

function addAlert (winner) {
    let alertStr = `<div class="alert">
    <span class="closeBtn" onclick="cleanBoard(this)">&times;</span>
    ${winner} - Winner!
    </div>`;

    const body = document.querySelector("body");
    body.insertAdjacentHTML("beforeend", alertStr);
};


const dragAndDrop = () => {
    const cardCross = document.querySelector(".cross");
    const cardZero = document.querySelector(".zero");
    const cells = document.querySelectorAll(".square");
    const gameField = document.querySelector("#game_field");
    const crossStr = `<div class="cross">X</div>`;
    const zeroStr = `<div class="zero">O</div>`;
    let draggableCard;


    const checkWinCondition = (arr) => {
        if (arr.every((elem) => elem === true)) return addAlert("X");
        else if (arr.every((elem) => elem === false)) return addAlert("O");
        else return -1;
    };




    const dragStart = function () {
        // console.log("dragStart");
        // console.log(this.classList.contains("cross"));

        draggableCard = this.classList.contains("cross");

        // setTimeout(() => {
        //     this.classList.add("hide");
        // }, 0);
    };

    const dragEnd = function () {
        // console.log("dragEnd");
        draggableCard = null;
        // this.classList.remove("hide");
        // this.innerHTML = '';
    };

    const dragOver = function (event) {
        event.preventDefault();
        // console.log("dragOver");
    };

    const dragEnter = function () {
        // console.log("dragEnter");
        this.classList.add("hovered");
    };

    const dragLeave = function () {
        // console.log("dragLeave");
        this.classList.remove("hovered");
    };

    const dragDrop = function () {
        // console.log("dragDrop");
        // console.log(draggableCard.);
        // this.append(draggableCard);
        
        this.classList.remove("hovered");
        this.innerHTML = draggableCard ? crossStr : zeroStr;

        for (let i = 0; i < gameField.children.length; i++) {
            let mark =
                gameField.children[i]?.firstChild?.classList?.contains("cross");
            if (mark !== undefined) {
                grid[i] = mark;
                window.sessionStorage.setItem('grid', grid);
            }
        }

        if(
        // row
        checkWinCondition([grid[0], grid[1], grid[2]]) !== -1 ||
        checkWinCondition([grid[3], grid[4], grid[5]]) !== -1 ||
        checkWinCondition([grid[6], grid[7], grid[8]]) !== -1 ||
        // col
        checkWinCondition([grid[0], grid[3], grid[6]]) !== -1 ||
        checkWinCondition([grid[1], grid[4], grid[7]]) !== -1 ||
        checkWinCondition([grid[2], grid[5], grid[8]]) !== -1 ||
        // diagonal 
        checkWinCondition([grid[0], grid[4], grid[8]]) !== -1 ||
        checkWinCondition([grid[2], grid[4], grid[6]]) !== -1
        ) window.sessionStorage.setItem('grid', grid.fill(null));
        console.log(grid)
    };

    
    cells.forEach((cell) => {
        // console.log(cell);
        // cell.addEventListener("dragstart", dragStart);
        cell.addEventListener("dragover", dragOver);
        cell.addEventListener("dragenter", dragEnter);
        cell.addEventListener("dragleave", dragLeave);
        cell.addEventListener("drop", dragDrop);
    });

    cardCross.addEventListener("dragstart", dragStart);
    cardCross.addEventListener("dragend", dragEnd);
    cardZero.addEventListener("dragstart", dragStart);
    cardZero.addEventListener("dragend", dragEnd);

};

dragAndDrop();
