const conexion= require('../database/db');

exports.savelog=(req,res)=>{
    const idUsuario = req.body.idUsuario
    const nombreCompleto = req.body.nombreCompleto
    const nombreUsuario = req.body.nombreUsuario
    const contraseñauser = req.body.contraseñauser
    const rol = req.body.rol

    conexion.query('INSERT INTO usuarios SET ?', {idUsuario:idUsuario,nombreCompleto:nombreCompleto, nombreUsuario:nombreUsuario,contraseñauser:contraseñauser,rol:rol}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/users')
        }
    })
}

exports.savealma=(req,res)=>{
    const nombreherra = req.body.nombreherra
    const estadoherra = req.body.estadoherra
    const tipoherra = req.body.tipoherra
    conexion.query('INSERT INTO almacen SET ?', {nombreherra:nombreherra,estado:estadoherra, tipoherra:tipoherra}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/almacen')
        }
    })
}

exports.savecli=(req,res)=>{
    const idclientes = req.body.idclientes
    const nombrecliente = req.body.nombrecliente
    const representantecliente = req.body.representantecliente
    const direccioncliente = req.body.direccioncliente
    const telcliente = req.body.telcliente
    const email = req.body.email
    
    conexion.query('INSERT INTO clientes SET ?', {idclientes:idclientes, nombrecliente:nombrecliente,representantecliente:representantecliente, direccioncliente:direccioncliente,telcliente:telcliente,email:email}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/clientes')
        }
    })
}

exports.saveemp=(req,res)=>{
    const idEmpleados = req.body.idEmpleados
    const nombreempleado = req.body.nombreempleado
    const direccionempleado = req.body.direccionempleado
    const telempleado = req.body.telempleado
    const emailempleado = req.body.emailempleado
    const cargoempleado = req.body.cargoempleado
    const salarioempleado = req.body.salarioempleado

    
    conexion.query('INSERT INTO empleados SET ?', {idEmpleados:idEmpleados,nombreempleado:nombreempleado,direccionempleado:direccionempleado,telempleado:telempleado,emailempleado:emailempleado,cargoempleado:cargoempleado,salarioempleado:salarioempleado }, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/empleados')
        }
    })
}

exports.saveprove=(req,res)=>{
    const idProveedores = req.body.idProveedores
    const nombreprove = req.body.nombreprove
    const telprove = req.body.telprove
    const direccionprove = req.body.direccionprove
    const correoprove = req.body.correoprove

    
    conexion.query('INSERT INTO proveedores SET ?', {idProveedores:idProveedores,nombreprove:nombreprove,telprove:telprove,direccionprove:direccionprove,correoprove:correoprove}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/proveedores')
        }
    })
}
exports.saveproye=(req,res)=>{
    const nombreproye = req.body.nombreproye
    const direccionproye = req.body.direccionproye
    const fechainicialproye = req.body.fechainicialproye
    const fechafinalproye = req.body.fechafinalproye
    const clientes_idclientes = req.body.clientes_idclientes

    conexion.query('INSERT INTO gestionproyecto SET ?', {nombreproye:nombreproye,direccionproye:direccionproye,fechainicialproye:fechainicialproye,fechafinalproye:fechafinalproye,clientes_idclientes:clientes_idclientes}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/proyectos')
        }
    })
}

/* Editar registros ****************************************************************/
exports.editlogin=(req,res)=>{
    const idUsuario = req.body.idUsuario
    const nombreCompleto = req.body.nombreCompleto
    const nombreUsuario = req.body.nombreUsuario
    const contraseñauser = req.body.contraseñauser
    const rol = req.body.rol

    conexion.query('UPDATE usuarios SET ? WHERE idUsuario =?', [{idUsuario:idUsuario,nombreCompleto:nombreCompleto,nombreUsuario:nombreUsuario,contraseñauser:contraseñauser,rol:rol},idUsuario],(error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/users')
        }
    });
};

exports.editalma = (req,res)=>{
    const idherra = req.body.idherra;
    const nombreherra = req.body.nombreherra;
    const estadoherra = req.body.estadoherra;
    const tipoherra = req.body.tipoherra;

    conexion.query('UPDATE almacen SET ? WHERE Idherra =?', [{idherra:idherra,nombreherra:nombreherra,estado:estadoherra,tipoherra:tipoherra},idherra],(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/almacen');
        }
    });
};

exports.editcli=(req,res)=>{
    const idclientes = req.body.idclientes
    const nombrecliente = req.body.nombrecliente
    const representantecliente = req.body.representantecliente
    const direccioncliente = req.body.direccioncliente
    const telcliente = req.body.telcliente
    const email = req.body.email
    
    conexion.query('UPDATE clientes SET ? WHERE Idclientes =?', [{idclientes:idclientes, nombrecliente:nombrecliente,representantecliente:representantecliente, direccioncliente:direccioncliente,telcliente:telcliente,email:email},idclientes], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/clientes')
        }
    })
}

exports.editemple=(req,res)=>{
    const idEmpleados = req.body.idEmpleados
    const nombreempleado = req.body.nombreempleado
    const direccionempleado = req.body.direccionempleado
    const telempleado = req.body.telempleado
    const emailempleado = req.body.emailempleado
    const cargoempleado = req.body.cargoempleado
    const salarioempleado = req.body.salarioempleado

    
    conexion.query('UPDATE empleados SET ? WHERE idEmpleados =?', [{idEmpleados:idEmpleados,nombreempleado:nombreempleado,direccionempleado:direccionempleado,telempleado:telempleado,emailempleado:emailempleado,cargoempleado:cargoempleado,salarioempleado:salarioempleado },idEmpleados], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/empleados')
        }
    })
}

exports.editprove=(req,res)=>{
    const idProveedores = req.body.idProveedores
    const nombreprove = req.body.nombreprove
    const telprove = req.body.telprove
    const direccionprove = req.body.direccionprove
    const correoprove = req.body.correoprove

    
    conexion.query('UPDATE proveedores SET ? WHERE idProveedores =?', [{idProveedores:idProveedores,nombreprove:nombreprove,telprove:telprove,direccionprove:direccionprove,correoprove:correoprove},idProveedores], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/proveedores')
        }
    })
}
exports.editproye=(req,res)=>{
    const idproye =req.body.idproye
    const nombreproye = req.body.nombreproye
    const direccionproye = req.body.direccionproye
    const fechainicialproye = req.body.fechainicialproye
    const fechafinalproye = req.body.fechafinalproye
    const clientes_idclientes = req.body.clientes_idclientes

    conexion.query('UPDATE gestionproyecto SET ? WHERE idproye =?', [{idproye:idproye,nombreproye:nombreproye,direccionproye:direccionproye,fechainicialproye:fechainicialproye,fechafinalproye:fechafinalproye,clientes_idclientes:clientes_idclientes},idproye], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/proyectos')
        }
    })
}