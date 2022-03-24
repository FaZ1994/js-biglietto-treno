/* 

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

 */


let priceTravel;

/*definisco la costante del prezzo al chilometro */

const kmPrice = 0.21;

/* chiedo all'utente il numero di chilometri che vuole percorrere */

let kmToTravel = prompt('Quanti chilometri vuoi percorrere?');

/* effettuo un controllo sul valore inserito. se non è  un valore numero chiedo all'utente di inserire solo numeri */

kmToTravel = parseInt(kmToTravel);


if (isNaN(kmToTravel)){

    alert('Si prega di inserire solo numeri')
}

else {
  
/* se il valore inserito è di tipo numero, setto il valore di priceTravel */

priceTravel = kmToTravel * kmPrice;

}


/* verifico l'età dell'utente */

let userAge = prompt('inserisci la tua età');

userAge = parseInt(userAge);

/* effettuo un controllo sul valore inserito. se non è  un valore numero chiedo all'utente di inserire solo numeri */

if (isNaN(userAge)){

    alert('Si prega di inserire solo numeri')
}


/* se il valore inserito è di tipo numero, procedo a verificare l'età per determinare eventuali sconti */
else {

if (userAge <= 17) {

    /* applico sconto del 20% */

    priceTravel = kmToTravel * ( kmPrice - (20 / 100) );

} else if (userAge >= 65) {

    /* applico scondo del 40% */

} else 

/* prezzo intero */

console.log(userAge);


}



/* stampo a console il priceTravel in formato EURO */
console.log(new Intl.NumberFormat('it-IT',{style:'currency', currency: 'EUR'}).format(priceTravel));

/*

let userLastName = prompt('inserisci il tuo cognome');

console.log(userLastName);

let userFavoriteColor = prompt("qual'è il tuo colore preferito?");

console.log(userFavoriteColor);

let pwd_gen = userName + userLastName + userFavoriteColor + '22';

console.log(pwd_gen);

document.getElementById('pwd_gen').innerHTML += pwd_gen;

}

*/