const { Router } = require('express');
const express = require('express');
const router = express.Router();

const conexion = require('../database/db');

router.get('/', (req, res)=>{
    res.render('login');
});

/*  Monstrar Valores en las tablas*/
router.get('/proyectos', (req, res)=>{
    conexion.query('SELECT * FROM gestionproyecto',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('proyectos' , {results:results});
        }
    })
})

router.get('/proveedores', (req, res)=>{
    conexion.query('SELECT * FROM proveedores',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('proveedores' , {results:results});
        }
    })
})
router.get('/clientes', (req, res)=>{
    conexion.query('SELECT * FROM clientes',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('clientes' , {results:results});
        }
    })
})
router.get('/empleados', (req, res)=>{
    conexion.query('SELECT * FROM empleados',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('empleados' , {results:results});
        }
    })
})
router.get('/almacen', (req, res)=>{
    conexion.query('SELECT * FROM almacen',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('almacen' , {results:results});
        }
    })
})
router.get('/inicio', (req, res)=>{
    res.render('inicio');
})
router.get('/reportes', (req, res)=>{
    res.render('reportes');
})

/* INSERTAR VALORES EN LAS TABLAS */ 

const crud = require('../controllers/crud');
router.post('/savealma',crud.savealma)
router.post('/savecli',crud.savecli)
router.post('/saveemp',crud.saveemp)
router.post('/saveprove',crud.saveprove)
router.post('/saveproye',crud.saveproye)

/* EDITAR VALORES DE LAS TABLAS */ 
router.get('/edit/:idherra',(req,res)=>{
    const idherra = req.params.idherra;
    conexion.query('SELECT * FROM almacen WHERE idherra=?',[idherra],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit' , {almacen:results[0]});
        }
    })
})

router.post('/editalma',crud.editalma);


router.get('/editcliente/:idclientes',(req,res)=>{
    const idclientes = req.params.idclientes;
    conexion.query('SELECT * FROM clientes WHERE idclientes=?',[idclientes],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('editcliente' , {clientes:results[0]});
        }
    })
})

router.post('/editcli',crud.editcli);


router.get('/edit/:idEmpleados',(req,res)=>{
    const idEmpleados = req.params.idEmpleados;
    conexion.query('SELECT * FROM empleados WHERE idEmpleados=?',[idEmpleados],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit' , {empleados:results[0]});
        }
    })
})

router.post('/editemp',crud.editemp);


router.get('/edit/:idproye',(req,res)=>{
    const idproye = req.params.idproye;
    conexion.query('SELECT * FROM gestionproyecto WHERE idproye=?',[idproye],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit' , {gestionproyecto:results[0]});
        }
    })
})

router.post('/editproye',crud.editproye);


router.get('/edit/:idProveedores',(req,res)=>{
    const idProveedores = req.params.idProveedores;
    conexion.query('SELECT * FROM proveedores WHERE idProveedores=?',[idProveedores],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit' , {proveedores:results[0]});
        }
    })
})

router.post('/editprove',crud.editprove);



module.exports=router;