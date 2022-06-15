const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public'));
app.use('/', require('./router/router'));


app.listen(5001, ()=>{
    console.log('SERVER corriendo en http://localhost:5001');
});

module.exports = app;