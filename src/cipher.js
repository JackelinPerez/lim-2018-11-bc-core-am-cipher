const Encode_ = (saveOffsetString,saveText) =>{
  let encriptClaveAscii=[];
  let encriptDescripClaveArray=[];
  let encriptDescripClaveString='';
  let saveOffset;
  /*Evaluamos si es offset +/-*/
  if (Math.sign(saveOffsetString) < 0)
    return cipher.decode(Math.abs(saveOffsetString),saveText);

  saveOffset=parseInt(saveOffsetString);
  for(let i=0; i<saveText.length; i++){
    //(x-65+n)%26+65
    if((saveText[i].charCodeAt(0)<=90 && saveText[i].charCodeAt(0)>=65)||
       (saveText[i].charCodeAt(0)<=122 && saveText[i].charCodeAt(0)>=97)){
      if(saveText[i].charCodeAt(0)>=97)
        encriptClaveAscii.push((saveText[i].charCodeAt(0)-97+saveOffset)%26+97);
      else
        encriptClaveAscii.push((saveText[i].charCodeAt(0)-65+saveOffset)%26+65);
    }
    else{
      encriptClaveAscii.push(saveText[i].charCodeAt(0) + saveOffset%255);
      /*Filtro que dejara pasar cualquier otro caracter distinto del Abecedario, incluyendo ñ,ll,ch y vocales con tilde*/
      //encriptClaveAscii.push(saveText[i].charCodeAt(0));
    }
    encriptDescripClaveArray.push(String.fromCharCode(encriptClaveAscii[i]));
  }
  encriptDescripClaveString=encriptDescripClaveArray.join('');
  return encriptDescripClaveString;
}

const Decode_ = (saveOffsetString,saveText) =>{
  let encriptClaveAscii=[];
  let encriptDescripClaveArray=[];
  let encriptDescripClaveString='';
  let saveOffset;

  /*Evaluamos si es offset +/-*/
  if (Math.sign(saveOffsetString) < 0)
    return cipher.encode(Math.abs(saveOffsetString),saveText);

  saveOffset=parseInt(saveOffsetString);

  for(let i=0; i<saveText.length; i++){
    //(x-65-n)%26+65
    if((saveText[i].charCodeAt(0)<=90 && saveText[i].charCodeAt(0)>=65)||
       (saveText[i].charCodeAt(0)<=122 && saveText[i].charCodeAt(0)>=97)){
      if(saveText[i].charCodeAt(0)>=97){
        /*Se considero '>=' ya que se esta considerando valores positivos*/
        if(Math.sign((saveText[i].charCodeAt(0)-97-saveOffset)%26) >= 0)
          encriptClaveAscii.push((saveText[i].charCodeAt(0)-97-saveOffset)%26+97);
        else
          encriptClaveAscii.push(26-(Math.abs(saveText[i].charCodeAt(0)-97-saveOffset)%26)+97);
      }
      else if(Math.sign((saveText[i].charCodeAt(0)-65-saveOffset)%26) >= 0)
        encriptClaveAscii.push((saveText[i].charCodeAt(0)-65-saveOffset)%26+65);
      else
        encriptClaveAscii.push(26-(Math.abs(saveText[i].charCodeAt(0)-65-saveOffset)%26)+65);
    }
    else{
      encriptClaveAscii.push(saveText[i].charCodeAt(0) - saveOffset%255);
      /*Filtro que dejara pasar cualquier otro caracter distinto del Abecedario, incluyendo ñ,ll,ch y vocales con tilde*/
      //encriptClaveAscii.push(saveText[i].charCodeAt(0));
    }
    encriptDescripClaveArray.push(String.fromCharCode(encriptClaveAscii[i]));
  }
  encriptDescripClaveString=encriptDescripClaveArray.join('');
  return encriptDescripClaveString;
}

window.cipher = {
  encode: Encode_,
  decode: Decode_,
};
