// api.js
export async function getTime() {
  const res = await fetch("/api/time");

  if (!res.ok) {
    let details = "";
    try {
      details = await res.text();
    } catch (_) {}

    throw new Error(`HTTP ${res.status} ${res.statusText}${details ? ` — ${details}` : ""}`);
  }

  return res.json();
}


export async function postEcho(payload) {
  const res = await fetch("/api/echo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    let details = "";
    try { details = await res.text(); } catch (_) {}
    throw new Error(`HTTP ${res.status} ${res.statusText}${details ? ` — ${details}` : ""}`);
  }

  return res.json();
}
