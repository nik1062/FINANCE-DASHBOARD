import React from 'react';
import './TransactionFilters.css';

/**
 * TransactionFilters — search bar + filter pills + result count
 *
 * Props:
 *  search      {string}
 *  setSearch   {fn}
 *  filter      {string}  'all' | 'income' | 'expense'
 *  setFilter   {fn}
 *  resultCount {number}
 */
export default function TransactionFilters({
  search,
  setSearch,
  filter,
  setFilter,
  resultCount,
}) {
  const FILTERS = [
    { value: 'all',     label: 'All' },
    { value: 'income',  label: '↑ Income' },
    { value: 'expense', label: '↓ Expenses' },
  ];

  return (
    <div className="txn-filters">
      {/* Search */}
      <input
        className="txn-filters__search form-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name, category or amount..."
      />

      {/* Filter Pills */}
      <div className="txn-filters__pills">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            className={`txn-filters__pill ${filter === f.value ? 'active' : ''}`}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Result Count */}
      <span className="txn-filters__count">{resultCount} results</span>
    </div>
  );
}
