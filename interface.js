document.addEventListener("DOMContentLoaded", ()=>{
    const reset = document.querySelector("#reset");
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("click", functions.handleClick);
    });

    reset.addEventListener("click", functions.reset)

})

let functions = { 
    handleClick: function (event){
        let square = event.target;
        let position = square.id;

        handleMove(position);

        functions.updateSquares();

        if(gameOver){
            functions.alert();
        }
    },

    updateSquares: function  (){
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            let position = square.id;
            let symbol = board[position];
            if(symbol != ""){
                square.innerHTML = `<div class="${symbol}"></div>`;
            }
        });
    },

    alert : function (){
        const alertWin = document.querySelector("#alertWin") 
        alertWin.innerHTML = `<h2> Player Winner ${playerTime}</h2>`;
        alertWin.style.display = "flex";
    },

    winLine: function (x) {
        const riscos = document.querySelectorAll(".sec");

        let local = Number(x);
        let risco = riscos[local];

        risco.style = "display:block";

    },

    reset: function(){
        board.fill("");
        playerTime = 0;
        gameOver = false; 

        const alertWin = document.querySelector("#alertWin") 
        alertWin.style.display = "none";

        const squares = document.querySelectorAll(".square");
        for( let i = 0; i < squares.length; i++){
            squares[i].innerHTML = "";
        }

        const riscos = document.querySelectorAll(".sec");
        for(let j = 0; j < riscos.length; j++){
            riscos[j].style.display = "none";
        }
    },
}