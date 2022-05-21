//MENÚ HAMBURGUESA
const burgerMenu = new Vue ({
    el:".head",
    data:{
        burgerMenuIcon:"menu",
        seen: false
    },
    methods:{
        changeMenuIcon: function(){
            if(this.burgerMenuIcon=="close"){
                this.burgerMenuIcon="menu"
                this.seen=false
            }else{
                this.burgerMenuIcon="close"
                this.seen=true
            }
        }
    }
});

//VALIDACIÓN FORMULARIO DE CONTACTO

function formValidate(){
    if(validateItem("#message", "")
    & validateItem("#topic", "")
    & validateItem("#eMail", "e-Mail")
    & validateItem("#lastName", "Apellido")
    & validateItem("#firstName", "Nombre")){
        formAlert();
    }
}

function closeFormAlert(){
    let formAlert=document.querySelector(".formAlert");
    formAlert.style.display="none";
}

function formAlert(){
    let formAlert=document.querySelector(".formAlert");
    formAlert.style.display="flex";
}


function validateItem(elementID, placeHolder){
    let element=document.querySelector(elementID);
    if(element.value.length==0){
        element.classList.add("inputAlert");
        element.focus();
        if(element.id=="topic"){
            element[0].innerHTML="Seleccione una opción";
            return false;
        }else{
            element.placeholder="Complete este campo";
            return false;
        }
    }else{
        if(element.id=="eMail"){
            if(element.value.includes("@")){
                if(element.value.length>2){
                    if(element.value.indexOf("@")!==0&element.value.lastIndexOf("@")!==(element.value.length-1)){
                        element.classList.remove("inputAlert");
                        element.placeholder=placeHolder;
                        return true;
                    }else{
                        element.classList.add("inputAlert");
                        element.focus();
                        element.value="";
                        element.placeholder="Introduzca una dirección de correo válida";
                        return false;
                    }
                }else{
                    element.classList.add("inputAlert");
                    element.focus();
                    element.value="";
                    element.placeholder="Introduzca una dirección de correo válida";
                    return false;
                }
            }else{
                element.classList.add("inputAlert");
                element.focus();
                element.placeholder="Introduzca una dirección de correo válida";
                return false;
                element.value="";
            }
        }else{
            element.classList.remove("inputAlert");
            element.placeholder=placeHolder;
            return(true);
        }        
    }
}