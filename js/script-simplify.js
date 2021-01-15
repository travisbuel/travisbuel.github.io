function check() {
	// Set variables
	const valorMax = 2000;
	const valorLegend = 1800;
	var valorVal = parseInt(document.calc1.valor.value, 10);
	var multiplier = parseInt(document.calc1.multiplier.value, 10);

	var error = document.getElementById("error");
	var results = document.getElementById("results");
	var difference = document.getElementById("difference");
	var percentage = document.getElementById("percentage");
	var percentage2 = document.getElementById("progress-bar-valor-percent");
	var resultHigh = document.getElementById("result-high");
	var resultLow = document.getElementById("result-low");
	var resultAvg = document.getElementById("result-average");
	var legendLow = document.getElementById("legend-low");
	var legendHigh = document.getElementById("legend-high");
	var legendAvg = document.getElementById("legend-average");

	// Check for errors

	if (
		valorVal >= 2000 ||
		typeof valorVal !== "number" ||
		Number.isNaN(valorVal)
	) {
		error.style.display = "";
		results.style.display = "none";

		console.log("oh fuqq something broke");
	} else {
		difference.innerHTML = Math.round(valorMax - valorVal) + " valor";
		percentage.innerHTML = Math.round(valorVal / 20) + "%";
		percentage2.style.width = Math.round(valorVal / 20) + "%";
		resultHigh.innerHTML = Math.round((valorMax - valorVal) / multiplier);
		resultLow.innerHTML = Math.round((valorMax - valorVal) / multiplier / 4);
		resultAvg.innerHTML = Math.round(
			Math.round(
				Math.round((valorMax - valorVal) / multiplier) +
					Math.round((valorMax - valorVal) / multiplier / 4)
			) / 2
		);

		legendLow.innerHTML = Math.round((valorLegend - valorVal) / multiplier / 4);
		legendHigh.innerHTML = Math.round((valorLegend - valorVal) / multiplier);

		legendAvg.innerHTML = Math.round(
			Math.round(
				Math.round((valorLegend - valorVal) / multiplier) +
					Math.round((valorLegend - valorVal) / multiplier / 4)
			) / 2
		);

		results.style.display = "";
		error.style.display = "none";

		console.log("all good");
	}
}

const toggleSwitch = document.querySelector(
	'.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
	document.documentElement.setAttribute("data-theme", currentTheme);

	if (currentTheme === "dark") {
		toggleSwitch.checked = true;
	}
}

function switchTheme(e) {
	if (e.target.checked) {
		document.documentElement.setAttribute("data-theme", "dark");
		localStorage.setItem("theme", "dark");
	} else {
		document.documentElement.setAttribute("data-theme", "light");
		localStorage.setItem("theme", "light");
	}
}

toggleSwitch.addEventListener("change", switchTheme, false);

function halpToggle() {
	var halpBtn = document.getElementById("halp");
	if (halpBtn.checked == true) {
		document.getElementById("halptext").style.display = "";
	} else {
		document.getElementById("halptext").style.display = "none";
	}
}
