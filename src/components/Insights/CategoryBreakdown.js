import React from 'react';
import { CAT_COLORS } from '../../data/mockData';
import { formatCurrencyFull } from '../../utils/helpers';
import './CategoryBreakdown.css';

/**
 * CategoryBreakdown — horizontal progress bars for each expense category
 *
 * Props:
 *  categories {array}  [{ name, value }] sorted descending
 */
export default function CategoryBreakdown({ categories }) {
  const max = categories[0]?.value || 1;

  return (
    <div className="card cat-breakdown">
      <div className="cat-breakdown__header">
        <h3 className="cat-breakdown__title">Category Breakdown</h3>
        <p className="cat-breakdown__sub">All expense categories ranked</p>
      </div>

      <div className="cat-breakdown__list">
        {categories.map((cat) => (
          <div key={cat.name} className="cat-breakdown__item">
            <div className="cat-breakdown__row">
              <div className="cat-breakdown__dot"
                style={{ background: CAT_COLORS[cat.name] || '#9896b0' }} />
              <span className="cat-breakdown__name">{cat.name}</span>
              <span className="cat-breakdown__value">
                {formatCurrencyFull(cat.value)}
              </span>
            </div>
            <div className="progress-bar" style={{ marginTop: 6 }}>
              <div
                className="progress-fill"
                style={{
                  width: `${Math.round((cat.value / max) * 100)}%`,
                  background: CAT_COLORS[cat.name] || '#9896b0',
                  opacity: 0.8,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
