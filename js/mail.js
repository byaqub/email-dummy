const interval = setInterval(tick, 1000);
let listItem = null;
const timer = document.getElementById('timer');
const marker = document.getElementById('marker');
const emailList = document.getElementById('eMailList');
const json = [
  { id: 1, time: 250, message: "hohohohoho, i'm bored", response: false },
  { id: 2, time: 265, message: "ok, should probably start now", response: false },
  { id: 3, time: 280, message: "meh, still not in trouble", response: false, responseTime: 30 },
  { id: 4, time: 290, message: "easy goal to be reached", response: false },
  { id: 5, time: 295, message: "lots of time left", response: false },
  { id: 6, time: 230, message: "what was i supposed to do again?", response: false },
  { id: 7, time: 215, message: "right, this email tool functionality...", response: false },
  { id: 8, time: 195, message: "where to start?", response: false, responseTime: 30 },
  { id: 9, time: 185, message: "mmmmhh...i would like a sandwich right now", response: false },
  { id: 10, time: 180, message: "oops, got sidetracked there", response: false },
  { id: 11, time: 160, message: "getting ready.....still?", response: false },
  { id: 12, time: 135, message: "We need an email object...!", response: false },
  { id: 13, time: 110, message: "and some response system, probably", response: false, responseTime: 30 },
  { id: 14, time: 100, message: "ah...fuck it, let's go bowling", response: false },
  { id: 15, time: 85, message: "i'll continue tomorrow", response: false },
  { id: 16, time: 65, message: "i promise", response: false },
  { id: 17, time: 50, message: "see you", response: false },
  { id: 18, time: 30, message: "Trolololololololo", response: false, responseTime: 30 },
  { id: 19, time: 15, message: "HA - HA - HAHAHA", response: false },
  { id: 20, time: 5, message: "HAHA - HA - HAHA", response: false },
];

let timeLeft = 300;


function tick() {
  timeLeft--;
  checkTime(timeLeft);
  console.log(emailList.children);
  // timer.innerText = convertTime(timeLeft);
  if (timeLeft === 0) {
    renderAnsweredMails();
    clearInterval(interval);
  } else {
    null;
  }
}

function checkTime(time) {
  let text = null;

  json.forEach(element => {
    if (time === element.time) {
      listItem = document.createElement('LI');
      listItem.className = "collection-item";
      listItem.onclick = function () { 
        setActive(element);
        for(item in emailList.children){
          item.className = "collection-item";
        }
        listItem.className += " active";
       };
      text = document.createTextNode(element.message);
      listItem.appendChild(text);
      emailList.appendChild(listItem);
      Window.Element = element;
    }
    else { null; }
  })
}

function setActive(element) {
  const title = document.getElementById('title');
  const message = document.getElementById('message');
  title.innerText = "Email No." + element.id;
  message.innerText = element.message;

}

function respond() {
  const mailID = Window.Element.id;
  json[mailID - 1].response = true;
}

function renderAnsweredMails() {
  // const answered = document.getElementById('answered');
  // const item = document.createElement('LI');
  let answeredMails = [];

  // answered.appendChild(item.appendChild(document.createTextNode("Mails that have been answered:")))

  // json.forEach(element => {
  //   element.response ? answered.appendChild(item.appendChild(document.createTextNode(element.id + "\n"))) : null;
  // })

  json.forEach(element => {
    element.response ? answeredMails = [...answeredMails, element.id] : null;
  })
  console.log(answeredMails);
}

function convertTime(timeLeft) {
  let seconds = leadingZero(timeLeft % 60);
  let minutes = leadingZero(Math.floor(timeLeft / 60));
  return (minutes + " : " + seconds);
}

function leadingZero(num) {
  return num <= 10 ? "0" + num : num;
}
