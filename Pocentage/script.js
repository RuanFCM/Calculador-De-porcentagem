function calculate() {
    var percentage = document.getElementById("percentageInput").value;
    var value = document.getElementById("valueInput").value;
  
    if (percentage === "" || value === "") {
      alert("Please enter both percentage and value.");
      return;
    }
  
    var result = (percentage / 100) * value;
    displayResult(result);
  }
  
  function displayResult(result) {
    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "Result: " + result.toFixed(2);
  }
  