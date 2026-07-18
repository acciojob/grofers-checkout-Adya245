const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
    const prices = document.getElementsByClassName("price");

    let sum = 0;

    for (let price of prices) {
        sum += Number(price.textContent);
    }

    const totalRow = document.getElementById("total");

    // Remove old total value if it exists
    if (totalRow.children.length > 1) {
        totalRow.removeChild(totalRow.lastElementChild);
    }

    const td = document.createElement("td");
    td.textContent = sum;

    totalRow.appendChild(td);
};

getSumBtn.addEventListener("click", getSum);