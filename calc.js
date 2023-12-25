
const calc_wrapper = document.getElementById("calculator-wrapper");
let display = document.querySelector(".display");


display.addEventListener("keydown", () => {
    if (!isNaN(display.value)) {
        return false
    }
})

let value_calc = "";

// const btn_lables = [
//     "AC",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "0",
//     ".",
//     "-",
//     "+",
//     "*",
//     "/",
//     "=" // evaluate
// ];

// btn_lables.forEach((label) => {
//     let btn = document.createElement("button");
//     btn.innerHTML = label;
//     btn.classList.add(label);


//     if (label == "=") {
//         btn.onclick = () => {
//             calculateResult();
//         };
//     } else if (label == "AC") {
//         btn.onclick = () => {
//             clearDisplay();
//         };
//     } else {
//         btn.onclick = () => {
//             appendToDisplay(label)
//         };
//     }
//     calc_wrapper.appendChild(btn);
// });

function appendToDisplay(value) {
    value_calc += value;
    updateresult();
}

function clearDisplay() {
    value_calc = "";
    updateresult();
}

function calculateResult() {
    try {
        const result = eval(value_calc);
        value_calc = result;
        updateresult();
    } catch (e){
        // display.value = "Error!";
        value_calc = "Error!";
        updateresult();
    }
}

function updateresult() {
    display.value = value_calc;
}
