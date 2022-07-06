/* Login basico (cambiar mas adelante*/ 


function validar(){
    let usuario = document.getElementById("userValidar").value;
    let Contraseña = document.getElementById("passValidar").value;	

    if(usuario == "HCBSAS" && Contraseña == "GESPRO"){

        window.location.href='https://gespro1-0.herokuapp.com/inicio'

    }else
    {
        alert("Verifique su contraseña");
    }
}

let tablaproye=document.getElementById('tbproyecto');

function fechaInicial (tabla, numeroColumna) {
    for (let i= 1, celda; i < tabla.rows.length; i++) {
        celda = tabla.rows[i].cells[numeroColumna];
        fechaini = new Date(celda.innerHTML).toLocaleDateString();
        console.log(fechaini);
    }
}
fechaInicial(tablaproye,3)


