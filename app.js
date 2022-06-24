const { json } = require('express');
const express = require('express');
const app = express();

require('dotenv').config()

const puerto = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use(express.static(__dirname + '/public'));
app.use('/', require('./router/router'));


app.listen(puerto, ()=>{
    console.log('SERVER corriendo en http://localhost:',puerto);
});

module.exports = app;
