let Encode_ = (saveClave,saveOffset) =>{
  IniConfig();
  for(let i=0; i<saveClave.length; i++){
    //(x-65+n)%26+65
    if((saveClave[i].charCodeAt(0)<=90 && saveClave[i].charCodeAt(0)>=65)||
       (saveClave[i].charCodeAt(0)<=122 && saveClave[i].charCodeAt(0)>=97)){
      if(saveClave[i].charCodeAt(0)>=97)
        encriptClaveAux.push((saveClave[i].charCodeAt(0)-97+ saveOffset)%26+97);
      else
        encriptClaveAux.push((saveClave[i].charCodeAt(0)-65+ saveOffset)%26+65);
    }
    else{
      encriptClaveAux.push(saveClave[i].charCodeAt(0)+saveOffset);
    }
    encript_descrip_Clave.push(String.fromCharCode(encriptClaveAux[i]));
  }
  //console.log(encriptClaveAux);
  encript_descrip_Clave_end=encript_descrip_Clave.join('');
  //console.log(encript_descrip_Clave_end);
  return encript_descrip_Clave_end;
}
let Decode_ = (saveClave,saveOffset) =>{
  IniConfig();
  for(let i=0; i<saveClave.length; i++){
    //(x+65-n)%26+65
    if((saveClave[i].charCodeAt(0)<=90 && saveClave[i].charCodeAt(0)>=65)||
       (saveClave[i].charCodeAt(0)<=122 && saveClave[i].charCodeAt(0)>=97)){
        if(saveClave[i].charCodeAt(0)>=97){
    		  if(Math.sign((saveClave[i].charCodeAt(0)-97- saveOffset)%26)>=0)/*Se considero '==' ya que (-num)%26 ===-0*/
    			encriptClaveAux.push((saveClave[i].charCodeAt(0)-97- saveOffset)%26+97);
    		  else
    			encriptClaveAux.push(26 - (Math.abs(saveClave[i].charCodeAt(0)-97- saveOffset)%26)+97);
  	    }
        else{
          if(Math.sign((saveClave[i].charCodeAt(0)-65- saveOffset)%26)>=0)
            encriptClaveAux.push((saveClave[i].charCodeAt(0)-65- saveOffset)%26+65);
    		  else
            encriptClaveAux.push(26 - (Math.abs(saveClave[i].charCodeAt(0)-65- saveOffset)%26)+65);
        }
    }
    else{
      encriptClaveAux.push(saveClave[i].charCodeAt(0)-saveOffset);
    }
    encript_descrip_Clave.push(String.fromCharCode(encriptClaveAux[i]));
  }
  //console.log(encriptClaveAux);
  encript_descrip_Clave_end=encript_descrip_Clave.join('');
  //console.log(encript_descrip_Clave_end);
  return encript_descrip_Clave_end;
}

window.cipher = {
  encode: Encode_,
  decode: Decode_,
};

function ejem(texto){
	console.log(texto);
}
//cipher.ejemplo('hola');
const IniConfig = () =>{
  encriptClaveAux=[];
  encript_descrip_Clave=[];
  encript_descrip_Clave_end='';
}
