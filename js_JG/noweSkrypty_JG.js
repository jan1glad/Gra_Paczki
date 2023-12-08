let size = 10;

let szybkosc;

let wynik;

let amunicja = [];

let obecneMiejscePaczki = [];

let cel = [];
function onLoad(){
    
    
    
    //     for (let j=1;j<=size;j++){
    //         //
    //         // obecneMiejscePaczki[0][j] = 1;
    //
    // }
    
    //console.log(obecneMiejscePaczki);
    
    
}

function ruchGry(){
    // randomColumn;

    let randomColumn = Math.floor(Math.random() * szybkosc) + 1;
    
    //let m = Math.min(i+randomColumn,size+1);
    //
    //obecneMiejscePaczki[j] = m;
    for (let j = 1; j < size; j++) {
        obecneMiejscePaczki[j] = randomColumn;
        document.getElementById(j+":"+randomColumn).style.background = "white";
        spadekPaczek(j);
        console.log(obecneMiejscePaczki[j]);
        // document.getElementById(obecneMiejscePaczki[j] + ":" + j).style.background = "green";
        
    }
    //randomColumn++;
    
}

function spadekPaczek(j) {


    let n = Math.floor(Math.random()*szybkosc);
    let i = obecneMiejscePaczki[j];
    let m = Math.min(i+n,size+1);
    //document.getElementById(j+":"+i).style.background = "white";
    document.getElementById(m+":"+j).style.background = "green";
    obecneMiejscePaczki[j] = m;
    if (obecneMiejscePaczki[j]===size+1){
        cel[j]=0;
        document.getElementById("wynik").innerHTML = ++wynik;
    }
    


}



function tablicaInnitial(){
    let table = document.getElementById("plansza");
    
    for (let i=0;i<=size;i++) {

        let wiersz = table.insertRow(i);
        
        for (let j = 0; j <= size; j++) {

            let kolumna = wiersz.insertCell(j);
            
            kolumna.id = i + ":" + j;
            kolumna.innerHTML = kolumna.id;

            
            if (j === 0 && i>0 && i<size){
                
                kolumna.addEventListener("click", function () {
                    // obecneMiejscePaczki[j] = i;
                    // console.log(obecneMiejscePaczki[j]);
                   
                    if (amunicja[i] === 1) {
                        ruchGry();
                        amunicja[i] = 0;
                        kolumna.style.background = "silver";
                    for (let k=1;k<size;k++){
                        if (obecneMiejscePaczki[k]===i){
                            cel[k]=0;
                            wiersz.style.background = "purple";
                        }
                   }
                    }
                    
                });
                
                }
            }
                
        }
}
function inicjujTablice(tab,x){
    for(let i=0;i<=size;i++){
        tab[i]=x;
    }
    tab[0]=tab[size+1]=0;
}

function startGry(){
    wynik =0;
    szybkosc = 2;
    document.getElementById("wynikGry").innerHTML = wynik;
    tablicaInnitial();
    inicjujTablice(obecneMiejscePaczki,1);
    inicjujTablice(cel,1);
    inicjujTablice(amunicja,1);
    for (let i=1;i<size;i++){
        document.getElementById(i+":"+0).style.background = "red";
        document.getElementById(0+":"+i).style.background = "green";
        // console.log(obecneMiejscePaczki[i]);
    }

    
}