const express = require("express");
const router = express.Router();
//const app =express();
//const expressLayouts = require("express-ejs-layouts");
//const faker = require("faker");


router.use(express.static('public'));

//app.set('view engine' , 'ejs');
//app.use(expressLayouts);

//let db = require("./db");

router.get('/',(req,res)=>{
    res.render('pages/home');
    
});

// router.get('/',(req,res)=>{ 
//  res.render('pages/home'); 
// }); 

router.get('/about',(req,res)=>{  
 res.render('pages/about'); 
}); 

router.get('/cadastro',(req,res)=>{
    res.render('pages/cadastro',{usuarios:usuarios});
});

router.post('/cadastro/remove',(req,res)=>{
        let name = req.body.name;

        if(usuarios.length==0){
            console.log("Erro: não há elemento a ser removido!");
            return res.status(500).json({
                status:'error',
                error:'Removed element: ${name}'
            });
        } else {
            for(let cont=0;cont<usuarios.length;cont++){
                if(usuarios[cont].name==name){
                    usuarios.splice(cont,1);
                    console.log("Elemento Removido: ",name);
                    return res.status(200).json({
                        status:'sucess',
                        data:usuarios
                    });
                    //res.send(JSON.stringify({sucess:`Elemento removido com sucesso: ${name}`}));
                } else if(cont==usuarios.length-1){
                    console.log("Erro ao remover elemento: ",name);
                    return res.status(400).json({
                        status:'error',
                        error:`Removed element: ${name}`
                    });
                }
            }
        }
    
    
    
    //res.send('remoção realizada com sucesso');
   });




router.post('/cadastro/update',(req,res)=>{
    usuarios[req.body.id].name=req.body.name;
    usuarios[req.body.id].endereco=req.body.endereco;
    usuarios[req.body.id].email=req.body.email;
    usuarios[req.body.id].age=req.body.age;
    usuarios[req.body.id].height=req.body.height;
    usuarios[req.body.id].vote=req.body.vote;    
    

    res.sendStatus(200);
    console.log("Dados recebidos: ",req.body);
    //res.send('atualização realizada com sucesso');
   });


router.get('/cadastro/list',(req,res)=>{

});
//router.get('/cadastro/insert',(req,res)=>{
//});
router.post('/cadastro/add',(req,res)=>{
    let usuario={name:"",email:"",endereco:"",heigth:"",age:"",vote:""};

    usuario.name = req.body._name;
    usuario.email = req.body._email;
    usuario.endereco = req.body._endereco;
    usuario.heigth = req.body._heigth;
    usuario.age = req.body._age;
    usuario.vote = req.body._vote;

    usuario.push(usuario);
    console.log("Usuário cadastrado: ",usuario);
    console.log("Lista dos usuários: ",usuarios)
    res.sendStatus(200);
    res.status(200).json({
        status:'sucess',
        data: 'Usuário ${usuario} foi adicionado com sucesso!'
    });
});

//router.get('/curriculo',(req,res)=>{ 
 //res.send('Meu currículo'); 
//});
module.exports = router;
   //Essa linha permite que este código seja exportado como um 


