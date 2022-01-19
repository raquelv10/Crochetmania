document.addEventListener("DOMContentLoaded", () => {

    // Creamos el div contenedor, la tabla y las celdas:
    let div = document.getElementsByClassName("pre-loader")[0];
    let table = document.createElement("table");
    table.setAttribute("class", "tabla");

    div.appendChild(table);

    let j = 0
    for (let i = 0; i < 3; i++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);

        j = 0
        for (j = 0; j < 3; j++) {
            let td = document.createElement("td");
            tr.appendChild(td);

        }
    }
    for (let i = 0; i < 9; i++) {
        let td = document.getElementsByTagName("td")[i];
        td.classList.add(`celda${i}`);
    }

    let pre_loader = document.getElementsByClassName("pre-loader")[0];
    let burguer = document.querySelector("#burguer");
    let lupa = document.querySelector("#icon-search");
    setTimeout(function() {
        pre_loader.style.display = "none";
        burguer.style.display = "block";
        lupa.style.display = "block"
    }, 1800);

    
})