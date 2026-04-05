import React from 'react';
import { CAT_COLORS, CAT_EMOJI } from '../../data/mockData';
import { formatCurrencyFull } from '../../utils/helpers';
import './TransactionTable.css';

/**
 * TransactionTable
 *
 * Props:
 *  transactions {array}
 *  sort         {{ key, dir }}
 *  onSort       {fn}
 *  role         {string}  'admin' | 'viewer'
 *  onDelete     {fn}
 */
export default function TransactionTable({ transactions, sort, onSort, role, onDelete }) {
  const arrow = (key) => {
    if (sort.key !== key) return ' ↕';
    return sort.dir === -1 ? ' ↓' : ' ↑';
  };

  if (transactions.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📭</div>
        <div className="empty-title">No transactions found</div>
        <p>Try adjusting your search or filter settings.</p>
      </div>
    );
  }

  return (
    <div className="txn-table-wrap">
      <table className="txn-table">
        <thead>
          <tr>
            <th
              className={sort.key === 'date' ? 'sorted' : ''}
              onClick={() => onSort('date')}
            >
              Date{arrow('date')}
            </th>
            <th>Description</th>
            <th>Category</th>
            <th>Type</th>
            <th
              className={sort.key === 'amount' ? 'sorted' : ''}
              onClick={() => onSort('amount')}
              style={{ textAlign: 'right' }}
            >
              Amount{arrow('amount')}
            </th>
            {role === 'admin' && <th style={{ width: 60 }}></th>}
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              {/* Date */}
              <td className="txn-table__date">{t.date}</td>

              {/* Description */}
              <td>
                <div className="txn-table__desc-row">
                  <span className="txn-table__icon">
                    {t.type === 'income' ? '💰' : CAT_EMOJI[t.category] || '💳'}
                  </span>
                  <span>{t.desc}</span>
                </div>
              </td>

              {/* Category */}
              <td>
                <span
                  className="txn-table__cat-badge"
                  style={{
                    background: (CAT_COLORS[t.category] || '#9896b0') + '18',
                    color: CAT_COLORS[t.category] || 'var(--text2)',
                  }}
                >
                  {t.category}
                </span>
              </td>

              {/* Type */}
              <td>
                <span className={`badge badge-${t.type}`}>{t.type}</span>
              </td>

              {/* Amount */}
              <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                <span className={t.type === 'income' ? 'amount-positive' : 'amount-negative'}>
                  {t.type === 'income' ? '+' : '-'}
                  {formatCurrencyFull(t.amount)}
                </span>
              </td>

              {/* Delete (Admin only) */}
              {role === 'admin' && (
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(t.id)}
                    title="Delete transaction"
                  >
                    ✕
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
