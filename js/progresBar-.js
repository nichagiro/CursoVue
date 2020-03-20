console.log('funciona');

const proBar = new Vue ({
    el: '#proBar',
    data:{
        cont: 0
    },
    computed: {
        colorBar(){
            if(this.cont>100){this.cont=100}
            if(this.cont<0){this.cont=0}
            return{
                'bg-danger': this.cont < 33 ,
                'bg-warning': this.cont < 67 && this.cont > 32,
                'bg-info': this.cont < 100 && this.cont > 66,
                'bg-success': this.cont == 100
            }
        }
    },
})