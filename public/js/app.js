/* Login basico (cambiar mas adelante*/ 

function validar(){
    let usuario = document.getElementById("userValidar").value;
    let Contraseña = document.getElementById("passValidar").value;	
    let contenedor = document.getElementById("contenedor");

    if(usuario == "HCBSAS" && Contraseña == "GESPRO")
    {
        document.getElementById("contenedor").style.display="block"
        document.getElementById("contLogin").style.display="none"
        
    }
    else
    {
        alert("Verifique su contraseña");
    }
}


