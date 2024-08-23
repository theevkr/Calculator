var buttons = document.getElementById("buttons");
var li = buttons.querySelectorAll("li");
var result = document.getElementById("result");


for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function () {

        if (this.innerHTML == "=") {

            result.innerHTML = eval(result.innerHTML);
                // .toFixed(5);
        } else {
            if (this.innerHTML == "/") {
                result.innerHTML += "/";
            }else if (this.innerHTML == 'AC') {
                result.innerHTML = "";
            }
            else if (this.innerHTML == 'C') {
                result.innerHTML =result.innerHTML.slice(0,-1);
            }
            else if (this.innerHTML == '%') {
                result.innerHTML =result.innerHTML/100;
            }
            else {
                result.innerHTML += this.innerHTML;
            }
        }

    });
}