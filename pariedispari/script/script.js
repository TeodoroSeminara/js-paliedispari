// Ciao ragazzi,
// Esercizio di oggi:
// nome repo: js-paliedispari

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Consigli del giorno
// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// Domande da  farsi quando si crea una funzione:
// Come dovrebbe chiamarsi?
// Ho bisogno di parametri?
// Devo restituire un valore?
// Se sì, di che tipo?

// Buon lavoro e buon divertimento! 🐈


// 2 Esercizio

const inputBet = prompt("Scegli tra pari e dispari").toLowerCase();
const inputNum = parseInt(prompt("Inserisci un numero tra 1 e 5"));

console.log("Hai scelto", inputBet);

console.log( "Hai tirato", inputNum);

function randomPC () {
    return Math.floor(Math.random() *5 + 1);
}

let resultPc = randomPC();

console.log( "Il pc ha scelto", resultPc);

let sum = inputNum + resultPc;

console.log("la somma è", sum);


function oddEven(check) {

    let result = "";

    if (check %2 ===0 ) {

        result = "pari"
           
    } else {

        result = "dispari"
    }
    
    return result
}

let resultOdd = oddEven(sum);
console.log(resultOdd);


if (inputBet === resultOdd ) {
        console.log("Hai vinto");  

} else if (inputBet != resultOdd) {
    
    console.log("Hai perso"); 
}


