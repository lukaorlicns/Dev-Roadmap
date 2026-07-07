const count_display = document.getElementById("counter");
const button_increase = document.getElementById("increase");
const button_decrease = document.getElementById("decrease");
const button_reset = document.getElementById("reset");

let value = 0;
function change(num) {
    if (num === 1) {
        value++;
        count_display.textContent = "1";
    } else if (num === -1) {
        value--;
    } else {
        value = 0;
    }
    count_display.textContent = value.toString();
}

button_increase.addEventListener("click", function () {
    change(1);
});

button_decrease.addEventListener("click", function () {
    change(-1);
});

button_reset.addEventListener("click", function () {
    change(0);
});