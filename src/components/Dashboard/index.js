import React from 'react';
import { useApp } from '../../context/AppContext';
import SummaryCard from '../shared/SummaryCard';
import BalanceTrendChart from './BalanceTrendChart';
import SpendingDonutChart from './SpendingDonutChart';
import RecentTransactions from './RecentTransactions';
import { formatCurrencyFull, getTotalIncome, getTotalExpenses } from '../../utils/helpers';
import './Dashboard.css';

// ─── Dashboard Page ───────────────────────────────────────────────────────────
export default function Dashboard() {
  const { transactions } = useApp();

  const income   = getTotalIncome(transactions);
  const expenses = getTotalExpenses(transactions);
  const balance  = income - expenses + 12340; // seed base balance

  return (
    <div className="dashboard">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Good morning, John 👋</h1>
        <p className="page-sub">Here's your financial overview — March 2025</p>
      </div>

      {/* Summary Cards */}
      <div className="dashboard__cards">
        <SummaryCard
          label="Total Balance"
          value={formatCurrencyFull(balance)}
          icon="◈"
          color="blue"
          change="▲ 12.4%"
          changeType="up"
        />
        <SummaryCard
          label="Total Income"
          value={formatCurrencyFull(income)}
          icon="↑"
          color="green"
          change="▲ 8.2%"
          changeType="up"
        />
        <SummaryCard
          label="Total Expenses"
          value={formatCurrencyFull(expenses)}
          icon="↓"
          color="red"
          change="▲ 3.1%"
          changeType="down"
        />
      </div>

      {/* Charts Row */}
      <div className="dashboard__charts">
        <BalanceTrendChart />
        <SpendingDonutChart transactions={transactions} />
      </div>

      {/* Recent Transactions */}
      <RecentTransactions transactions={transactions} />
    </div>
  );
}
