console.log('funciona');

const ejercicio1VUE = new Vue ({
    el : '#ejercicio1VUE',
    data: {
        listCurses : [],
        cursoUI : ''
    },
    methods: {
        agrerarCurso(){
            this.listCurses.push({
                name : this.cursoUI,
                status : false
            })
            this.cursoUI = '';
        },
        marcarCurso(index){
            this.listCurses[index].status = !this.listCurses[index].status;
        }
    },
})