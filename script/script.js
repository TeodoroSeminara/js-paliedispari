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


//1 Esercizio


// Input da utente

const inputWord = prompt("Inserisci una parola da controllare").toLowerCase();
// let check = checkPalindrome(inputWord);

// Crare funzione
console.log("La parola che hai inserito è:", inputWord);


function checkPalindrome ( word ){

    let reverseWord = "";

    for (let i=word.length -1; i >= 0; i--) {

        let letter = word[i];

        reverseWord = reverseWord + letter;
        
    }

    if ( reverseWord === inputWord ) {

        console.log("Bravo! La parola è palindroma");
        

    } else {

        console.log("Peccato! La parola non è palindroma");
        
    }
   
    return reverseWord
}

const resultCheck = checkPalindrome(inputWord);

console.log("La parola invertita è:", resultCheck);
// Controllo della parola






