import React from 'react';
import './InsightCard.css';

/**
 * InsightCard — shows a single insight metric with a progress bar
 *
 * Props:
 *  emoji       {string}
 *  label       {string}
 *  value       {string}
 *  valueColor  {string}  CSS color
 *  sub         {string}
 *  progress    {number}  0–100
 *  barColor    {string}  CSS color
 */
export default function InsightCard({
  emoji,
  label,
  value,
  valueColor,
  sub,
  progress,
  barColor,
}) {
  return (
    <div className="card insight-card">
      <p className="insight-card__label">{emoji} {label}</p>
      <p className="insight-card__value" style={{ color: valueColor }}>{value}</p>
      {sub && <p className="insight-card__sub">{sub}</p>}
      {progress !== undefined && (
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${Math.min(Math.max(progress, 0), 100)}%`,
              background: barColor,
            }}
          />
        </div>
      )}
    </div>
  );
}
