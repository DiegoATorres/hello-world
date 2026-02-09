document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("btnTime");
  const output = document.getElementById("output");

  if (!button || !output) {
    console.error("Missing #btnTime or #output in HTML");
    return;
  }

  button.addEventListener("click", async () => {
    output.textContent = "Loading...";

    try {
      const response = await fetch("/api/time");

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      output.textContent = JSON.stringify(data, null, 2);
    } catch (err) {
      output.textContent = `Error: ${err.message}`;
    }
  });
});


