const digits = document.querySelectorAll(".button.digit button");
const content = document.querySelector(".row.one");
digits.forEach(digit => {
    digit.addEventListener("click", () => {
        if (content.textContent === "Barbie calculator") {
            content.textContent = "";
        }
        content.style.fontSize = "48px";
        content.style.fontSize = "48px";
        content.style.justifyContent = "flex-end";
        content.textContent += digit.textContent;
    })
})