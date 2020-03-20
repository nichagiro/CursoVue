console.log('funciona');


const app = new Vue ({
    el: '#app',
    data: {
        titulo: 'SAPE',
        cartas : [
            'MAGO OSCURO' , 
            'CYBER DRAGON',
            'CHARIZARD'
        ],
        newCart : ''
    },
    methods: {
        agregarCarta(){
            this.cartas.push(this.newCart);
            this.newCart = '';
        }
    }
})

