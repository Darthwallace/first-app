const express = require("express"); 
const app = express(); 
const routes =require("./routes");
const expressLayouts = require("express-ejs-layouts");
const { urlencoded } = require("express");

const port=3030; 
const address="localhost"; 

const utils = require("./utils");

const faker = require("faker");

let toggleBol=true;


// global.usuarios =[
//     {name:"wallace",endereco:"Rua bom jesus, 2641",email:"wallaceleite915@gmail.com",age:22,height:1.80,vote:true},
//     {name:"wesley",endereco:"Rua bom jesus, 2655",email:"wesley915@gmail.com",age:15,height:1.75,vote:false}
// ];

global.usuarios=[];


for (let cont=0;cont<20;cont++){
    usuarios.push({name:faker.name.findName(),email:faker.internet.email(),address:faker.address.streetAddress(),age:utils.getRandomByInterval(15,50,true),heigth:utils.getRandomByInterval(1.50,1.70,false).toFixed(2),vote:toggleBol});
    toggleBol=!toggleBol;
}


app.set('view engine','ejs');
app.use(expressLayouts);

app.use(express.urlencoded({extended:false}));
app.use(express.json);


app.use('/',routes);

//Criando um servidor simples com o Node.js e o Express
const server = app.listen(port,address,()=>{ 
 let host = server.address().address; 
 let port = server.address().port; 
 console.log(`Servidor executando no endereço ${host} e porta ${port}`); 
})
