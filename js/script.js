// Ricreare lo slider di immagini ma questa volta con Vue.
// Partiamo dallo zip che vi passo,
// facciamo funzionare i bottoni next e prev
// e mettiamo in pagina i pallini

var slide = new Vue({
    el: '#app',
    data: {
        indice: 0,
        sorgenteClasse: "fas fa-circle",
        sorgenteImg: [
            'img/image1.jpg',
            'img/image2.jpg',
            'img/image3.jpg',
            'img/image4.jpg'
        ]
    },
    methods: {
        // funzione pulsante avanti
        funzioneAvanti: function(){
            this.indice = this.indice + 1;

            // condizione fine carosello
            if (this.indice > (this.sorgenteImg.length - 1)) {
                this.indice = 0;
            }
        },
        // funzione pulsante indietro
        funzioneIndietro: function(){
            this.indice = this.indice - 1;

            // condizione fine carosello in negativo
            if (this.indice < 0) {
                this.indice = (this.sorgenteImg.length - 1);
            }
        }
    }
})






// BONUS:
// vediamo se troviamo una nostra tecnica per affrontare la cosa;
// facciamo si che sia evidenziato solo il pallino relativo all’img in corso;