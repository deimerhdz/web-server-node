import express from 'express';
import path from 'node:path';
import {fileURLToPath} from 'node:url'
import hbs from 'hbs';
import 'dotenv/config';

const app = express();
const __filename= fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 3000;
//Handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials')
//Servir contenido statico
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('home',{
        nombre:'Deimer Hernandez',
        titulo:'Curso de Node'
    });
});

app.get('/generic',(req,res)=>{
    res.sendFile(__dirname +'/public/generic.html');
})
app.get('/elements',(req,res)=>{
    res.sendFile(__dirname +'/public/elements.html');
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})