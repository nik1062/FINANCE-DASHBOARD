import React from 'react';
import { CAT_COLORS, CAT_EMOJI } from '../../data/mockData';
import { formatCurrencyFull } from '../../utils/helpers';
import './RecentTransactions.css';

// ─── Recent Transactions (Dashboard preview) ──────────────────────────────────
export default function RecentTransactions({ transactions }) {
  const recent = transactions.slice(0, 5);

  return (
    <div className="card recent-txns">
      <div className="recent-txns__header">
        <div>
          <h3 className="recent-txns__title">Recent Transactions</h3>
          <p className="recent-txns__sub">Latest activity</p>
        </div>
        <span className="recent-txns__count">
          {recent.length} of {transactions.length}
        </span>
      </div>

      <table>
        <tbody>
          {recent.map((t) => (
            <tr key={t.id}>
              <td>
                <div className="recent-txns__row">
                  <div
                    className="recent-txns__icon"
                    style={{ background: (CAT_COLORS[t.category] || '#9896b0') + '22' }}
                  >
                    {t.type === 'income' ? '💰' : CAT_EMOJI[t.category] || '💳'}
                  </div>
                  <div>
                    <p className="recent-txns__desc">{t.desc}</p>
                    <p className="recent-txns__meta">
                      {t.date} ·{' '}
                      <span style={{ color: CAT_COLORS[t.category] || 'var(--text3)' }}>
                        {t.category}
                      </span>
                    </p>
                  </div>
                </div>
              </td>
              <td className="recent-txns__amount">
                <span className={t.type === 'income' ? 'amount-positive' : 'amount-negative'}>
                  {t.type === 'income' ? '+' : '-'}
                  {formatCurrencyFull(t.amount)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
