//Rony Ahmmed EdTech-BDU
//Exam Hall Time Counting

function startCountdown() {
    // Get the time input value
    var timeInput = document.getElementById('timeInput').value;

    // Convert time string to Date object
    var finalDate = new Date(timeInput).getTime();

    // Update the countdown every second
    var x = setInterval(function () {
        // Get the current date and time
        var now = new Date().getTime();

        // Calculate the remaining time
        var distance = finalDate - now;

        if (distance < 0) {
            clearInterval(x);
            // If the countdown is over, display a message
            document.getElementById('timeC').innerHTML = 'EXPIRED';
            document.getElementById("hours").innerHTML =  "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
        }else{
            var remainingHours = Math.floor(distance / (1000 * 60 * 60));
            var remainingMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000);

            // HTML Display the remaining time
            document.getElementById("hours").innerHTML =  remainingHours ;
            document.getElementById("minutes").innerHTML = remainingMinutes ;
            document.getElementById("seconds").innerHTML = remainingSeconds ;
        }
    }, 1000);
}

//hide show

let x = 0;
let menu_item = document.getElementById("menu_item");
let a = document.getElementById("timeSetting");
function showMenu(){
    x = x+1;
    if(x%2==0){
        a.style.marginLeft = "-500px";
        menu_item.innerText ="Show Settings"
    }else{
        a.style.marginLeft = "50px";
        menu_item.innerText ="Hide Settings"
    }

}
 
//watchLiveCount
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var meridiem = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Display the formatted time
    var formattedTime = hours + ':' + minutes + ':' + seconds + ' ' + meridiem;
    document.getElementById('watchLiveCount').innerHTML = formattedTime;
  }

  // Update the clock every second
  setInterval(updateClock, 1000);
  updateClock();