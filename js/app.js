const $ = document;
const hourElem = $.querySelector(".hour");
const minElem = $.querySelector(".min");
const secElem = $.querySelector(".sec");

setInterval(function () {
  showTime();
}, 1000);

window.addEventListener("load", function () {
  showTime();
});

function showTime() {
  let hour = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  /* or we can go this way */
  /* if(hour < 10){
    hourElem.textContent = '0' + hour;
  }
  if(min < 10){
    minElem.textContent = '0' + min;
  }
  if(sec < 10){
    secElem.textContent = '0' + sec;
  }
   */

  hourElem.textContent = hour;
  minElem.textContent = min;
  secElem.textContent = sec;
}
