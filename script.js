function createRandomPromise(promiseName) {
  return new Promise((resolve) => {
    const randomTime = Math.random() * 2 + 1; 
    setTimeout(() => {
      resolve({ promiseName, timeTaken: randomTime.toFixed(3) });
    }, randomTime * 1000);
  });
}

const output = document.getElementById("output");

const promise1 = createRandomPromise("Promise 1");
const promise2 = createRandomPromise("Promise 2");
const promise3 = createRandomPromise("Promise 3");

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    output.innerHTML = "";

    let totalTime = 0;

    results.forEach((result, index) => {
      totalTime += parseFloat(result.timeTaken); 
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${result.promiseName}</td>
        <td>${result.timeTaken}</td>
      `;
      output.appendChild(row);
    });

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
