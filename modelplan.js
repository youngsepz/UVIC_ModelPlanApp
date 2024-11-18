const checkmark = document.querySelectorAll(".checkmark-fall-1");

const course = document.querySelectorAll(".course");

const app = document.querySelector("body");


app.onload = function restoreSession(){

    for (let i = 0; i < checkmark.length; i++) {

        checkmark[i].innerHTML = localStorage.getItem(i);

        if (checkmark[i].innerHTML == "✔") {

            course[i].style.textDecoration = "line-through"

            course[i].style.textDecorationThickness = "2px"

        }

    }

}


for (let i=0; i < checkmark.length; i++) {

    checkmark[i].addEventListener("click", () => {

        

        if (checkmark[i].innerHTML != "✔") {

            checkmark[i].innerHTML = "✔"

            course[i].style.textDecoration = "line-through";

            course[i].style.textDecorationThickness = "2px";

            localStorage.setItem(i, checkmark[i].innerHTML);

        }

        else {

            checkmark[i].innerHTML = ""

            course[i].style.textDecoration = ""

            localStorage.setItem(i, "")

        }

    })

}