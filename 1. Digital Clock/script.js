let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

setInterval(() => createDate(),100);

function createDate(){
    let date = new Date();

    let Datehours = date.getHours();
    let DateMinutes = date.getMinutes();
    let DateSeconds = date.getSeconds();

    Datehours < 10 ? Datehours = "0" + Datehours : "";
    DateMinutes < 10 ? DateMinutes = "0" + DateMinutes : "";
    DateSeconds < 10 ? DateSeconds = "0" + DateSeconds : "";

    hours.textContent = Datehours;
    minutes.textContent = DateMinutes;
    seconds.textContent = DateSeconds;
}

