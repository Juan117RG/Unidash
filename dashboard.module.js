import { getTasks, getTransactions } from "../services/storage.service.js"
import { isTaskOverdue } from "./tasks.model.js"

function money(value) {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(value)
}

export function renderDashboardVisual() {
  const mockTasks = getTasks(), mockTransactions = getTransactions()
  const income = mockTransactions.filter((x) => x.type === "income").reduce((a,b) => a+b.amount, 0)
  const expense = mockTransactions.filter((x) => x.type === "expense").reduce((a,b) => a+b.amount, 0)
  const pending = mockTasks.filter((x) => x.status !== "completed").length
  document.querySelector("#metric-balance").textContent = money(income - expense)
  document.querySelector("#metric-income").textContent = money(income)
  document.querySelector("#metric-expense").textContent = money(expense)
  document.querySelector("#metric-pending").textContent = pending
  document.querySelector("#metric-overdue").textContent = mockTasks.filter((task) => isTaskOverdue(task)).length
  document.querySelector("#analytics-total-tasks").textContent = mockTasks.length
  document.querySelector("#analytics-completed").textContent = mockTasks.filter((x) => x.status === "completed").length
  document.querySelector("#analytics-saving-rate").textContent = `${Math.round((income ? (income-expense)/income : 0)*100)}%`
  document.querySelector("#analytics-top-category").textContent = Object.entries(mockTransactions.filter((item) => item.type === "expense").reduce((acc, item) => { acc[item.category] = (acc[item.category] || 0) + item.amount; return acc }, {})).sort((a, b) => b[1] - a[1])[0]?.[0] || "Sin datos"
}
