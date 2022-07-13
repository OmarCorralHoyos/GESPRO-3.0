const { Router } = require('express');
const express = require('express');
const router = express.Router();
const crud = require('../controllers/crud');
const app = require('../app');

const conexion = require('../database/db');

router.get('/', (req, res)=>{
    res.render('login',{alert:false});
});


/*  Monstrar Valores en las tablas*/

router.get('/users',crud.isAuthenticated, (req, res)=>{
    conexion.query('SELECT * FROM usuarios',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('users' , {results:results});
        }
    })
})
router.get('/inicio',crud.isAuthenticated, (req, res)=>{
    conexion.query('SELECT * FROM bitacora',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('inicio' , {results:results});
        }
    })
})

router.get('/proyectos',crud.isAuthenticated, (req, res)=>{
    conexion.query('SELECT * FROM gestionproyecto',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('proyectos' , {results:results});
        }
    })
})

router.get('/proveedores',crud.isAuthenticated, (req, res)=>{
    conexion.query('SELECT * FROM proveedores',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('proveedores' , {results:results});
        }
    })
})
router.get('/clientes',crud.isAuthenticated, (req, res)=>{
    conexion.query('SELECT * FROM clientes',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('clientes' , {results:results});
        }
    })
})
router.get('/empleados',crud.isAuthenticated, (req, res)=>{
    conexion.query('SELECT * FROM empleados',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('empleados' , {results:results});
        }
    })
})

router.get('/almacen',crud.isAuthenticated, (req, res)=>{
    conexion.query('SELECT * FROM almacen',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('almacen' , {results:results});
        }
    })
})
router.get('/inicio',crud.isAuthenticated, (req, res)=>{
    res.render('inicio');
})
router.get('/reportes',crud.isAuthenticated, (req, res)=>{
    res.render('reportes');
})

/* INSERTAR VALORES EN LAS TABLAS */ 


router.post('/savelog',crud.savelog)
router.post('/log',crud.log)
router.get('/logout',crud.logout)
router.post('/savebita',crud.savebita)
router.post('/savealma',crud.savealma)
router.post('/savecli',crud.savecli)
router.post('/saveemp',crud.saveemp)
router.post('/saveprove',crud.saveprove)
router.post('/saveproye',crud.saveproye)




/* EDITAR VALORES DE LAS TABLAS */ 
router.get('/editlog/:idUsuario',(req,res)=>{
    const idUsuario = req.params.idUsuario;
    conexion.query('SELECT * FROM usuarios WHERE idUsuario=?',[idUsuario],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('editlog' , {usuarios:results[0]});
        }
    })
})

router.post('/editlogin',crud.editlogin);

router.get('/edital/:idherra',(req,res)=>{
    const idherra = req.params.idherra;
    conexion.query('SELECT * FROM almacen WHERE idherra=?',[idherra],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('edital' , {almacen:results[0]});
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


router.get('/editemp/:idEmpleados',(req,res)=>{
    const idEmpleados = req.params.idEmpleados;
    conexion.query('SELECT * FROM empleados WHERE idEmpleados=?',[idEmpleados],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('editemp' , {empleados:results[0]});
        }
    })
})

router.post('/editemple',crud.editemple);


router.get('/editproyec/:idproye',(req,res)=>{
    const idproye = req.params.idproye;
    conexion.query('SELECT * FROM gestionproyecto WHERE idproye=?',[idproye],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('editproyec' , {gestionproyecto:results[0]});
        }
    })
})

router.post('/editproye',crud.editproye);


router.get('/editproved/:idProveedores',(req,res)=>{
    const idProveedores = req.params.idProveedores;
    conexion.query('SELECT * FROM proveedores WHERE idProveedores=?',[idProveedores],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('editproved' , {proveedores:results[0]});
        }
    })
})

router.post('/editprove',crud.editprove);

/* ELIMINAR UN REGISTRO **************************************************/ 

router.get('/deletelog/:idUsuario',(req,res)=>{
    const idUsuario = req.params.idUsuario;
    conexion.query('DELETE FROM usuarios WHERE idUsuario=?',[idUsuario],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/users');
        }
    })
});

router.get('/deletebita/:idbita',(req,res)=>{
    const idbita = req.params.idbita;
    conexion.query('DELETE FROM bitacora WHERE idbita=?',[idbita],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/inicio');
        }
    })
});

router.get('/deleteal/:idherra',(req,res)=>{
    const idherra = req.params.idherra;
    conexion.query('DELETE FROM almacen WHERE idherra=?',[idherra],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/almacen');
        }
    })
});

router.get('/deletecli/:idclientes',(req,res)=>{
    const idclientes = req.params.idclientes;
    conexion.query('DELETE FROM clientes WHERE idclientes=?',[idclientes],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/clientes');
        }
    })
});

router.get('/deleteemp/:idEmpleados',(req,res)=>{
    const idEmpleados = req.params.idEmpleados;
    conexion.query('DELETE FROM empleados WHERE idEmpleados=?',[idEmpleados],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/empleados');
        }
    })
});

router.get('/deleteproye/:idproye',(req,res)=>{
    const idproye = req.params.idproye;
    conexion.query('DELETE FROM gestionproyecto WHERE idproye=?',[idproye],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/proyectos');
        }
    })
});

router.get('/deleteprove/:idProveedores',(req,res)=>{
    const idProveedores = req.params.idProveedores;
    conexion.query('DELETE FROM proveedores WHERE idProveedores=?',[idProveedores],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/proveedores');
        }
    })
});



module.exports=router;