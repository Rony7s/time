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