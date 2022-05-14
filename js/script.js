//VALIDACIÓN FORMULARIO DE CONTACTO

function formValidate(){
    validateItem("#message", "");
    validateItem("#topic", "");
    validateItem("#eMail", "e-Mail");
    validateItem("#lastName", "Apellido");
    validateItem("#firstName", "Nombre");
}


function validateItem(elementID, placeHolder){
    var element=document.querySelector(elementID);
    if(element.value.length==0){
        element.classList.add("inputAlert");
        element.focus();
        if(element.id=="topic"){
            element[0].innerHTML="Seleccione una opción";
        }else{
            element.placeholder="Complete este campo";
        }
        return(false);
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
                        console.log(2);
                    }
                }else{
                    element.classList.add("inputAlert");
                    element.focus();
                    element.value="";
                    element.placeholder="Introduzca una dirección de correo válida";
                    console.log(3);
                }
            }else{
                element.classList.add("inputAlert");
                element.focus();
                element.placeholder="Introduzca una dirección de correo válida";
                element.value="";
                console.log(4);
            }
        }else{
            element.classList.remove("inputAlert");
            element.placeholder=placeHolder;
            console.log(5);
            return(true);
        }        
    }
}