const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let input = "";
function updateDisplay(value) {
    display.textContent = value;
}


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            input = "";
            updateDisplay("0");
            return;
        }

        if (value === "=") {
            try {
                input = eval(input);
                updateDisplay(input);
            } catch (error) {
                updateDisplay("Error");
                input = "";
            }
            return;
        }

        input += value;
        updateDisplay(input);
    });
});