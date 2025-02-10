let count = 0;
let button = document.getElementById("clickButton");

button.addEventListener("click", function() {
    count++;
    document.getElementById("counter").innerText = "MTC: " + count;

    // اضافه کردن افکت بزرگ و کوچک شدن
    button.style.transform = "translate(-50%, -50%) scale(1.2)";
    setTimeout(() => {
        button.style.transform = "translate(-50%, -50%) scale(1)";
    }, 100);
});