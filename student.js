let student = [
    {name : "Rishu", marks: [70, 75, 80, 73]},
    { name: "Rohan", marks: [85, 92, 78, 90] },
  { name: "Simran", marks: [95, 88, 91, 85] },
  { name: "Aman", marks: [70, 75, 68, 80] }
]
function getAverage(marks) {
    let total = marks.reduce((sum, m) =>    sum + m, 0);
    return (total / marks.length).toFixed(2); //toFixed(2) for 2 decimal places eg 75.5754 = 75.57
}
function getHighest(marks) {
    return Math.max(...marks); //spread operator gives max value
}
function getLowest(marks) {
    return Math.min(...marks); //min value
}

// student.forEach(student => {
//   console.log(`\nReport for ${student.name}`);
//   console.log("Marks:", student.marks.join(", "));
//   console.log("Average:", getAverage(student.marks));
//   console.log("Highest:", getHighest(student.marks));
//   console.log("Lowest:", getLowest(student.marks));
// });
function showReports() {
  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = ""; // clear previous reports

  student.forEach(student => {
    outputDiv.innerHTML += `
    <div>
      <h3>${student.name}</h3>
      <ul>
        <li>Marks: ${student.marks.join(", ")}</li>
        <li>Average: ${getAverage(student.marks)}</li>
        <li>Highest: ${getHighest(student.marks)}</li>
        <li>Lowest: ${getLowest(student.marks)}</li>
      </ul>
    </div>
    `;
  });
}