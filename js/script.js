
// - chiedere all'utente il suo nome
// - memorizzarlo in una variabile
// - chiedere all'utente il suo cognome
// - memorizzarlo in una variabile
// - chiedere all'utente il suo colore preferito
// - memorizzarlo in una variabile
// - concatenarli e stamparli in pagina

// --------- Raggruppato su una riga

let userName = prompt("Inserisci il tuo nome");
let userLastName = prompt("Inserisci il tuo cognome");
let userFavColor = prompt("Inserisci il tuo colore preferito");


// --------- Suddiviso in più righe

// let userName;
// let userLastName;
// let userFavColor;

// let userLuckyNumber;

// userName = prompt("Inserisci il tuo nome");

// userLastName = prompt("Inserisci il tuo cognome");

// userFavColor = prompt("Inserisci il tuo colore preferito");

// userLuckyNumber = prompt("Inserisci il tuo numero fortunato");

document.writeln("Ciao " + userName + " " + userLastName + ". Il tuo colore preferito è il " + userFavColor + ". Il tuo numero fortunato è " + (10 - 2 * 10 / 2 + 1));

console.log(`TEMPLATE LITERALS VERSION: Ciao ${userName} ${userLastName}. Il tuo colore preferito è il ${userFavColor}. Il tuo numero fortunato è ${10 - 2 * 10 / 2 + 1}`);

// --------- Versione solo PW
// document.writeln(userName + userLastName + userFavColor + 47);

