window.onload = function () {
  const outputElement = document.getElementById("output");

  const loadingRow = document.createElement("tr");
  const loadingCell = document.createElement("td");
  loadingCell.setAttribute("colspan", "2");
  loadingCell.textContent = "Loading...";
  loadingRow.appendChild(loadingCell);
  outputElement.appendChild(loadingRow);

  const startTime = Date.now();

  function createPromise(i) {
    const delay = Math.floor(Math.random() * 2000) + 1000; // Between 1 and 3 seconds
    const promiseStartTime = Date.now();

    return new Promise((resolve) => {
      setTimeout(() => {
        const timeTaken = (Date.now() - promiseStartTime) / 1000; // In seconds
        resolve({ name: "Promise " + i, timeTaken: timeTaken.toFixed(3) });
      }, delay);
    });
  }

  const promises = [];
  for (let i = 1; i <= 3; i++) {
    promises.push(createPromise(i));
  }

  Promise.all(promises).then((results) => {
    const endTime = Date.now();
    const totalTime = (endTime - startTime) / 1000; // In seconds

    outputElement.removeChild(loadingRow);

    results.sort((a, b) => a.name.localeCompare(b.name));

    results.forEach((result) => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = result.name;
      row.appendChild(nameCell);

      const timeCell = document.createElement("td");
      timeCell.textContent = result.timeTaken;
      row.appendChild(timeCell);

      outputElement.appendChild(row);
    });

    const totalRow = document.createElement("tr");

    const totalNameCell = document.createElement("td");
    totalNameCell.textContent = "Total";
    totalRow.appendChild(totalNameCell);

    const totalTimeCell = document.createElement("td");
    totalTimeCell.textContent = totalTime.toFixed(3);
    totalRow.appendChild(totalTimeCell);

    outputElement.appendChild(totalRow);
  });
};