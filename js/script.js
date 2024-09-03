/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/


// Creo la nuova istanza Vue
const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Benvenuto, finalmente, in VUE!'
        }
    }
}).mount('#app')