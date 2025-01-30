document.addEventListener("DOMContentLoaded", function() {
    const currentTimeUTC = document.getElementById("current-time");
    function updateTime() {
    const date = new Date();
    currentTimeUTC.textContent = `Current Time: ${date.toUTCString()}`;
    }

    updateTime();

    setInterval(updateTime, 1000);
});