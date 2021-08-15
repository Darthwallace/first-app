const express = require("express");
const router = express.Router();
const app =express();
//const expressLayouts = require("express-ejs-layouts");
//const faker = require("faker");


router.use(express.static('public'));

//app.set('view engine' , 'ejs');
//app.use(expressLayouts);

//let db = require("./db");

router.get('/',(req,res)=>{
    res.render('pages/home');
    //res.send('pagina de teste');
});

module.exports = router;

router.use(express.static('public'));
router.get('/',(req,res)=>{ 
 res.render('pages/home'); 
}); 
router.get('/about',(req,res)=>{ 
 //let usuarios=[]; 
 //Usando o Faker para criar 6 perfis para colocar no about
 //for(let cont=1;cont<=6;cont++){ 
 //usuarios.push({name:faker.name.findName(),email:
//faker.internet.email(),avatar: faker.image.image()}); 
 //} 
 //console.log(usuarios); 
 res.render('pages/about'); 
}); 

router.post('/cadastro/remove',(req,res)=>{
    let usuario={name: "wallace",email: "wallaceleite915@gmail.com"};

    let result =db.inserirDado(usuario);
    console.log(result);

});

router.get('/cadastro',(req,res)=>{
    //let resultados = db.buscarTodos({name:/^A/});
    //console.log(resultados);
    res.render('pages/cadastro');
});

router.get('/cadastro/insert',(req,res)=>{
    //let usuario={name: "wallace", email:"wallaceleite915@gmail.com"};

    //let result = db.inserirDado(usuario);
    //console.log(result);
});


router.get('/curriculo',(req,res)=>{ 
 res.send('Meu currículo'); 
});


   router.get('/cadastro/list',(req,res)=>{
   //listar de usuarios cadastrado 
   });
   //Essa linha permite que este código seja exportado como um 
   //módulo e possa ser usado em outras partes da aplicação. 
   module.exports = router; 


   