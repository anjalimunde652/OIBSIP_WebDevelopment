function convertTemp() {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const unit = document.getElementById("unit").value;
  const result = document.getElementById("result");

  if (isNaN(temp)) {
    result.innerText = "Please enter a valid number 🌸";
    return;
  }

  let output = "";

  if (unit === "c") {
    output = `
      ${temp} °C = ${(temp * 9/5 + 32).toFixed(2)} °F  
      | ${(temp + 273.15).toFixed(2)} K
    `;
  } else if (unit === "f") {
    output = `
      ${temp} °F = ${((temp - 32) * 5/9).toFixed(2)} °C  
      | ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K
    `;
  } else {
    output = `
      ${temp} K = ${(temp - 273.15).toFixed(2)} °C  
      | ${(((temp - 273.15) * 9/5) + 32).toFixed(2)} °F
    `;
  }

  result.innerText = output;
}
