const app=new Vue({
    el:'#app',
    data:{
        mensaje:"Empezando con Vue.",
        seen:false,
        frutas: [
            {nombre: 'Manzana', precio: '50', cantidad: '3'},
            {nombre: 'Pera', precio: '60', cantidad: '6'}
        ]
    }
});