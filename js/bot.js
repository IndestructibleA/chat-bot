
// ПОДКЛЮЧЕНИЕ СТИЛЕЙ CSS //
let $ = document; // shortcut
let text = "Доброго времени суток. Вы пожаловали на %site-name%! Что бы вы хотели узнать?";
let textNode = document.createTextNode(text);


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
  chatBot.id = 'main';
  document.body.appendChild(chatBot);
  //log(botWindow);

  let newDiv = document.createElement('div');
    newDiv.className='divTop';
    newDiv.id = 'div-top';
    document.body.appendChild(newDiv);
  let childDivTop = document.querySelector('.botWindow');
    childDivTop.append(newDiv);
    childDivTop.innerHTML = "Бот Виталик рогалик";
    //childDivTop.innerHTML = inputText.value;

  
  let inputText = document.createElement('input');
    inputText.className='inputTxt';
    document.body.appendChild(inputText);
  let parentWindow = document.querySelector('.botWindow');
    parentWindow.append(inputText);


  // let avatarka = document.createElement('img');
  // avatarka.className = '.avatar';
  // avatarka.document.querySelector('.botWindow');
  // avatarka.append('img');


  // КНОПКА ТУТ //

  let value = true 
  let send = document.createElement('button');//создаём кнопку
    send.className='sendMessage';
  let sendText = document.createTextNode('Отправить'); 
    send.appendChild(sendText); //добавляем текст в кнопку
  let childButton = document.querySelector('.botWindow');
  
  
    if(value = true){
    document.body.appendChild(send);
    childButton.append(send);
    //childButton.append(sendText);
    newDiv.innerHTML = inputText.value;
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