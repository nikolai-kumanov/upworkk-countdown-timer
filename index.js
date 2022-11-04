(function () {
    let countdownDate = new Date("Oct 20, 2023 19:47:25");
    if (!localStorage.getItem('countdownDate')) {
        let countdownDate = new Date("Oct 21, 2022 19:47:25");
        localStorage.setItem('countdownDate', countdownDate);
    }
    
    countdownDate = new Date(localStorage.getItem('countdownDate'));
    
    let updateCountdown = setInterval(function() {
        let now = new Date();
        let distance = countdownDate.getTime() - now.getTime();
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
        if (distance < 0) {
            clearInterval(updateCountdown);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);    
})();