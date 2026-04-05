import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_TRANSACTIONS } from '../data/mockData';
import { loadFromStorage, saveToStorage } from '../utils/helpers';

// ─── Context Creation ─────────────────────────────────────────────────────────
const AppContext = createContext(null);

// ─── Provider Component ───────────────────────────────────────────────────────
export function AppProvider({ children }) {
  // ── State ──────────────────────────────────────────────────────────────────
  const [transactions, setTransactions] = useState(() =>
    loadFromStorage(INITIAL_TRANSACTIONS)
  );
  const [role, setRole]       = useState('admin');   // 'admin' | 'viewer'
  const [darkMode, setDarkMode] = useState(true);
  const [activePage, setActivePage] = useState('dashboard');

  // ── Persist to LocalStorage ────────────────────────────────────────────────
  useEffect(() => {
    saveToStorage(transactions);
  }, [transactions]);

  // ── Apply Dark / Light CSS Variables ──────────────────────────────────────
  useEffect(() => {
    const r = document.documentElement;
    if (darkMode) {
      document.body.style.background = '#0f0f13';
      r.style.setProperty('--bg0',        '#0f0f13');
      r.style.setProperty('--bg1',        '#16161d');
      r.style.setProperty('--bg2',        '#1c1c26');
      r.style.setProperty('--bg3',        '#24243a');
      r.style.setProperty('--border',     '#2e2e42');
      r.style.setProperty('--border2',    '#3a3a52');
      r.style.setProperty('--text1',      '#e8e6f0');
      r.style.setProperty('--text2',      '#9896b0');
      r.style.setProperty('--text3',      '#5c5a78');
      r.style.setProperty('--blue-dim',   '#1e1e3a');
      r.style.setProperty('--green-dim',  '#1a3a28');
      r.style.setProperty('--red-dim',    '#3a1a1a');
    } else {
      document.body.style.background = '#f0eff8';
      r.style.setProperty('--bg0',        '#f0eff8');
      r.style.setProperty('--bg1',        '#ffffff');
      r.style.setProperty('--bg2',        '#f5f4fc');
      r.style.setProperty('--bg3',        '#ebebf5');
      r.style.setProperty('--border',     '#e2e1f0');
      r.style.setProperty('--border2',    '#d0cfe8');
      r.style.setProperty('--text1',      '#1a1a2e');
      r.style.setProperty('--text2',      '#555570');
      r.style.setProperty('--text3',      '#9898b8');
      r.style.setProperty('--blue-dim',   '#ededff');
      r.style.setProperty('--green-dim',  '#edfdf5');
      r.style.setProperty('--red-dim',    '#fef0f0');
    }
  }, [darkMode]);

  // ── CRUD Actions ───────────────────────────────────────────────────────────
  const addTransaction = (txn) => {
    setTransactions((prev) => [{ ...txn, id: Date.now() }, ...prev]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  const updateTransaction = (id, updates) => {
    setTransactions((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
    );
  };

  // ── Context Value ──────────────────────────────────────────────────────────
  return (
    <AppContext.Provider
      value={{
        transactions,
        role,
        setRole,
        darkMode,
        setDarkMode,
        activePage,
        setActivePage,
        addTransaction,
        deleteTransaction,
        updateTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// ─── Custom Hook ──────────────────────────────────────────────────────────────
export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
