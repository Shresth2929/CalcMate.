let string = "";
const buttons = document.querySelectorAll('.button');
const inputField = document.querySelector('input');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.innerHTML;
        if (buttonValue === 'C') {
            string = "";
            inputField.value = string;
        } else if (buttonValue === '=') {
            try {
                string = eval(string).toString();
                inputField.value = string;
            } catch {
                inputField.value = "Error";
                string = "";
            }
        } else if (buttonValue === '%') {
            string = (parseFloat(string) / 100).toString();
            inputField.value = string;
        } else {
            string += buttonValue;
            inputField.value = string;
                }
            });
        });