const conexion= require('../database/db');

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