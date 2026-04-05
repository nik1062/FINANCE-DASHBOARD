import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { CAT_COLORS } from '../../data/mockData';
import { getExpensesByCategory, formatCurrencyFull } from '../../utils/helpers';
import './SpendingDonutChart.css';

// ─── Spending Donut Chart ─────────────────────────────────────────────────────
export default function SpendingDonutChart({ transactions }) {
  const categories = useMemo(
    () => getExpensesByCategory(transactions),
    [transactions]
  );
  const total = categories.reduce((s, c) => s + c.value, 0);

  return (
    <div className="card donut-chart">
      <div className="donut-chart__header">
        <h3 className="donut-chart__title">By Category</h3>
        <p className="donut-chart__sub">Spending breakdown</p>
      </div>

      {/* Donut Chart */}
      <ResponsiveContainer width="100%" height={160}>
        <PieChart>
          <Pie
            data={categories}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={74}
            paddingAngle={2}
            dataKey="value"
            strokeWidth={0}
          >
            {categories.map((c, i) => (
              <Cell key={i} fill={CAT_COLORS[c.name] || '#9896b0'} />
            ))}
          </Pie>
          <Tooltip
            formatter={(v) => [formatCurrencyFull(v), 'Amount']}
            contentStyle={{
              background: '#1c1c26',
              border: '1px solid #2e2e42',
              borderRadius: 8,
              fontSize: 13,
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Category Legend */}
      <div className="donut-chart__legend">
        {categories.slice(0, 5).map((c) => (
          <div key={c.name} className="donut-chart__legend-row">
            <div className="donut-chart__dot" style={{ background: CAT_COLORS[c.name] || '#9896b0' }} />
            <span className="donut-chart__cat-name">{c.name}</span>
            <span className="donut-chart__cat-value">{formatCurrencyFull(c.value)}</span>
            <span className="donut-chart__cat-pct">
              {Math.round((c.value / total) * 100)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
