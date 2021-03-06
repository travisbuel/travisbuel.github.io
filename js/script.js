function check() {
	// Set variables
	const valorBrave = 50;
	const valorHeroic = 350;
	const valorFabled = 700;
	const valorMythic = 1150;
	const valorLegend = 1800;
	const valorMax = 2000;
	var valorVal = parseInt(document.calc1.valor.value, 10);
	var multiplier = parseInt(document.calc1.multiplier.value, 10);
	var resultsDescription =
		"On the low end, this assumes you win nearly every single match to maintain a constant 5-win streak. On the high end, you lose literally every single match you play. The average... is complicated. Because of win streaks, the math goes out the window. This number assumes you start without a streak, win the first match, lose the next, and repeat that loop. If you manage to get a real win streak going and can maintain it, this 'average' will obviously be lower.";
	// Check for errors

	if (
		valorVal >= valorMax ||
		typeof valorVal !== "number" ||
		Number.isNaN(valorVal)
	) {
		document.getElementById("results").style.display = "none";
		//reset Valor field on submit but leave multiplier
		document.getElementById("valor").value = "";
		alert("Input your Valor, 4head.\n\n• Numbers only\n• No commas\n• 0-1999");
		console.log("oh fuqq something broke");
	} else {
		document.getElementById("difference").innerHTML =
			Math.round(valorMax - valorVal) + " Valor";
		if (valorVal > 1980) {
			document.getElementById("percentage").innerHTML = "99%";
			document.getElementById("progress-bar-valor-percent").style.width = "99%";
			document.getElementById("result-high").innerHTML = "";
			document.getElementById("result-low").innerHTML = "";
			document.getElementById("results-pre").innerHTML = "just need...";
			document.getElementById("result-average").innerHTML = "ONE MORE MATCH";
			document.getElementById("results-description").innerHTML = "Leggo.";
		} else {
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
			document.getElementById("result-average").innerHTML =
				Math.round(
					Math.round(
						Math.round((valorMax - valorVal) / multiplier) +
							Math.round((valorMax - valorVal) / multiplier / 4)
					) / 2
				) + " MATCHES";
			document.getElementById("results-pre").innerHTML =
				"still need something like...";
			document.getElementById(
				"results-description"
			).innerHTML = resultsDescription;
		}

		if (valorVal == valorMax) {
			document.getElementById("reward-brave").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-heroic").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-fabled").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-mythic").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-legend").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-max").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-reset").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-text").innerHTML =
				"You're ready for a reset!";
		} else if (valorMax > valorVal && valorVal >= 1981) {
			document.getElementById("reward-brave").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-heroic").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-fabled").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-mythic").style.filter =
				"saturate(0)  opacity(50%)";
			document.getElementById("reward-legend").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-max").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-reset").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-text").innerHTML =
				"You'll get your next reward at<br><em>Max Valor (" +
				valorMax +
				")</em><br>which you will reach in<br><em>your next match!</em>";
		} else if (1981 > valorVal && valorVal >= valorLegend) {
			document.getElementById("reward-brave").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-heroic").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-fabled").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-mythic").style.filter =
				"saturate(0)  opacity(50%)";
			document.getElementById("reward-legend").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-max").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-reset").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-text").innerHTML =
				"You'll get your next reward at<br><em>Max Valor (" +
				valorMax +
				")</em><br>which you will reach in about<br><em>" +
				Math.round(
					Math.round(
						Math.round((valorMax - valorVal) / multiplier) +
							Math.round((valorMax - valorVal) / multiplier / 4)
					) / 2
				) +
				" Matches</em>";
		} else if (valorLegend > valorVal && valorVal >= valorMythic) {
			document.getElementById("reward-brave").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-heroic").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-fabled").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-mythic").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-legend").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-max").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-reset").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-text").innerHTML =
				"You'll get your next reward at<br><em>Legend (" +
				valorLegend +
				" Valor)</em><br>which you will reach in about<br><em>" +
				Math.round(
					Math.round(
						Math.round((valorLegend - valorVal) / multiplier) +
							Math.round((valorLegend - valorVal) / multiplier / 4)
					) / 2
				) +
				" Matches</em>";
		} else if (valorMythic > valorVal && valorVal >= valorFabled) {
			document.getElementById("reward-brave").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-heroic").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-fabled").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-mythic").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-legend").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-max").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-reset").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-text").innerHTML =
				"You'll get your next reward at<br><em>Mythic (" +
				valorMythic +
				" Valor)</em><br>which you will reach in about<br><em>" +
				Math.round(
					Math.round(
						Math.round((valorMythic - valorVal) / multiplier) +
							Math.round((valorMythic - valorVal) / multiplier / 4)
					) / 2
				) +
				" Matches</em>";
		} else if (valorFabled > valorVal && valorVal >= valorHeroic) {
			document.getElementById("reward-brave").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-heroic").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-fabled").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-mythic").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-legend").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-max").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-reset").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-text").innerHTML =
				"You'll get your next reward at<br><em>Fabled (" +
				valorFabled +
				" Valor)</em><br>which you will reach in about<br><em>" +
				Math.round(
					Math.round(
						Math.round((valorFabled - valorVal) / multiplier) +
							Math.round((valorFabled - valorVal) / multiplier / 4)
					) / 2
				) +
				" Matches</em>";
		} else if (valorHeroic > valorVal && valorVal >= valorBrave) {
			document.getElementById("reward-brave").style.filter =
				"saturate(0) opacity(50%)";
			document.getElementById("reward-heroic").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-fabled").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-mythic").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-legend").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-max").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-reset").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-text").innerHTML =
				"You'll get your next reward at<br><em>Heroic (" +
				valorHeroic +
				" Valor)</em><br>which you will reach in about<br><em>" +
				Math.round(
					Math.round(
						Math.round((valorHeroic - valorVal) / multiplier) +
							Math.round((valorHeroic - valorVal) / multiplier / 4)
					) / 2
				) +
				" Matches</em>";
		} else if (valorBrave > valorVal && valorVal >= 0) {
			document.getElementById("reward-brave").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-heroic").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-fabled").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-mythic").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-legend").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-max").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-reset").style.filter =
				"saturate(1) opacity(100%)";
			document.getElementById("reward-text").innerHTML =
				"You'll get your next reward at<br><em>Brave (" +
				valorBrave +
				" Valor)</em><br>which you will reach in about<br><em>" +
				Math.round(
					Math.round(
						Math.round((valorBrave - valorVal) / multiplier) +
							Math.round((valorBrave - valorVal) / multiplier / 4)
					) / 2
				) +
				" Matches</em>";
		}
		console.log("all good");
		document.getElementById("results").style.display = "";

		//reset Valor field on submit but leave multiplier
		document.getElementById("valor").value = "";
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
