let count = 0;
let button = document.getElementById("clickButton");
let ring = document.getElementById("ring");

// رویداد کلیک (فشردن دکمه)
button.addEventListener("mousedown", function() {
    button.style.transform = "translate(-50%, -50%) scale(0.9)"; // کوچک شدن سیاره
    ring.style.transform = "translate(-50%, -50%) rotate(-15deg) scale(0.9)"; // کوچک شدن حلقه
});

// رویداد رها کردن کلیک
button.addEventListener("mouseup", function() {
    button.style.transform = "translate(-50%, -50%) scale(1)"; // بازگشت به اندازه اصلی سیاره
    ring.style.transform = "translate(-50%, -50%) rotate(-15deg) scale(1)"; // بازگشت به اندازه اصلی حلقه
});

// افزایش شمارنده
button.addEventListener("click", function() {
    count++;
    document.getElementById("counter").innerText = "MTC: " + count;
});
