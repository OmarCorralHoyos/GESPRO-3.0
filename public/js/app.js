/* Login basico (cambiar mas adelante*/ 


function validar(){
    let usuario = document.getElementById("userValidar").value;
    let Contraseña = document.getElementById("passValidar").value;	

    if(usuario == "HCBSAS" && Contraseña == "GESPRO")
    {
        window.location.href='https://gespro-01.herokuapp.com/inicio'
        
    }
    else
    {
        alert("Verifique su contraseña");
    }
}


