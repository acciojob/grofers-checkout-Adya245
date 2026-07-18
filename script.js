const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const price = document.getElementsByClassName("price");
    let sum = 0;

    for (let i of price) {
        sum += Number(i.textContent);
    }

    const table = document.querySelector("table");

    // Remove previous total row if it exists
    const oldRow = document.getElementById("total-row");
    if (oldRow) {
        oldRow.remove();
    }

    const tr = document.createElement("tr");
    tr.id = "total-row";

    const td = document.createElement("td");
    td.colSpan = 2;
    td.textContent = sum;

    tr.appendChild(td);
    table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);