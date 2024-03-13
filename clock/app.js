
    var startTimer;
    const start = document.getElementById("btn")
    const stop = document.getElementById("btn-stop")
    const reset = document.getElementById("btn-reset")
    const minute = document.getElementById("minute")
    const seconds = document.getElementById("second")
    const timer = () => {
        // count down 
        if (seconds.innerText != 0) {
            seconds.innerText--
        }
        else if (minute.innerText != 0 && seconds.innerText == 0) {
            seconds.innerText = 59;
            minute.innerText--;
        }
    }
    stop.addEventListener("click", function(){
        clearInterval(startTimer);
        startTimer = undefined;
    })
    reset.addEventListener("click", function(){
        minute.innerText = 25;
        seconds.innerText = 0; 
        clearInterval(startTimer);
        startTimer = undefined;
    }),
    start.addEventListener("click", function(){
        if (startTimer === undefined){
            startTimer = setInterval(timer, 1000)
        }
        else{
            alert("timer is alredy on")
        }
        
    })
