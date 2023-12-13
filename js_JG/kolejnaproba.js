let size = 10;

let N1 = 10
let N2 = 11

let speed = 3;


let position = [];

let shoot = [];

let amunition = [];

let score = 0;


function loadIt(){
    createTable();

    document.getElementById("newGame").style.display = "none";


}

function gameStart(){
    document.getElementById("startGame").style.display = "initial";
    document.getElementById("wynikGry").innerHTML = score;
    for (let i =1;i<=N1;i++){
        position[0] = shoot[0] = amunition[0] = 0;
        position[i] = 0;
        shoot[i]=1;
        amunition[i]=1;
        document.getElementById(0+ " - "+ i).style.background = "green";
        document.getElementById(i+ " - "+ 0).style.background = "red";

    }
     document.getElementById("10 - 0").innerHTML = "Meta";
     document.getElementById("10 - 0").style.background = "orange";
    document.getElementById("startGame").style.display = "none";
    
}

function newGame() {
    score = 0;
    document.getElementById("plansza").innerHTML = "";
    document.getElementById("koniec").style.display = "none";
    document.getElementById("wynikGry").innerHTML = "0";
    createTable();
    gameStart();
    document.getElementById("newGame").style.display = "none";
    document.getElementById("ruchPaczek").style.display = "initial";

}



function createTable() {
    let table = document.getElementById("plansza");
    for (let i = 0; i <= N1; i++) {

        let row = table.insertRow(i);

        for (let j = 0; j <= N2; j++) {
            let column = row.insertCell(j);

            column.id = i + " - " + j;
            column.innerHTML = column.id;

            if (j === 0 && i<N1) {
                column.addEventListener('click', function () {
                   
                        if (amunition[i] === 1) {
                            movePack();
                            amunition[i] = 0;
                            column.style.background = "silver";
                            console.log(position);
                            console.log("++++")
                        
                                for (let k = 1; k < N1; k++) {
                                    console.log(position[k]);
                                    console.log("----");
                                    
                                    if (position[k] === i) {
                                        console.log("|||||");
                                        console.log(position[k]);
                                        console.log(i);
                                        shoot[k] = 0;
                                        document.getElementById(position[k]+" - "+k).style.background = "purple";
                                        document.getElementById("wynikGry").innerHTML = ++score;
                                        
                                    }
                                }
                       
                    }
                        let leftShoots = 0;
                    for (let i=1;i<N1;i++){
                        if (amunition[i]===1){
                            leftShoots+=1;
                        }
                    }
                    let x;
                    if (score === 9 && leftShoots>0){
                        
                        score+=leftShoots;
                        if (leftShoots === 1){
                            x = "Gratulacje wygrałeś! Został ci jeszcze " + leftShoots + ". strzał";
                        }if (leftShoots >= 1 && leftShoots <=4){
                            x = "Gratulacje wygrałeś! Zostały ci jeszcze " + leftShoots + ". strzały";
                        }else {
                            x = "Gratulacje wygrałeś! Zostało ci jeszcze " + leftShoots + ". strzałów";
                        }
                            document.getElementById("koniec").style.display = "initial";
                            document.getElementById("koniec").innerHTML = x;
                            document.getElementById("wynikGry").innerHTML = score;
                            document.getElementById("ruchPaczek").style.display = "none";
                            document.getElementById("newGame").style.display = "initial";
                        }else if (score<9 && leftShoots===0){
                            let y = "Niewiele brakowało spróbuj ponownie!";
                            document.getElementById("koniec").style.display = "initial";
                            document.getElementById("koniec").innerHTML = y;
                            document.getElementById("ruchPaczek").style.display = "none";
                            document.getElementById("newGame").style.display = "initial";
                        }
                });
            }
        }
    }
}

function movePack() {
    

    for (let j = 1; j <= N2; j++) {
        if (position[j] < 10 && shoot[j]===1) {
            moveGame(j);
        }
    }
    
   
}

function moveGame(j){
    
 
        let n = Math.floor(Math.random() * speed);
        let i = position[j];
        let m = Math.min(i + n, size);

        document.getElementById(i + " - " + j).style.background = "white";
        document.getElementById(m + " - " + j).style.background = "green";

        position[j] = m;
    
        if (position[j]===N2+1){
            shoot[j]=0;
        }
    
}
