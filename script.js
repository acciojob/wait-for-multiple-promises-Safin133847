function createRandomPromise() {
  return new Promise((resolve) => {
    const randomTime = Math.random() * 2 + 1; 
    setTimeout(() => {
      resolve(randomTime.toFixed(3)); 
  });
}

const output = document.getElementById('output');
const loadingRow = document.createElement('tr');
loadingRow.innerHTML = `<td colspan="2" class="text-center">Loading...</td>`;
output.appendChild(loadingRow);

const promises = [
  createRandomPromise(),
  createRandomPromise(),
  createRandomPromise()
];

Promise.all(promises).then((results) => {
  output.removeChild(loadingRow);

  let totalTime = 0;
  results.forEach((time, index) => {
    totalTime += parseFloat(time);
    const row = document.createElement('tr');
    row.innerHTML = `<td>Promise ${index + 1}</td><td>${time}</td>`;
    output.appendChild(row);
  });

  const totalRow = document.createElement('tr');
  totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)}</td>`;
  output.appendChild(totalRow);
});
