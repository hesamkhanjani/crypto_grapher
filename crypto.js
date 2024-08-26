import input from 'inquirer';
import fs from 'fs';
import 'colors';

const mediaArray = ["Hash", "CryptoGrapher"];
var num = 0;
var cuter , indexArray = 0 , unHashCryptoGrapher = ''  , contentfile = '' , NameFile = '';
var hash = '';  

input.prompt(
  [
    {
      name:'FILE',
      type:'input',
      message:'inter name file: ',
    },
  ],
)
.then((answer) =>{
    readFile(answer.FILE);
  })



   //              read file user
function readFile(namefile){
NameFile = namefile;
          fs.readFile(namefile , (err , data)=>{
            if(err) throw err;

            contentfile = data.toString();
 start();
})
       
}

function start(){
  
input
  .prompt([
    {
      name: "doyou",
      type: 'list',
      message: "What each? ",
      choices: mediaArray,
      
    },
  ])
  .then((answer) => {
   if(answer.doyou == 'Hash'){
    doHash()
   }else{
    doCryptoGrapher();
   }
  });
}

function doHash(){ 
input.prompt(
    [
      
        {
          name: "xor",
          type: "number",
          message: "what number for HASH ? ",
        },
      ],
      ) .then(answer => {  
   hasher(answer.xor)
        
      })
    }
function hasher(number) {

    for (var i = 0;i < contentfile.length;i++) {

  hash += ((contentfile.charCodeAt(num).toString(2)) ^ number).toString() + '#@#';
    num++;
    }
fs.writeFile('HASH-'+NameFile , hash , (err)=>{
  if(err) throw err;
  console.log('OK' .rainbow);

})
}
function doCryptoGrapher(){
input.prompt(
  [
    
      {
        name: "crypto",
        type: "number",
        message: "what number for CryptoGrapher ? ",
      },
    ],
    ) .then(answer => {
    
     
    cryptoGrapher(answer.crypto)
      
    })
  
  }
function cryptoGrapher(number) {
cuter = contentfile.split('#@#')
for (var i = 0; i < contentfile.length; i++) {

  unHashCryptoGrapher += String.fromCharCode( parseInt( parseInt(cuter[indexArray]) ^ number , 2 ) ) ;
 
indexArray++
    }
    fs.writeFile('CryptoGrapher-'+NameFile , unHashCryptoGrapher , (err)=>{
      if(err) throw err;
      
      console.log('OK' .rainbow);

    })
}
