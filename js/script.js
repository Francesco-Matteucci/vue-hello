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

            // Contenuti della navbar
            brandName: 'Fra Emme',
            navItems: [
                { name: 'Home', href: '#' },
                { name: 'Boolean', href: 'https://boolean.careers/' },
                { name: 'Contatti', href: '#' }
            ],

            // Contenuti del main section
            message: 'Benvenuto, finalmente, in VUE!',
            imageUrl: 'img/vue.png',

            // Contenuti del footer
            footerText: '© 2024',
            footerName: 'Francesco Matteucci',
            footerLink: 'https://github.com/Francesco-Matteucci',
        };
    }
}).mount('#app');