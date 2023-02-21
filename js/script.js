
let userName;
let userLastName;
let userFavColor;

userName = prompt("Inserisci il tuo nome");

userLastName = prompt("Inserisci il tuo cognome");

userFavColor = prompt("Inserisci il tuo colore preferito");

document.writeln("Ciao " + userName + " " + userLastName + ". Il tuo colore preferito è il " + userFavColor + ". Il tuo numero fortunato è " + (10 - 2 * 10 / 2 + 1));