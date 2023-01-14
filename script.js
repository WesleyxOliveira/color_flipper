//Seleção de elementos
var body = document.getElementsByTagName("body")[0];
var btn = document.getElementsByTagName("button")[0];
var spn = document.getElementsByTagName("span")[0];

//Eventos
btn.addEventListener("click", clicou);

function changeColor() {
    let randomColor = "#" + `${Math.floor(Math.random() * 12345678).toString(16)}`;

    return randomColor;
}

function clicou() {
    body.style.backgroundColor = changeColor();
    spn.innerHTML = changeColor();
}

