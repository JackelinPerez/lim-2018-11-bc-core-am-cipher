let saveActionButonOK;
let saveActionButonEncript;
let saveActionButonDesEncript;
let outTextEncripDesencript;
let saveFile;
let saveClave = '';
let saveOffset = '';

const listenDecode = (saveClave_, saveOffset_) => {
  return cipher.decode(saveClave_, saveOffset_);
}

const listenCode = (saveClave_, saveOffset_) => {
  return cipher.encode(saveClave_, saveOffset_);
}

const menuPrincipal = () => {
  let valueEncripDescrip = '';
  saveActionButonOK = document.getElementById('button1');
  saveActionButonEncript = document.getElementById('button2');
  saveActionButonDesEncript = document.getElementById('button3');
  outTextEncripDesencript = document.getElementById('result');

  saveFile = document.getElementById('saveFile');
  saveClave = document.getElementById('texto1');
  saveOffset = document.getElementById('texto2');

  document.getElementById('screen2').style.display = 'none';

  saveClave.addEventListener('click',function(){
    if(saveClave.value.length!==0) outTextEncripDesencript.innerHTML='';
  });

  saveOffset.addEventListener('click',function(){
    if(saveClave.value.length!==0) outTextEncripDesencript.innerHTML='';
  });

  saveActionButonOK.addEventListener('click',
    function () {
      document.getElementById('screen1').style.display = 'none';
      document.getElementById('screen2').style.display = 'block';
    }
  )
  saveActionButonEncript.addEventListener('click',
    function () {
      if (saveClave.value.length !== 0 && saveOffset.value.length !== 0) {
        if (Math.sign(parseInt(saveOffset.value)) >= 0)
          valueEncripDescrip = listenCode(saveClave.value, parseInt(saveOffset.value));
        else
          valueEncripDescrip = listenDecode(saveClave.value, Math.abs(parseInt(saveOffset.value)));
        outTextEncripDesencript.innerHTML = valueEncripDescrip;
      }
      else {
        if (saveClave.value.length === 0) alert('Por favor ingrese texto');
        else alert('Por favor ingrese offset');
      }
    }
  );
  saveActionButonDesEncript.addEventListener('click',
    function () {
      if (saveClave.value.length!==0 && saveOffset.value.length !== 0){
        if (Math.sign(parseInt(saveOffset.value)) >= 0)
          valueEncripDescrip = listenDecode(saveClave.value, parseInt(saveOffset.value));
        else
          valueEncripDescrip = listenCode(saveClave.value, Math.abs(parseInt(saveOffset.value)));
        outTextEncripDesencript.innerHTML = valueEncripDescrip;
      }
      else {
        if (saveClave.value.length === 0) alert('Por favor ingrese texto');
        else alert('Por favor ingrese offset');
      }
    }
  );


  let saveFileFunction= (event)=>{
    let input=event.target;
    let readFile= new FileReader();
    readFile.onload= function(){
      let textRead=readFile.result;
      document.getElementById('texto1').value = textRead;
    }
    readFile.readAsText(input.files[0]);
  }

  saveFile.onchange = function(){
    if(saveClave.value.length!==0) outTextEncripDesencript.innerHTML='';
    saveFileFunction(event);
  };

}

menuPrincipal();
