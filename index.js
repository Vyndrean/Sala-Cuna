const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const userRoutes = require('./routes/userRoutes')
const parvuloRoutes = require('./routes/parvuloRoutes')
const apoderadosRoutes = require('./routes/apoderadoRoutes')
const asistenteRoutes = require('./routes/asistenteRoutes')
const educadorRoutes = require('./routes/educadorRoutes')
const matriculaRoutes = require('./routes/matriculaRoutes')

app.use(cors())
app.use(express.json())
app.options("*", cors())
app.use('/api', userRoutes)
app.use('/api', parvuloRoutes)
app.use('/api', apoderadosRoutes)
app.use('/api', asistenteRoutes)
app.use('/api', educadorRoutes)
app.use('/api', matriculaRoutes)

app.listen(process.env.PORT, () => {
    console.log('Server started and the url is http://localhost:' + process.env.PORT);

});

mongoose.set('useFindAndModify', false); 
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.DB,(err) => {
    if(err){
        console.log('Error al conectarse en la base de datos');
    }
    return console.log('Se conecto a la base de datos')
});

