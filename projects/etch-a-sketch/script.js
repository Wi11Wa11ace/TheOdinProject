function drawGrid(squares) {
    const grid = document.querySelector(".container");

    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    for(let i = 0; i < squares; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", `row-${i}`);
        grid.appendChild(row);

        for(let j = 0; j < squares; j++) {
            const gridItem = document.createElement("div");
            gridItem.setAttribute("class", `${i}-${j}`);

            gridItem.addEventListener("mouseover", (event) => {
                const target = event.target;
                target.setAttribute("style", `background-color: rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255, 1.0)});`)
            });
            
            row.appendChild(gridItem);
        }
    }
}

function newGrid() {
    const squares = parseInt(prompt("How many rows/columns (maximum 100)?"));
    if(squares < 1 || squares > 100) {
        alert("Cannot create grid with number specified. Please try again.");
    }

    drawGrid(squares);
}

drawGrid(16);