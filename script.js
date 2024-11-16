// Function to simulate a promise that resolves after a random time between 1 and 3 seconds
function createRandomPromise(promiseName) {
  return new Promise((resolve) => {
    const randomTime = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
    setTimeout(() => {
      resolve({ promiseName, timeTaken: randomTime.toFixed(3) });
    }, randomTime * 1000);
  });
}

// Start loading process by showing "Loading..." message
const output = document.getElementById("output");

// Remove the "Loading..." row immediately to avoid extra rows.
const loadingRow = document.getElementById("loading");
if (loadingRow) {
  loadingRow.remove(); // Remove the "Loading..." row from the table immediately.
}

// Create three promises
const promise1 = createRandomPromise("Promise 1");
const promise2 = createRandomPromise("Promise 2");
const promise3 = createRandomPromise("Promise 3");

// Use Promise.all to wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    let totalTime = 0;

    // Add rows for each promise
    results.forEach((result) => {
      totalTime += parseFloat(result.timeTaken); // Accumulate the total time
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${result.promiseName}</td>
        <td>${result.timeTaken}</td>
      `;
      output.appendChild(row);
    });

    // Add row for total time
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
      <td>Total</td>
      <td>${totalTime.toFixed(3)}</td>
    `;
    output.appendChild(totalRow);
  })
  .catch((error) => {
    console.error("Error with promises:", error);
  });
