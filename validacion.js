function validar() {
    var result_val_email = validar_email();
    var result_val_passw = validar_password();
    var result_val_direcc = validar_direcc();
    var result_val_repassw = validar_repassword();
    var result_val_direccion = validar_direccion();
    var result_val_codigo = validar_codigoP();
    var result_val_comuna = validar_comuna();
    var result_val_ciudad = validar_ciudad();
    var result_val_telefono = validar_telefono();
    
    return (result_val_email && result_val_passw && result_val_direcc && result_val_repassw && result_val_direccion && result_val_codigo && result_val_comuna && result_val_ciudad && result_val_telefono   );
}

function validar_fto_email(email) {
    var idx_arroba = email.indexOf("@");
    if (idx_arroba < 1) {
        return false;
    } else {
        var idx_punto = email.indexOf(".");
        if(idx_punto <= idx_arroba + 2 || idx_punto == email.length - 1) {
            return false;
        }        
        return true;
    }
}


function validar_email() {
    var email = document.getElementById("email").value;
    var div = document.getElementById("msj-email");
    if (email != "") {
        if (validar_fto_email(email)) {
            div.innerHTML = "";
            return true;
        } else {
            div.innerHTML = "El formato del email no es valido";
            div.className = "text-danger";
            return false;
        }
    } else {
        div.innerHTML = "El email no puede estar en blanco";
        div.className = "text-danger";
        return false;
    }
}
function validar_fto_password(passw) {
    var L = /[A-z]/g;
    var idx_L = passw.match(L);
    if (idx_L < 1) {
        return false;
    } else {
        var N = /[0-9]/g;
        var idx_N = passw.match(N);
        if(idx_N < 1) {
            return false;
        }
        return true;
    }
}

function validar_password() {
   
    var passw = document.getElementById("password").value;
    var div = document.getElementById("msj-passw");

    if  (passw.length < 7 && passw.length > 2 ) {
        if(validar_fto_password(passw)){
            div.innerHTML = "";
            return true;
        }else{
            div.innerHTML = "La contraseña debe tener una letra y un numero";
            div.className = "text-danger";
            return false;

        }
   
    } else {
        div.innerHTML = "La contraseña debe ser 3 a 6 caracteres";
        div.className = "text-danger";
        return false;
    }
    
}
function validar_repassword(){
    
    var clave1 = document.getElementById("password").value;
    var clave2 = document.getElementById("re-password").value;
    var div = document.getElementById("msj-repassw");
    if (clave1 == clave2) {
        div.innerHTML = "";
        
        return true;
    } else {
        div.innerHTML = "Las contraseña deben ser iguales";
        div.className = "text-danger";
        
        return false;
    }

}
function validar_direccion(){

    var Direccc= document.getElementById("direccion").value;
    var div = document.getElementById("msj-direccion");
    if(Direccc===""){
        div.innerHTML = "La direccion es obligatoria";
        div.className = "text-danger";
        return true;
    }else
        div.innerHTML = "";
        div.className = "text-danger";
        return true; {
        

    }  
}
function validar_codigoP(){

    var codigo= document.getElementById("postal").value;
    var div = document.getElementById("msj-postal");
    if(codigo.length == 7){
        div.innerHTML = "";
        return true;
    }else
        div.innerHTML = "El codigo postal no es valido";
        div.className = "text-danger";
        
        return false; {
        

        }  
}
function validar_comuna(){

    var comuna= document.getElementById("Comuna").value;
    var div = document.getElementById("msj-comuna");
    if(comuna!="Seleccione su Comuna"){
        div.innerHTML = "";
        
        return true;
    }else
    div.innerHTML = "La comuna es obligatoria";
    div.className = "text-danger";
        return false; {
        

    }  
}
function validar_ciudad(){

    var ciudad= document.getElementById("Ciudad").value;
    var div = document.getElementById("msj-ciudad");
    if(ciudad===""){
        div.innerHTML = "La Ciudad es obligatoria";
        div.className = "text-danger";
        return true;
    }else
        div.innerHTML = "";
        div.className = "text-danger";
        return true; {
        

    }  
}
function validar_telefono(){
var telefono = document.getElementById("movil").value;
var div = document.getElementById("msj-movil");
if(telefono.length == 9){
    div.innerHTML="";
    
    return true;

}else
    div.innerHTML="El Numero de telefono no es valido";
    div.className= "text-danger";
    return false;{
    }


}




   
    


function validar_direcc() {
    return true;
}