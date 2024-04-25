const digits = document.querySelectorAll(".button.digit button");
const content = document.querySelector(".row.one");
const AC = document.querySelector(".button.AC button");
const buttonDelete = document.querySelector(".button.delete button");
const point = document.querySelector(".button.point button");
const zero = document.querySelector(".button.zero button");
digits.forEach(digit => {
    digit.addEventListener("click", () => {
        if ("Barbie calculator".includes(content.textContent)) {
            content.textContent = "";
        }
        content.style.fontSize = "48px";
        content.style.justifyContent = "flex-end";
        content.textContent += digit.textContent;
    })
})

AC.addEventListener("click", function() {
    content.textContent = "Barbie calculator";
    content.style.justifyContent = "center";
    content.style.fontSize = "32px";
})

buttonDelete.addEventListener("click", () => {
    if (content.textContent.length === 1) {
        content.textContent = "Barbie calculator";
        content.style.justifyContent = "center";
        content.style.fontSize = "32px";
    }
    else {
        content.textContent = content.textContent.slice(0, content.textContent.length - 1);
    }
})

point.addEventListener("click", () => {
    content.style.fontSize = "48px";
    content.style.justifyContent = "flex-end";
    content.textContent += point.textContent;
})

/* 
1) 0.* - is okey but 01 is not okey;
*/
