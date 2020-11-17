// Ricreare lo slider di immagini ma questa volta con Vue.
// Partiamo dallo zip che vi passo,
// facciamo funzionare i bottoni next e prev
// e mettiamo in pagina i pallini

var slide = new Vue({
    el: '#app',
    data: {
        index: 0,
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
            this.index = this.index + 1;

            // condizione fine carosello
            if (this.index > (this.sorgenteImg.length - 1)) {
                this.index = 0;
            }
        },
        // funzione pulsante indietro
        funzioneIndietro: function(){
            this.index = this.index - 1;

            // condizione fine carosello in negativo
            if (this.index < 0) {
                this.index = 3;
            }
        }
    }
})






// BONUS:
// vediamo se troviamo una nostra tecnica per affrontare la cosa;
// facciamo si che sia evidenziato solo il pallino relativo all’img in corso;