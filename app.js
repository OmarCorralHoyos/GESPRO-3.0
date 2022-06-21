const { json } = require('express');
const express = require('express');
const app = express();

const port = process.env.PORT || 5001;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use(express.static(__dirname + '/public'));
app.use('/', require('./router/router'));


app.listen(port, ()=>{
    console.log('SERVER corriendo en http://localhost:5001');
});

module.exports = app;