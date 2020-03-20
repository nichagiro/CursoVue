console.log('funciona');


const all = new Vue ({
    el: '#all',
    data: {
        titulo: 'ALL',
        frutas : [{
            nombre:'manzana',
            valor:800  
        },
            {
            nombre:'pera',
            valor:900
        },
            {
            nombre:'mango',
            valor:1100
        },
            ],
        frutaUI : '',
        valorUI : '',
        valorTotal:0
    },
    methods: {
        agregarFruta(){
            if(isNaN(this.valorUI)){
                alert('digite un numero');
            } else {
                this.frutas.push({
                    nombre: this.frutaUI,
                    valor: this.valorUI
                });
                this.frutaUI = '';
                this.valorUI = '';              
            }
        }
    },
    computed: {
        sumarFrutas(){
            this.valorTotal= 0;
            for(fruta of this.frutas) {
                this.valorTotal = this.valorTotal + fruta.valor ;
            }
            return this.valorTotal;
        }
    },
})

