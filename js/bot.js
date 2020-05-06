
// ПОДКЛЮЧЕНИЕ СТИЛЕЙ CSS //
let $ = document; // shortcut

  let cssId = 'myCss';  // you could encode the css path itself to generate id..

      let head  = $.getElementsByTagName('head')[0];
      let link  = $.createElement('link');

      link.id   = cssId;
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = 'css/bot.css';
      link.media = 'all';
      head.appendChild(link);


// Добавление элементов // 

window.onload=function() {
  let chatBot = document.createElement('form');
  chatBot.className='botWindow';
  chatBot.id = 'botWindow';
  document.body.appendChild(chatBot);
  log(botWindow);

  
  let inputText = document.createElement('input');
  inputText.className='inputText';
  document.body.appendChild(inputText);

  let printMessage = document.createElement('div');
  printMessage.className='printMessage';
  document.body.appendChild(printMessage);
  //document.body.append(printMessage);
 
    
  // КНОПКА ТУТ //

  let value = true 
  let send = document.createElement('button');//создаём кнопку
  send.className='sendMessage';
  let sendText = document.createTextNode('Отправить'); 
  send.appendChild(sendText); //добавляем текст в кнопку
  
    if(value = true){
    document.body.appendChild(send);

  }

  }

  let botMessage= document.createElement('botMessage');
  botMessage.className = "alert";
  botMessage.innerHTML = "<strong>Всем привет!</strong>" + "<br> Это тестовая строка, и она уже исчезает";

  document.body.append(botMessage);
  setTimeout(() => botMessage.remove(), 3000);


// function Bot(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("Вася");



  let log = console.log;