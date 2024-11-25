window.onload = function () {
  const outputElement = document.getElementById("output");
  const loadingRow = document.createElement("tr");
  (link unavailable) = "loading"; 
  const loadingCell = document.createElement("td");
  loadingCell.setAttribute("colspan", "2");
  loadingCell.textContent = "Loading...";
  loadingRow.appendChild(loadingCell);
  outputElement.appendChild(loadingRow);