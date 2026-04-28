# Expense Tracker

A React expense tracking app for recording income and expenses, filtering transactions, and viewing simple financial reports. The project uses a JSON API endpoint for persistence and presents the data through dashboard cards, transaction lists, category breakdowns, and a pie chart.

## Features

- Add, edit, and delete transactions
- Mark each transaction as `income` or `expense`
- Track title, amount, date, category, and transaction type
- Dashboard summary for balance, income, and expenses
- Search transactions by title
- Filter transactions by category
- Reports page with summary cards
- Pie chart for category totals
- Category breakdown with progress bars
- Client-side routing for dashboard, form, edit, and reports pages

## Tech Stack

- React 19
- Vite
- React Router
- Axios
- Sass / SCSS
- Chart.js and react-chartjs-2
- lucide-react icons
- JSON-server style API

## Project Structure

```txt
src/
  components/
    CategoryBreakDown.jsx
    DashboardHeader.jsx
    ExpenseForm.jsx
    ExpenseItem.jsx
    ExpenseList.jsx
    ExpensePieChart.jsx
    Navbar.jsx
    ReportCards.jsx
    SummaryCards.jsx
    TransactionControls.jsx
  context/
    ExpenseContext.jsx
  pages/
    DashBoard.jsx
    ExpenseFormPage.jsx
    ReportsPage.jsx
  services/
    api.js
  styles/
    *.scss
  App.jsx
  main.jsx
```

## Routes

| Route               | Purpose                                                     |
| ------------------- | ----------------------------------------------------------- |
| `/`                 | Dashboard with summary cards, filters, and transaction list |
| `/add-expense`      | Add a new transaction                                       |
| `/edit-expense/:id` | Edit an existing transaction                                |
| `/reports`          | View report cards, pie chart, and category breakdown        |

## Getting Started

Install dependencies:

```bash
npm install
```

Start the React app:

```bash
npm run dev
```

The frontend runs with Vite. By default, Vite prints the local URL in the terminal, usually:

```txt
http://localhost:5173
```

## Backend / API

The app uses Axios from `src/services/api.js` and expects the API base URL to be:

```txt
http://localhost:3000
```

The expected resource is:

```txt
/expenses
```

The local `db.json` file is structured for a JSON-server style backend:

```json
{
  "expenses": []
}
```

If you are using JSON Server, run it on port `3000`:

```bash
npx json-server db.json --port 3000
```

Then run the React app in a second terminal:

```bash
npm run dev
```

## Expense Data Shape

Each transaction should look like this:

```json
{
  "id": "abc123",
  "title": "Groceries",
  "amount": 500,
  "category": "Food",
  "date": "2026-04-28",
  "type": "expense"
}
```

Supported categories in the current UI:

- Food
- Transport
- Shopping
- Bills
- Entertainment

Supported transaction types:

- income
- expense

## Available Scripts

Run the development server:

```bash
npm run dev
```

Build the app:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

Preview the production build:

```bash
npm run preview
```

## Current Scan Notes

These are the main issues found during the codebase scan:

- `npm run lint` currently fails.
- `DashboardHeader.jsx` accepts `onRefresh`, but does not use it.
- `DashBoard.jsx` creates `navigate`, but does not use it.
- `ExpenseForm.jsx` calls `setFormData` inside `useEffect`, which is flagged by the React hooks lint rules.
- `ExpenseContext.jsx` exports both the context and provider component from the same file, which is flagged by React Fast Refresh lint rules.
- `ExpenseContext.jsx` calls `fetchExpenses()` inside `useEffect`, which is also flagged by the React hooks lint rules.
- The reports page imports `CategoryBreakdown`, while the file is named `CategoryBreakDown.jsx`. This can break on case-sensitive systems.
- The SCSS import uses `CategoryBreakdown.scss`, while the file is named `CategoryBreakDown.scss`. This can also break on case-sensitive systems.
- `json-server` is not listed in `package.json`, so the API server must be started with `npx` or added as a dependency/script.

## Notes

The app depends on the backend being available at `http://localhost:3000`. If the dashboard shows loading errors or transactions do not save, start the JSON API server first and confirm that `http://localhost:3000/expenses` returns an array.
