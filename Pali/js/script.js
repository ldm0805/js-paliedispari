
//Creare la funzione per effettuare il controllo della palindroma
function Palindrome(word) {
    let word_invert = word.split('').reverse().join('');
    return word_invert
}

//Chiedere all'utente una parola e renderla in caratteri minuscoli
const word_input = prompt("Inserisci una parola").toLowerCase();

//Invochiamo la funzione
let check_word = Palindrome(word_input)

// Ciclo che controlla che la parola sia palindroma
if(word_input == check_word){
    console.log("La parola è palindroma")
}
else{
    console.log("La parola non è palindroma")
}