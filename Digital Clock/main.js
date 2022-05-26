const hour = document.querySelector("#hour")
const minute = document.querySelector("#minute")

const seconds = document.querySelector("#seconds")

let clock=setInterval(
    function time(){

        var date_now =new Date()
        var hr = date_now.getHours()
        var min =date_now.getMinutes()

        var sec = date_now.getSeconds()

        if (hr<10){
            hr="0"+hr
        }
        if (hr==00){
            hr=12
        }

        if (hr>12){
            hr="0"+hr%12  
        }
        

        if(min<10){
            min="0"+min
        }
        if(sec<10){
            sec="0"+sec
        }





        hour.textContent=hr
        minute.textContent=min
        seconds.textContent=sec




         

    },1000
)
