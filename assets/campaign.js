document.addEventListener("DOMContentLoaded", function() {

    var count = new Date("Sep 20,2023 00:00:00").getTime();
    var days = document.getElementById("days")
    var hours = document.getElementById("hours")
    var minutes = document.getElementById("minutes")
    var seconds = document.getElementById("seconds")

    var x = setInterval(function(){
        var now = new Date().getTime();
        var distance = count - now;

        days.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);


        if(distance < 0){
            clearInterval(x);
            days.innerHTML = "00";
            hours.innerHTML = "00";
            minutes.innerHTML = "00";
            seconds.innerHTML = "00";
        }


    },1000);



    // function updateProgressBar() {
    //     var progressBar = document.querySelector('.progress-bar-inside');
    //      var currentWidth = parseInt(progressBar.style.width, 10);
    //      if (currentWidth < 100) {
    //        progressBar.style.width = (currentWidth + 1) + '%';
    //      }
    //   }
      
    var progressBar = document.querySelector('.progress-bar-inside');
    var targetProgressBar = document.querySelector(".target-progress-bar-inside")
        
    progressBar.classList.add('progress-bar-inside--start');
    targetProgressBar.classList.add('target-progress-bar-inside--start');

    var maxButton = document.getElementById("max-amount-button");
    maxButton.addEventListener("click", function() {
      var input = document.getElementById("max-amount-input");
      if (input.value !== "76.45324000000") {
        input.value = "76.45324000000";
      }
    });





});