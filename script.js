document.addEventListener("DOMContentLoaded", function() {
    const currentTimeUTC = document.getElementById("current-time");
    const date = new Date();
    currentTimeUTC.textContent = `Current Time: ${date.toUTCString()}`;  
});