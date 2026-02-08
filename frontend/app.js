const button = document.getElementById("btnTime");
const output = document.getElementById("output");

button.addEventListener("click", async () => {
  output.textContent = "Loading...";

  try {
    const response = await fetch("/api/time");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    output.textContent = `Error loading data: ${error.message}`;
  }
});
