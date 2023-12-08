// let N1 = 10;
// let N2 = 11;
//

let size = 10;


let glownyCel =[];
let pozycjaObecna = [];
let amunicja=[]; 
let speed;
let wynik;

function innitGame(){
    wynik =0;
    speed = 4;
    document.getElementById("wynikGry").innerHTML = wynik;
    inicjujTablice(glownyCel,1);
    inicjujTablice(amunicja,1);
    inicjujTablice(pozycjaObecna,1);
    createTable();
    
}

function startGame(){
    wynik =0;
    document.getElementById("wynikGry").innerHTML = wynik;

     for(let i=0;i<=0;i++){  
        for(let j=1;j<=size;j++){
        document.getElementById(i+"."+j).style.background = "green";
   }}

   for(let i=1;i<size;i++){  
    for(let j=0;j<=0;j++){
     document.getElementById(i+"."+j).style.background = "red";
}}

}

function inicjujTablice(tab,x){
    for(let i=0;i<=size;i++){
        tab[i]=x;
    }
    tab[0]=tab[size+1]=0;
}

function ruchPaczek(j){

    let n = Math.floor(Math.random()*speed);
    console.log(n);
    let i = pozycjaObecna[j];
    console.log(i);
    let m = Math.min(i+n,size+1);
    console.log(m);
     // document.getElementById(i+"."+j).style.background = "white";
     // document.getElementById(i+"."+j).style.background = "green";
    pozycjaObecna[j] = m;
     if (pozycjaObecna[j]===size+1){
    glownyCel[j]=0;
     document.getElementById("wynik").innerHTML = ++wynik;
     }
    
}

function createTable(){
    let table = document.getElementById("plansza");
    for(let i=0;i<=size;i++){
        let row = table.insertRow(i);
        for(let j=0;j<=size;j++){
            let cell = row.insertCell(j);
            cell.id = i+"."+j;
            cell.innerHTML = cell.id;
           if (i >0 && i<10 && j ===0)
                cell.addEventListener("click",function(){
                if(amunicja[i]===1){
                    ruchPaczek(j);
                    amunicja[i]=0;
                    cell.style.background = "silver";
                    
                }
                
            });
        
            }
        }
    }