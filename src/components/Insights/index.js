import React, { useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import InsightCard from './InsightCard';
import MonthlyComparisonChart from './MonthlyComparisonChart';
import CategoryBreakdown from './CategoryBreakdown';
import {
  getTotalIncome,
  getTotalExpenses,
  getExpensesByCategory,
  formatCurrencyFull,
} from '../../utils/helpers';
import { CAT_COLORS } from '../../data/mockData';
import './Insights.css';

// ─── Insights Page ────────────────────────────────────────────────────────────
export default function Insights() {
  const { transactions } = useApp();

  // ── Computed Metrics ───────────────────────────────────────────────────────
  const income   = getTotalIncome(transactions);
  const expenses = getTotalExpenses(transactions);
  const savings  = income - expenses;
  const savingsRate = income > 0 ? Math.round((savings / income) * 100) : 0;

  const categories = useMemo(() => getExpensesByCategory(transactions), [transactions]);
  const topCat = categories[0];

  // Month-over-month
  const march = transactions
    .filter((t) => t.date.startsWith('2025-03') && t.type === 'expense')
    .reduce((s, t) => s + t.amount, 0);
  const feb = transactions
    .filter((t) => t.date.startsWith('2025-02') && t.type === 'expense')
    .reduce((s, t) => s + t.amount, 0);
  const monthDiff = march - feb;

  // ── Chart Data ─────────────────────────────────────────────────────────────
  const monthlyData = [
    { month: 'Oct', income: 5200, expenses: 3800 },
    { month: 'Nov', income: 5500, expenses: 4100 },
    { month: 'Dec', income: 5800, expenses: 6700 },
    { month: 'Jan', income: 6100, expenses: 4800 },
    { month: 'Feb', income: 7200, expenses: 5300 },
    { month: 'Mar', income: Math.round(income), expenses: Math.round(march) },
  ];

  return (
    <div className="insights">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Insights</h1>
        <p className="page-sub">Smart analysis of your spending patterns</p>
      </div>

      {/* KPI Cards Grid */}
      <div className="insights__cards">
        <InsightCard
          emoji="🏆"
          label="Highest Spending Category"
          value={topCat ? topCat.name : '—'}
          valueColor={topCat ? CAT_COLORS[topCat.name] : 'var(--text1)'}
          sub={topCat ? `${formatCurrencyFull(topCat.value)} spent this period` : ''}
          progress={100}
          barColor={topCat ? CAT_COLORS[topCat.name] : 'var(--blue)'}
        />
        <InsightCard
          emoji="💰"
          label="Total Savings"
          value={formatCurrencyFull(savings)}
          valueColor={savings >= 0 ? 'var(--green-text)' : 'var(--red-text)'}
          sub={`${savingsRate}% savings rate this period`}
          progress={Math.min(savingsRate, 100)}
          barColor="var(--green)"
        />
        <InsightCard
          emoji="📅"
          label="Mar vs Feb Spending"
          value={`${monthDiff >= 0 ? '+' : ''}${formatCurrencyFull(monthDiff)}`}
          valueColor={monthDiff > 0 ? 'var(--red-text)' : 'var(--green-text)'}
          sub={`Mar: ${formatCurrencyFull(march)} · Feb: ${formatCurrencyFull(feb)}`}
          progress={Math.min((march / (feb || 1)) * 100, 100)}
          barColor={monthDiff > 0 ? 'var(--red)' : 'var(--green)'}
        />
        <InsightCard
          emoji="📊"
          label="Income vs Expenses"
          value={formatCurrencyFull(income)}
          valueColor="var(--text1)"
          sub={`vs ${formatCurrencyFull(expenses)} in expenses · ${income > 0 ? Math.round((expenses / income) * 100) : 0}% spent`}
          progress={income > 0 ? Math.min((expenses / income) * 100, 100) : 0}
          barColor="var(--red)"
        />
      </div>

      {/* Monthly Bar Chart */}
      <MonthlyComparisonChart data={monthlyData} />

      {/* Category Progress Bars */}
      <div style={{ marginTop: '1rem' }}>
        <CategoryBreakdown categories={categories} />
      </div>
    </div>
  );
}
