import { getTransactions } from "../services/storage.service.js"

function money(value) {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(value)
}

export function renderFinanceVisual() {
  const mockTransactions = getTransactions()
  const list = document.querySelector("#transaction-list")
  list.innerHTML = mockTransactions.map((item) => `
    <article class="list-item">
      <div class="list-item-main"><p class="list-item-title">${item.description}</p><p class="list-item-meta">${item.category} · ${item.date}</p></div>
      <strong class="${item.type === "income" ? "text-emerald-400" : "text-rose-400"}">${item.type === "income" ? "+" : "-"}${money(item.amount)}</strong>
    </article>`).join("")
}

export function initFinanceVisualDemo() {
  renderFinanceVisual()
  document.querySelector("#transaction-form")?.addEventListener("submit", (event) => {
    event.preventDefault()
    alert("Este módulo conserva la demostración visual de finanzas. El guardado implementado en esta clase corresponde a Tareas.")
  })
}
