import React from 'react';
import './SummaryCard.css';

/**
 * SummaryCard — displays a single KPI (balance, income, expenses)
 *
 * Props:
 *  label      {string}  — card title
 *  value      {string}  — formatted currency string
 *  icon       {string}  — emoji icon
 *  color      {string}  — 'blue' | 'green' | 'red'
 *  change     {string}  — e.g. '▲ 12.4%'
 *  changeType {string}  — 'up' | 'down'
 *  changeNote {string}  — e.g. 'vs last month'
 */
export default function SummaryCard({
  label,
  value,
  icon,
  color = 'blue',
  change,
  changeType = 'up',
  changeNote = 'vs last month',
}) {
  return (
    <div className={`summary-card summary-card--${color}`}>
      <div className="summary-card__glow" />
      <div className="summary-card__label">
        <div className={`summary-card__icon summary-card__icon--${color}`}>
          {icon}
        </div>
        {label}
      </div>
      <div className={`summary-card__value summary-card__value--${color}`}>
        {value}
      </div>
      {change && (
        <div className="summary-card__change">
          <span className={changeType}>{change}</span>
          <span className="summary-card__change-note">{changeNote}</span>
        </div>
      )}
    </div>
  );
}
