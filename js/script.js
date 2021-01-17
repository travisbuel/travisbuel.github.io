function check() {
	// Set variables
	const valorMax = 2000;
	const valorLegend = 1800;
	var valorVal = parseInt(document.calc1.valor.value, 10);
	var multiplier = parseInt(document.calc1.multiplier.value, 10);

	// Check for errors

	if (
		valorVal >= 2000 ||
		typeof valorVal !== "number" ||
		Number.isNaN(valorVal)
	) {
		document.getElementById("error").style.display = "";
		document.getElementById("results").style.display = "none";

		console.log("oh fuqq something broke");
	} else {
		document.getElementById("difference").innerHTML =
			Math.round(valorMax - valorVal) + " valor";
		document.getElementById("percentage").innerHTML =
			Math.round(valorVal / 20) + "%";
		document.getElementById("progress-bar-valor-percent").style.width =
			Math.round(valorVal / 20) + "%";
		document.getElementById("result-high").innerHTML = Math.round(
			(valorMax - valorVal) / multiplier
		);
		document.getElementById("result-low").innerHTML = Math.round(
			(valorMax - valorVal) / multiplier / 4
		);
		document.getElementById("result-average").innerHTML = Math.round(
			Math.round(
				Math.round((valorMax - valorVal) / multiplier) +
					Math.round((valorMax - valorVal) / multiplier / 4)
			) / 2
		);

		document.getElementById("legend-low").innerHTML = Math.round(
			(valorLegend - valorVal) / multiplier / 4
		);
		document.getElementById("legend-high").innerHTML = Math.round(
			(valorLegend - valorVal) / multiplier
		);

		document.getElementById("legend-average").innerHTML = Math.round(
			Math.round(
				Math.round((valorLegend - valorVal) / multiplier) +
					Math.round((valorLegend - valorVal) / multiplier / 4)
			) / 2
		);

		document.getElementById("results").style.display = "";
		document.getElementById("error").style.display = "none";

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
	var halpTxt = document.getElementById("halptext");
	if (halpBtn.checked == true) {
		halpTxt.style.display = "";
	} else {
		halpTxt.style.display = "none";
	}
}

function halpClose() {
	var closeBtn = document.getElementById("halp-close");
	var halpBtn = document.getElementById("halp");
	var halpTxt = document.getElementById("halptext");
	if (halpBtn.checked == true) {
		halpBtn.checked = false;
		halpTxt.style.display = "none";
	}
}
