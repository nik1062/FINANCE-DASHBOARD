# FinVault — Finance Dashboard

A modern, responsive Finance Dashboard built with React (JavaScript), Tailwind-inspired custom CSS, and Recharts.

---

## 📁 Project Structure

```
finance-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── index.js                          # React entry point
│   ├── App.js                            # Root layout + page router
│   ├── App.css                           # Shell layout styles
│   │
│   ├── context/
│   │   └── AppContext.js                 # Global state (transactions, role, dark mode)
│   │
│   ├── data/
│   │   └── mockData.js                   # Mock transactions, trend data, category colors
│   │
│   ├── utils/
│   │   └── helpers.js                    # formatCurrency, getTotalIncome, localStorage
│   │
│   ├── styles/
│   │   └── global.css                    # CSS variables, resets, shared utility classes
│   │
│   └── components/
│       ├── Layout/
│       │   ├── Sidebar.js / Sidebar.css  # Left navigation sidebar
│       │   └── Topbar.js / Topbar.css   # Top navbar with search + role switcher
│       │
│       ├── shared/
│       │   ├── SummaryCard.js / .css     # KPI card (balance, income, expenses)
│       │   └── ChartTooltip.js           # Reusable dark-theme chart tooltip
│       │
│       ├── Dashboard/
│       │   ├── index.js                  # Dashboard page
│       │   ├── Dashboard.css
│       │   ├── BalanceTrendChart.js/.css # 6-month line chart
│       │   ├── SpendingDonutChart.js/.css# Category donut chart
│       │   └── RecentTransactions.js/.css# Last 5 transactions
│       │
│       ├── Transactions/
│       │   ├── index.js                  # Transactions page
│       │   ├── Transactions.css
│       │   ├── TransactionFilters.js/.css# Search + filter pills
│       │   ├── TransactionTable.js/.css  # Sortable table
│       │   └── AddTransactionModal.js/.css# Add transaction modal
│       │
│       ├── Insights/
│       │   ├── index.js                  # Insights page
│       │   ├── Insights.css
│       │   ├── InsightCard.js/.css       # KPI insight card with progress bar
│       │   ├── MonthlyComparisonChart.js/.css # Bar chart
│       │   └── CategoryBreakdown.js/.css # Ranked category bars
│       │
│       └── Settings/
│           ├── index.js                  # Settings page
│           └── Settings.css
│
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16 or higher
- npm v8 or higher

### Installation

```bash
# 1. Navigate into the project
cd finance-dashboard

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app opens at **http://localhost:3000**

### Production Build

```bash
npm run build
```

---

## ✨ Features

### Dashboard
- 3 summary KPI cards — Total Balance, Income, Expenses
- 6-month balance trend line chart
- Spending breakdown donut chart with category legend
- Recent transactions list

### Transactions
- Searchable by name, category, or amount
- Filter by All / Income / Expenses
- Sort by Date or Amount (ascending/descending)
- Empty state when no results found
- **Admin**: Add new transactions via modal
- **Admin**: Delete any transaction

### Insights
- Highest spending category
- Total savings + savings rate progress bar
- Month-over-month (Mar vs Feb) comparison
- Income vs Expenses ratio
- Monthly grouped bar chart
- Full category breakdown with ranked progress bars

### Settings
- Dark / Light mode toggle (live)
- Email notification & budget alert toggles
- Currency and date format selectors
- LocalStorage persistence toggle

### Role-Based UI
- Switch between **Admin** and **Viewer** roles in the top navbar
- Admin: full access (add, delete, view)
- Viewer: read-only (no add/delete buttons shown)

---

## 🛠 Tech Stack

| Layer        | Technology              |
|-------------|-------------------------|
| UI Framework | React 18 (JavaScript)  |
| Styling      | Custom CSS (per-component files, CSS variables) |
| Charts       | Recharts 2.x           |
| State        | React Context API       |
| Persistence  | localStorage            |

---

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1",
  "recharts": "^2.12.7"
}
```

No Tailwind, no Redux, no TypeScript — pure React + JavaScript + CSS as required.
