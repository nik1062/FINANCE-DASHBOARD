import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import TransactionFilters from './TransactionFilters';
import TransactionTable from './TransactionTable';
import AddTransactionModal from './AddTransactionModal';
import './Transactions.css';

// ─── Transactions Page ────────────────────────────────────────────────────────
export default function Transactions() {
  const { transactions, role, deleteTransaction } = useApp();

  // ── Local UI State ─────────────────────────────────────────────────────────
  const [search,    setSearch]    = useState('');
  const [filter,    setFilter]    = useState('all');
  const [sort,      setSort]      = useState({ key: 'date', dir: -1 });
  const [showModal, setShowModal] = useState(false);

  // ── Derived: filtered + sorted list ───────────────────────────────────────
  const filtered = useMemo(() => {
    let result = [...transactions];

    // Filter by type
    if (filter !== 'all') result = result.filter((t) => t.type === filter);

    // Search by description, category or amount
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.desc.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q) ||
          String(t.amount).includes(q)
      );
    }

    // Sort
    result.sort((a, b) => {
      if (sort.key === 'date')   return sort.dir * (new Date(a.date) - new Date(b.date));
      if (sort.key === 'amount') return sort.dir * (a.amount - b.amount);
      return 0;
    });

    return result;
  }, [transactions, filter, search, sort]);

  // ── Toggle Sort ────────────────────────────────────────────────────────────
  const handleSort = (key) =>
    setSort((prev) =>
      prev.key === key ? { key, dir: -prev.dir } : { key, dir: -1 }
    );

  return (
    <div className="transactions">
      {/* Page Header */}
      <div className="transactions__header">
        <div className="page-header" style={{ marginBottom: 0 }}>
          <h1 className="page-title">Transactions</h1>
          <p className="page-sub">{transactions.length} total transactions recorded</p>
        </div>

        {/* Admin-only: Add button */}
        {role === 'admin' && (
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>
            + Add Transaction
          </button>
        )}
      </div>

      {/* Filters */}
      <TransactionFilters
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        resultCount={filtered.length}
      />

      {/* Table */}
      <TransactionTable
        transactions={filtered}
        sort={sort}
        onSort={handleSort}
        role={role}
        onDelete={deleteTransaction}
      />

      {/* Add Modal */}
      {showModal && <AddTransactionModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
