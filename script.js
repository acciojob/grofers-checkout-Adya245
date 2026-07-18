const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const price = document.getElementsByClassName("price")
	let sum = 0
	for(let i of price)
		{
			sum += Number(i.textContent)
		}

	const tr = document.createElement("tr");
	const td = document.createElement("td")
	
	td.colSpan = 2;
	td.textContent = sum;

	const table = document.querySelector("table");
	
	tr.appendChild(td);
	table.appendChild(tr);
  
};

getSumBtn.addEventListener("click", getSum);

