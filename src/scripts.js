const listEl = document.getElementById("stats-list");
const btn = document.getElementById("load-btn");
const m_status = document.getElementById("status")

btn.addEventListener("click", async () => {
  try {
    btn.disabled = true;
    m_status.textContent = "Loading... "
    const res = await fetch("http://127.0.0.1:8000/stats", { method: "GET" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();

    listEl.innerHTML = "";
    for (const [k, v] of Object.entries(data)) {
      const li = document.createElement("li");
      li.textContent = `${k}: ${v}`;
      listEl.appendChild(li);
    }
    m_status.textContent = "Done."
  } catch (err) {
    m_status.textContent= "Error loading stats."
    console.error(err);
  }finally {
    btn.disabled = false;
  }
  
});
