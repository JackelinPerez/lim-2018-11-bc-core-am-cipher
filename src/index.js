//variables globales
let encriptClaveAux=[];
let encript_descrip_Clave=[];
let encript_descrip_Clave_end='';
let saveActionButonOK;
let saveActionButonEncript;
let saveActionButonDesEncript;
let outTextEncripDesencript;
let saveClave_;
let saveOffset_;

const test = () => {
  console.log("test 1");
}

const listenDecode = (saveClave__,saveOffset__) =>{
  return cipher.decode(saveClave__,saveOffset__);
}

const listenCode = (saveClave__,saveOffset__) =>{
  return cipher.encode(saveClave__,saveOffset__);
}

const menuPrincipal= () =>{
  //debugger
  let valor_encrip_desc='';
  saveActionButonEncript=document.getElementById('button2');
  saveActionButonDesEncript=document.getElementById('button3');
  outTextEncripDesencript=document.getElementById('result');

  saveClave_=document.getElementById('texto1');
  saveOffset_=document.getElementById('texto2');

  saveActionButonEncript.addEventListener('click',
    function(){
      //debugger
      if(Math.sign(parseInt(saveOffset_.value))>=0)
        valor_encrip_desc=listenCode(saveClave_.value,parseInt(saveOffset_.value));
      else
        valor_encrip_desc=listenDecode(saveClave_.value,Math.abs(parseInt(saveOffset_.value)));
      console.log('valor return= '+valor_encrip_desc);
      outTextEncripDesencript.innerHTML=valor_encrip_desc;
    }
  );
  saveActionButonDesEncript.addEventListener('click',
    function(){
      if(Math.sign(parseInt(saveOffset_.value))>=0)
        valor_encrip_desc=listenDecode(saveClave_.value,parseInt(saveOffset_.value));
      else
        valor_encrip_desc=listenCode(saveClave_.value,Math.abs(parseInt(saveOffset_.value)));
      console.log('valor return= '+valor_encrip_desc);
      outTextEncripDesencript.innerHTML=valor_encrip_desc;
    }
  );
}

menuPrincipal();
