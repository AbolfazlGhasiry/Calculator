function add(n) {
    document.getElementById("calcInput").value += n;
}
function clean() {
    document.getElementById("calcInput").value = "";
}

function cleanback() {
    document.getElementById("calcInput").value = document.getElementById("calcInput").value.slice(0, -1); // حذف آخرین رقم
}
document.querySelector(".clean").onclick = clean;
document.querySelector(".cleanback").onclick = cleanback;
let n1 = null;
let operator = null;
function hesab(amalgar) {
    switch (amalgar) {
        case "sin":
            document.getElementById("calcInput").value = Math.sin(Number(document.getElementById("calcInput").value));
            break;
        case "cos":
            document.getElementById("calcInput").value = Math.cos(Number(document.getElementById("calcInput").value));
            break;
        case "tan":
            document.getElementById("calcInput").value = Math.tan(Number(document.getElementById("calcInput").value));
            break;
        case "log":
            document.getElementById("calcInput").value = Math.log(Number(document.getElementById("calcInput").value));
            break;
        case "jazr":
            document.getElementById("calcInput").value = Math.sqrt(Number(document.getElementById("calcInput").value));
            break;
        case "tavan":
            n1 = Number(document.getElementById("calcInput").value);
            document.getElementById("history").innerHTML = n1 + "^";
            operator = amalgar;
            clean();
            break;
        case "/":
            n1 = Number(document.getElementById("calcInput").value);
            document.getElementById("history").innerHTML = n1 + "/";
            operator = amalgar;
            clean();
            break;
        case "*":
            n1 = Number(document.getElementById("calcInput").value);
            document.getElementById("history").innerHTML = n1 + "*";
            operator = amalgar;
            clean();
            break;
        case "-":
            n1 = Number(document.getElementById("calcInput").value);
            document.getElementById("history").innerHTML = n1 + "-";
            operator = amalgar;
            clean();
            break;
        case "+":
            n1 = Number(document.getElementById("calcInput").value);
            document.getElementById("history").innerHTML = n1 + "+";
            operator = amalgar;
            clean();
            break;
        case ".":
            document.getElementById("calcInput").value += ".";
            break;
        case "hiscle":
            document.getElementById("history").innerHTML = "";
            break;
        case "m2":
            document.getElementById("calcInput").value = parseInt(document.getElementById("calcInput").value, 10).toString(2);
            break;
        case "m8":
            document.getElementById("calcInput").value = parseInt(document.getElementById("calcInput").value, 10).toString(8);
            break;
        case "m10":
            document.getElementById("calcInput").value = parseInt(document.getElementById("calcInput").value, 2).toString(10);
            break;
        case "m16":
            document.getElementById("calcInput").value = parseInt(document.getElementById("calcInput").value, 10).toString(16).toUpperCase();
            break;
        case "=":
            let n2 = document.getElementById("calcInput").value;
            switch (operator) {
                case "tavan":
                    document.getElementById("calcInput").value = Math.pow(n1, n2);
                    document.getElementById("history").innerHTML = n1 + "/" + n2 + "=" + document.getElementById("calcInput").value;
                    break;
                case "/":
                    if (document.getElementById("calcInput").value != 0) {
                        document.getElementById("calcInput").value = Number(n1 / Number(document.getElementById("calcInput").value));
                        document.getElementById("history").innerHTML = n1 + "/" + n2 + "=" + document.getElementById("calcInput").value;
                    } else {
                        document.getElementById("calcInput").value = "can't divide to zero";
                    }
                    break;
                case "*":
                    document.getElementById("calcInput").value = Number(n1 * Number(document.getElementById("calcInput").value));
                    document.getElementById("history").innerHTML = n1 + "*" + n2 + "=" + document.getElementById("calcInput").value;
                    break;
                case "-":
                    document.getElementById("calcInput").value = Number(n1 - Number(document.getElementById("calcInput").value));
                    document.getElementById("history").innerHTML = n1 + "-" + n2 + "=" + document.getElementById("calcInput").value;
                    break;
                case "+":
                    document.getElementById("calcInput").value = Number(n1 + Number(document.getElementById("calcInput").value));
                    document.getElementById("history").innerHTML = n1 + "+" + n2 + "=" + document.getElementById("calcInput").value;
                    break;
            }
    }
}
