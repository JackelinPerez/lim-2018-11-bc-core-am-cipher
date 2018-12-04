let textFile;
let saveText = '';
let saveOffset = '';

const saveFileFunction= ()=>{
  let nameFile='';
  let extNameFile='';

  let element = document.createElement('input');
  element.setAttribute('type','file');
  element.setAttribute('accept','.txt,TXT');

  element.style.display='none';
  document.body.appendChild(element);
  element.click();
  element.onchange = function (){
    let input=event.target;
    if(!input) alert('Por favor vuelva a subir su archivo .txt/.TXT');
    let readFile= new FileReader();

    readFile.onload= function(){
      const textRead=readFile.result;
      saveText.value = textRead;
    }

    nameFile = input.files[0].name;
    if(nameFile.length!==0){
      extNameFile =  nameFile.substring(nameFile.length-4,nameFile.length);
      if((extNameFile==='.txt') || (extNameFile==='.TXT')){
        textFile.value = nameFile;
        readFile.readAsText(input.files[0]);
      }
      else
        alert('Por favor subir solo archivo .txt/.TXT');
    }
  }
  document.body.removeChild(element);
}

const downloadFileFuntion= (filename,text)=>{
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);

}
const menuPrincipal = () => {
  let valueEncripDescrip = '';
  let valueFileDownload = '';
  const saveActionButonOK = document.getElementById('button1');
  const saveActionButonEncript = document.getElementById('button2');
  const saveActionButonDesEncript = document.getElementById('button3');
  let outTextEncripDesencript = document.getElementById('result');

  const saveFile = document.getElementById('saveFile');
  textFile = document.getElementById('textFile');
  const downloadFile = document.getElementById('downloadFile')
  saveText = document.getElementById('saveText');
  saveOffset = document.getElementById('saveOffset');

  document.getElementById('screen2').style.display = 'none';

  saveText.addEventListener('click',function(){
    if(saveText.value.length!==0 || textFile.value.length!==0){
      outTextEncripDesencript.value = '';
      saveText.value = '';
      saveOffset.value ='';
      textFile.value = '';
    }
  });

  saveOffset.addEventListener('click',function(){
    if(saveText.value.length!==0) outTextEncripDesencript.value='';
  });

  saveActionButonOK.addEventListener('click',
    function () {
      document.getElementById('screen1').style.display = 'none';
      document.getElementById('screen2').style.display = 'block';
    }
  )
  saveActionButonEncript.addEventListener('click',
    function () {
      if (saveText.value.length !== 0 && saveOffset.value.length !== 0) {
        valueEncripDescrip = cipher.encode(saveOffset.value , saveText.value);
        outTextEncripDesencript.value = valueEncripDescrip;
      }
      else {
        if (saveText.value.length === 0) alert('Por favor ingrese texto');
        else alert('Por favor ingrese offset');
      }
      if(textFile.value.length!==0)
        valueFileDownload = textFile.value.substring(0,textFile.value.length-4) + 'Encode' +'.txt';
      else
        valueFileDownload = 'TextEncode.txt'
    }
  );
  saveActionButonDesEncript.addEventListener('click',
    function () {
      if (saveText.value.length!==0 && saveOffset.value.length !== 0){
        valueEncripDescrip = cipher.decode(saveOffset.value , saveText.value);
        outTextEncripDesencript.value = valueEncripDescrip;
      }
      else {
        if (saveText.value.length === 0) alert('Por favor ingrese texto');
        else alert('Por favor ingrese offset');
      }
      if(textFile.value.length!==0)
        valueFileDownload = textFile.value.substring(0,textFile.value.length-4) + 'Decode' + '.txt';
      else
      valueFileDownload = 'TextEncode.txt'
    }
  );

  saveFile.addEventListener('click',
    function(){
      if(textFile.value.length!==0 || saveText.value.length!==0) {
        outTextEncripDesencript.value='';
        saveText.value='';
        saveOffset.value='';
        textFile.value='';
      }
      saveFileFunction();
    }
  );
  downloadFile.addEventListener('click',
    function (){
      downloadFileFuntion(valueFileDownload,outTextEncripDesencript.value);
    }
  )

}

menuPrincipal();
