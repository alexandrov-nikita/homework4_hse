function new_game(event) {
    var table = document.getElementById("id");
    while(table.rows.length > 0) { table.deleteRow(0); }
   
    var header = table.createTHead();
    for (i = 0; i < 20; ++i) {
        var row = header.insertRow();
        for (j = 0; j < 20; ++j) {
            var cell = row.insertCell();
            cell.style.height = '32px';
            cell.style.width = '32px';
        }
    }

    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++)
            table.rows[i].cells[j].onclick = function () { this.innerHTML = "X"; };
    }
}

function buttonCL() {    
    $("button").click(new_game);
}

$(document).ready(buttonCL);