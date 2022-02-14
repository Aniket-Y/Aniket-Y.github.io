setInterval(() => {
    date = new Date();
    hourtime = date.getHours();
    minutetime = date.getMinutes();
    secondtime = date.getSeconds();
    hourrotation = 30*hourtime + minutetime/2;
    minuterotation = minutetime*6;
    secondrotation = secondtime*6;

    hour.style.transform = `rotate(${hourrotation}deg)`;
    minute.style.transform =`rotate(${minuterotation}deg)`;
    second.style.transform = `rotate(${secondrotation}deg)`;
    
}, 1000);