
let userName = prompt("Lütfen Adınızı Giriniz:");
let myName = document.querySelector("#myName");

if (userName) {
    myName.innerHTML = `${userName}`;
} else {
    myName.innerHTML = "Misafir";
}

function showTime() {
    let date = new Date();
    let h = date.getHours(); 
    let m = date.getMinutes(); 
    let s = date.getSeconds(); 
    let d = date.getDay(); 

    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let dayName = days[d];

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    let time = `${h}:${m}:${s} ${dayName}`;

    document.querySelector("#myClock").innerText = time;
    
    document.querySelector("#myClock").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();