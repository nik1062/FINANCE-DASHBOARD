import React from 'react';
import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { TREND_DATA } from '../../data/mockData';
import ChartTooltip from '../shared/ChartTooltip';
import './BalanceTrendChart.css';

// ─── Balance Trend Chart ──────────────────────────────────────────────────────
export default function BalanceTrendChart() {
  return (
    <div className="card trend-chart">
      {/* Header */}
      <div className="trend-chart__header">
        <div>
          <h3 className="trend-chart__title">Balance Trend</h3>
          <p className="trend-chart__sub">6-month financial overview</p>
        </div>
        <div className="trend-chart__legend">
          <div className="legend-item">
            <div className="legend-dot" style={{ background: '#6366f1' }} />
            Balance
          </div>
          <div className="legend-item">
            <div className="legend-dash" style={{ borderColor: '#22c55e' }} />
            Income
          </div>
          <div className="legend-item">
            <div className="legend-dash" style={{ borderColor: '#ef4444' }} />
            Expenses
          </div>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={TREND_DATA} margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2e2e42" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: '#5c5a78', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#5c5a78', fontSize: 11 }} axisLine={false} tickLine={false}
            tickFormatter={(v) => `$${v / 1000}k`} />
          <Tooltip content={<ChartTooltip />} />
          <Line type="monotone" dataKey="balance"  name="Balance"  stroke="#6366f1" strokeWidth={2.5}
            dot={false} activeDot={{ r: 5, fill: '#6366f1', strokeWidth: 0 }} />
          <Line type="monotone" dataKey="income"   name="Income"   stroke="#22c55e" strokeWidth={2}
            dot={false} strokeDasharray="5 4" activeDot={{ r: 4, fill: '#22c55e', strokeWidth: 0 }} />
          <Line type="monotone" dataKey="expenses" name="Expenses" stroke="#ef4444" strokeWidth={2}
            dot={false} strokeDasharray="5 4" activeDot={{ r: 4, fill: '#ef4444', strokeWidth: 0 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
