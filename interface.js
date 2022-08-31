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
                square.innerHTML = `<i class="fa-regular fa-${symbol}"></i>`;
            }
        });
    },

    alert : function (){
        const alertWin = document.querySelector("#alertWin") 

        if(playerTime == 0){
            alertWin.innerHTML = ` <p>Vencedor: </p> <i class="fa-regular fa-circle"></i>`
        } else {
            alertWin.innerHTML = ` <p>Vencedor: </p> <i class="fa-regular fa-x"></i>`
        }

        setTimeout(()=>{
            alertWin.style.display = "flex"; 
        },500);
        
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