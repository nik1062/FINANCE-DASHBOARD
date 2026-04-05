import React, { useState } from 'react';
import { CATEGORIES } from '../../data/mockData';
import { useApp } from '../../context/AppContext';
import './AddTransactionModal.css';

const EMPTY_FORM = {
  desc:     '',
  amount:   '',
  category: 'Food',
  type:     'expense',
  date:     new Date().toISOString().split('T')[0],
};

// ─── Add Transaction Modal ────────────────────────────────────────────────────
export default function AddTransactionModal({ onClose }) {
  const { addTransaction } = useApp();
  const [form, setForm] = useState(EMPTY_FORM);
  const [error, setError] = useState('');

  const set = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = () => {
    if (!form.desc.trim()) { setError('Please enter a description.'); return; }
    if (!form.amount || isNaN(form.amount) || Number(form.amount) <= 0) {
      setError('Please enter a valid amount.');
      return;
    }
    addTransaction({ ...form, amount: parseFloat(form.amount) });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Add Transaction</h2>

        {/* Description */}
        <div className="form-group">
          <label className="form-label">Description</label>
          <input
            className="form-input"
            value={form.desc}
            onChange={set('desc')}
            placeholder="e.g. Grocery Store"
          />
        </div>

        {/* Amount + Date */}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Amount (USD)</label>
            <input
              className="form-input"
              type="number"
              min="0"
              step="0.01"
              value={form.amount}
              onChange={set('amount')}
              placeholder="0.00"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Date</label>
            <input
              className="form-input"
              type="date"
              value={form.date}
              onChange={set('date')}
            />
          </div>
        </div>

        {/* Category + Type */}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Category</label>
            <select className="form-input" value={form.category} onChange={set('category')}>
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Type</label>
            <select className="form-input" value={form.type} onChange={set('type')}>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
        </div>

        {/* Error */}
        {error && <p className="add-modal__error">{error}</p>}

        {/* Actions */}
        <div className="modal-actions">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSubmit}>
            + Add Transaction
          </button>
        </div>
      </div>
    </div>
  );
}
