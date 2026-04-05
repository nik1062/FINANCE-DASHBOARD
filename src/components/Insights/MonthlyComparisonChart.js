import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import ChartTooltip from '../shared/ChartTooltip';
import './MonthlyComparisonChart.css';

/**
 * MonthlyComparisonChart — grouped bar chart: income vs expenses per month
 *
 * Props:
 *  data {array}  [{ month, income, expenses }]
 */
export default function MonthlyComparisonChart({ data }) {
  return (
    <div className="card monthly-chart">
      <div className="monthly-chart__header">
        <div>
          <h3 className="monthly-chart__title">Monthly Comparison</h3>
          <p className="monthly-chart__sub">Income vs Expenses over 6 months</p>
        </div>
        <div className="monthly-chart__legend">
          <div className="legend-item">
            <div className="legend-dot" style={{ background: '#22c55e' }} />
            Income
          </div>
          <div className="legend-item">
            <div className="legend-dot" style={{ background: '#ef4444' }} />
            Expenses
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} margin={{ top: 4, right: 4, left: -24, bottom: 0 }} barCategoryGap="35%">
          <CartesianGrid strokeDasharray="3 3" stroke="#2e2e42" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: '#5c5a78', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#5c5a78', fontSize: 11 }} axisLine={false} tickLine={false}
            tickFormatter={(v) => `$${v / 1000}k`} />
          <Tooltip content={<ChartTooltip />} />
          <Bar dataKey="income"   name="Income"   fill="#22c55e" radius={[5, 5, 0, 0]} fillOpacity={0.88} />
          <Bar dataKey="expenses" name="Expenses" fill="#ef4444" radius={[5, 5, 0, 0]} fillOpacity={0.88} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
