import { getTime, postEcho } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("btnTime");
  const output = document.getElementById("output");

  const btnPost = document.getElementById("btnPost");
  const msg = document.getElementById("msg");

  if (!button || !output) {
    console.error("Missing #btnTime or #output in HTML");
    return;
  }

  async function loadTime() {
    output.textContent = "Loading...";

    try {
      const data = await getTime();
      output.textContent = JSON.stringify(data, null, 2);
    } catch (err) {
      output.textContent = `Error: ${err.message}`;
    }
  }

   async function sendPost() {
      output.textContent = "Sending...";
      try {
        const data = await postEcho({ message: msg.value });
        output.textContent = JSON.stringify(data, null, 2);
        msg.value = "";
      } catch (err) {
        output.textContent = `Error: ${err.message}`;
      }
    }

  loadTime();                 // auto-load
  button.addEventListener("click", loadTime); // refresh
  btnPost.addEventListener("click", sendPost);
});


