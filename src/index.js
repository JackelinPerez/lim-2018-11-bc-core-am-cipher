//variables globales

let saveActionButonOK;
let saveActionButonEncript;
let saveActionButonDesEncript;
let outTextEncripDesencript;
let saveClave_='';
let saveOffset_='';

const listenDecode = (saveClave__,saveOffset__) =>{
  return cipher.decode(saveClave__,saveOffset__);
}

const listenCode = (saveClave__,saveOffset__) =>{
  return cipher.encode(saveClave__,saveOffset__);
}

const menuPrincipal= () =>{
  let valor_encrip_desc='';
  saveActionButonOK=document.getElementById('button1');
  saveActionButonEncript=document.getElementById('button2');
  saveActionButonDesEncript=document.getElementById('button3');
  outTextEncripDesencript=document.getElementById('result');

  saveClave_=document.getElementById('texto1');
  saveOffset_=document.getElementById('texto2');

  document.getElementById("screen2").style.display="none";

  saveActionButonOK.addEventListener('click',
    function(){
      document.getElementById("screen1").style.display="none";
      document.getElementById("screen2").style.display="block";
    }
  )
  saveActionButonEncript.addEventListener('click',
    function(){
      if(saveClave_.value.length!==0 && saveOffset_.value.length!==0){
        if(Math.sign(parseInt(saveOffset_.value))>=0)
          valor_encrip_desc=listenCode(saveClave_.value,parseInt(saveOffset_.value));
        else
          valor_encrip_desc=listenDecode(saveClave_.value,Math.abs(parseInt(saveOffset_.value)));
        outTextEncripDesencript.innerHTML=valor_encrip_desc;
      }
      else {
        if(saveClave_.value.length===0) alert('Por favor ingrese texto');
        else alert('Por favor ingrese offset');
      }
    }
  );
  saveActionButonDesEncript.addEventListener('click',
    function(){
      if(saveClave_.value.length!==0 && saveOffset_.value.length!==0){
        if(Math.sign(parseInt(saveOffset_.value))>=0)
          valor_encrip_desc=listenDecode(saveClave_.value,parseInt(saveOffset_.value));
        else
          valor_encrip_desc=listenCode(saveClave_.value,Math.abs(parseInt(saveOffset_.value)));
        outTextEncripDesencript.innerHTML=valor_encrip_desc;
      }
      else{
        if(saveClave_.value.length===0) alert('Por favor ingrese texto');
        else alert('Por favor ingrese offset');
      }
    }
  );
}

menuPrincipal();
