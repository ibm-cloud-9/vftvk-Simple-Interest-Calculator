
let sliderRate = null;
let displayRate = null;

window.onload = function() {

      sliderRate = document.getElementById("slider-rate");
      displayRate = document.getElementById("display-rate");
      sliderRate.value = 3.5;
	  displayRate.innerHTML = parseFloat(sliderRate.value).toFixed(1) + "%";

      sliderRate.oninput = function() {
          displayRate.innerHTML = parseFloat(sliderRate.value).toFixed(1) + "%";
      }

      resetResult();
};


function validateInput()
{
   let principalValue = document.getElementById("principal").value;

   if(isNaN(principalValue))
   {
      return false;
   }

   computeInterest();

   return true;
}

function resetResult() {
	document.getElementById("result-principal").innerHTML = "";
	document.getElementById("result-rate").innerHTML = "";
	document.getElementById("result-interest").innerHTML = "";
	document.getElementById("result-year").innerHTML = "";
	document.getElementById("result-block").style.display = "none";
}

function computeInterest()
{
    let principal = document.getElementById("principal").value;

    let rate = sliderRate.value;

    let term = document.getElementById("years").value;

    let interest = principal * (rate / 100) * term;

	let resultBlock = document.getElementById("result-block");

    let currentDate = new Date();

    let decimalPlaces = 2;

	if (interest >= 1 || interest == 0) {
		decimalPlaces = 0;
	}

	document.getElementById("result-principal").innerHTML = principal;
	document.getElementById("result-rate").innerHTML = rate;

	if (interest >= 1 && interest == 0) {
		decimalPlaces = 0;
	}

	document.getElementById("result-interest").innerHTML = interest.toFixed(decimalPlaces);
	document.getElementById("result-year").innerHTML = currentDate.getFullYear() + parseInt(term);

	if (resultBlock.style.display === "none") {
		resultBlock.style.display = "block";
	}

}
