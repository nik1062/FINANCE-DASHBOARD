// ─── Currency Formatters ──────────────────────────────────────────────────────

/** Format as $12,345 (no decimals) */
export function formatCurrency(n) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);
}

/** Format as $1,234.56 (with decimals) */
export function formatCurrencyFull(n) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);
}

// ─── Transaction Aggregators ──────────────────────────────────────────────────

/** Sum all income transactions */
export function getTotalIncome(transactions) {
  return transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
}

/** Sum all expense transactions */
export function getTotalExpenses(transactions) {
  return transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
}

/** Group expenses by category → [{ name, value }] sorted descending */
export function getExpensesByCategory(transactions) {
  const map = {};
  transactions
    .filter((t) => t.type === 'expense')
    .forEach((t) => {
      map[t.category] = (map[t.category] || 0) + t.amount;
    });
  return Object.entries(map)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);
}

/** Get emoji icon for transaction category */
export function getTxnIcon(transaction) {
  const { CAT_EMOJI } = require('../data/mockData');
  if (transaction.type === 'income') return '💰';
  return CAT_EMOJI[transaction.category] || '💳';
}

// ─── LocalStorage Helpers ─────────────────────────────────────────────────────

const STORAGE_KEY = 'finvault_transactions';

export function loadFromStorage(fallback) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function saveToStorage(transactions) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  } catch {
    console.warn('LocalStorage unavailable');
  }
}
