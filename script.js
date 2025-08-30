let startBtn = document.getElementById('startBtn');
let date = document.getElementById('date');
let time = document.getElementById('time');
let timerDateBox = document.querySelector('.timer-date');
let content = document.querySelector('.content');
let timerError = document.querySelector('.timer-error');
let rocketImg = document.querySelector('.rocket');

// timer function 
function startTimer(){
    timerDateBox.classList.add('hide');
    
    let countDownDate = new Date( date.value +" "+ time.value+ ':00').getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    
    // if valid date and time 
    if(distance>=0) { 
        content.classList.remove('hide');
        rocketImg.classList.remove('hide');
        var x = setInterval(function(){
            var now = new Date().getTime();
            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
                // over countdown
                if(distance < 0){
                    clearInterval(x);
                    document.getElementById("days").innerHTML = "00";
                    document.getElementById("hours").innerHTML = "00";
                    document.getElementById("minutes").innerHTML = "00";
                    document.getElementById("seconds").innerHTML = "00";

                    content.innerHTML = `
                        <h1>We're <span>Live!</span> 🎉</h1>
                        <p class="thankYou">Thank you for waiting. <span class="afterLive">Explore our new experience 🚀</span></p>
                        <button type="button">Learn More <img src="images/triangle.png" ></button>
                    `
                    rocketImg.classList.add('hide');
                }

                // running countdown
                else{
                    if(days<10){
                        document.getElementById("days").innerHTML = '0'+ days;
                    }else {
                        document.getElementById("days").innerHTML = days;
                    }

                    if(hours<10){
                        document.getElementById("hours").innerHTML = '0'+ hours;
                    }else {
                        document.getElementById("hours").innerHTML = hours;
                    }

                    if(minutes<10) {
                        document.getElementById("minutes").innerHTML ='0'+ minutes;
                    }else {
                        document.getElementById("minutes").innerHTML = minutes;
                    }

                    if(seconds<10){
                        document.getElementById("seconds").innerHTML = '0' +seconds;
                    }else {
                        document.getElementById("seconds").innerHTML = seconds;
                    }
                }
        }, 1000);
    }

    // if invalid date and time     
    else {
        timerError.classList.remove('hide');
        setTimeout(() => {
            timerDateBox.classList.remove('hide');
            timerError.classList.add('hide');
        }, 3000); 
        time.value = "";
        date.value = "";
        return;
    }
}