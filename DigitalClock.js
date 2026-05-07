function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // 12-hour format
  let ampm = hours < 12 ? "AM" : "PM";
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 → 12

  // Add leading zeros
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Format the time
  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

  // Display in DOM
  document.getElementById("clock").textContent = timeString;
}

// Update every second
setInterval(updateClock, 1000);
updateClock(); // Run once immediately