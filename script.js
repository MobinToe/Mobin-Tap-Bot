let count = 0;
const button = document.getElementById("clickButton");
const ring = document.getElementById("ring");
const counter = document.getElementById("counter");
const planetContainer = document.querySelector(".planet-container");

function handlePress() {
    button.style.transform = "translate(-50%, -50%) scale(0.9)";
    ring.style.transform = "translate(-50%, -50%) rotate(-15deg) scale(0.9)";
}

function handleRelease() {
    button.style.transform = "translate(-50%, -50%) scale(1)";
    ring.style.transform = "translate(-50%, -50%) rotate(-15deg) scale(1)";
}

function handleClick(event) {
    count++;
    counter.innerText = "MTC: " + count;

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

button.addEventListener("mousedown", handlePress);
button.addEventListener("mouseup", handleRelease);
button.addEventListener("touchstart", handlePress);
button.addEventListener("touchend", handleRelease);
button.addEventListener("click", handleClick);
