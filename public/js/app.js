/* Login basico (cambiar mas adelante*/ 


function validar(){
    let usuario = document.getElementById("userValidar").value;
    let Contraseña = document.getElementById("passValidar").value;	

    if(usuario == "HCBSAS" && Contraseña == "GESPRO")
    {
        window.location.href='http://localhost:3000/inicio'
        
    }
    else
    {
        alert("Verifique su contraseña");
    }
}


