let days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

let visiterName = document.getElementById("visiter-name");
let x = prompt("İsminizi yazınız.");
visiterName.innerHTML = x;

let clockDisplay = document.getElementById("clock-display");

function clockFunction() {
  const d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  let day = days[d.getDay()];

  clockDisplay.innerHTML = hours + ":" + minutes + ":" + seconds + " " + day;
}
clockFunction();
setInterval(clockFunction, 1000);
