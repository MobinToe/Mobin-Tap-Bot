let count = 0;
const button = document.getElementById("clickButton");
const ring = document.getElementById("ring");
const counter = document.getElementById("counter");
const planetContainer = document.querySelector(".planet-container");
const communityBox = document.getElementById("communityBox");

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
    count++;
    counter.innerText = "Your MTC = " + count;

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

// باز کردن لینک تلگرام هنگام کلیک روی دکمه
communityBox.addEventListener("click", function() {
    window.open("https://t.me/MobinTapChannel", "_blank");
});

button.addEventListener("mousedown", handlePress);
button.addEventListener("mouseup", handleRelease);
button.addEventListener("touchstart", handlePress);
button.addEventListener("touchend", handleRelease);
button.addEventListener("click", handleClick);
