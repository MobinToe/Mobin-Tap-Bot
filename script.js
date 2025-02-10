let count = 0;
const button = document.getElementById("clickButton");
const ring = document.getElementById("ring");
const counter = document.getElementById("counter");
const planetContainer = document.querySelector(".planet-container");
const communityBox = document.getElementById("communityBox");
const bonusButton = document.getElementById("bonusButton");

function handlePress() {
    button.style.transform = "scale(0.9)";
    setTimeout(() => {
        ring.style.transform = "translate(-50%, -50%) rotate(-15deg) scale(0.9)";
    }, 50); // حلقه کمی دیرتر کوچک می‌شود
}

function handleRelease() {
    button.style.transform = "scale(1)";
    setTimeout(() => {
        ring.style.transform = "translate(-50%, -50%) rotate(-15deg) scale(1)";
    }, 50); // حلقه کمی دیرتر به حالت اولیه برمی‌گردد
}

function handleClick(event) {
    if (bonusButton.style.display === "block") {
        count += 2; // اگر دکمه فعال باشد، هر کلیک ۲ بار اضافه می‌کند
    } else {
        count++; // در غیر این صورت، هر کلیک ۱ بار اضافه می‌کند
    }
    counter.innerText = "Your MTC = " + count;

    // نمایش دکمه پس از ۱۰۰ کلیک
    if (count >= 100 && bonusButton.style.display === "none") {
        bonusButton.style.display = "block";
    }

    // ایجاد افکت +1
    const plusOne = document.createElement("div");
    plusOne.classList.add("plus-one");
    plusOne.innerText = "+1";

    const rect = button.getBoundingClientRect();
    plusOne.style.left = `${event.clientX - rect.left}px`;
    plusOne.style.top = `${event.clientY - rect.top}px`;

    planetContainer.appendChild(plusOne);

    setTimeout(() => {
        plusOne.remove();
    }, 1000);
}

// کاهش ۱۰۰ کلیک و فعال‌کردن حالت ۲x
bonusButton.addEventListener("click", function() {
    if (count >= 100) {
        count -= 100; // ۱۰۰ کلیک کم می‌شود
        counter.innerText = "Your MTC = " + count;
        bonusButton.style.display = "none"; // دکمه مخفی می‌شود
    }
});

// باز کردن لینک تلگرام هنگام کلیک روی دکمه
communityBox.addEventListener("click", function() {
    window.open("https://t.me/MobinTapChannel", "_blank");
});

button.addEventListener("mousedown", handlePress);
button.addEventListener("mouseup", handleRelease);
button.addEventListener("touchstart", handlePress);
button.addEventListener("touchend", handleRelease);
button.addEventListener("click", handleClick);
