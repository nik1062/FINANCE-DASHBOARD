// ─── Category Color Map ───────────────────────────────────────────────────────
export const CAT_COLORS = {
  Food:          '#f59e0b',
  Travel:        '#6366f1',
  Bills:         '#ef4444',
  Health:        '#22c55e',
  Shopping:      '#a855f7',
  Salary:        '#38bdf8',
  Freelance:     '#34d399',
  Entertainment: '#f472b6',
  Other:         '#9896b0',
};

// ─── Category Emoji Map ───────────────────────────────────────────────────────
export const CAT_EMOJI = {
  Food:          '🍽️',
  Travel:        '✈️',
  Bills:         '📄',
  Health:        '💊',
  Shopping:      '🛍️',
  Salary:        '💰',
  Freelance:     '💻',
  Entertainment: '🎬',
  Other:         '💳',
};

// ─── All Available Categories ─────────────────────────────────────────────────
export const CATEGORIES = Object.keys(CAT_COLORS);

// ─── Mock Transactions ────────────────────────────────────────────────────────
export const INITIAL_TRANSACTIONS = [
  { id: 1,  date: '2025-03-28', desc: 'Salary — March',      category: 'Salary',        amount: 4500.00, type: 'income'  },
  { id: 2,  date: '2025-03-26', desc: 'Whole Foods Market',  category: 'Food',          amount: 127.50,  type: 'expense' },
  { id: 3,  date: '2025-03-25', desc: 'Netflix Subscription',category: 'Entertainment', amount: 15.99,   type: 'expense' },
  { id: 4,  date: '2025-03-24', desc: 'Flight to New York',  category: 'Travel',        amount: 340.00,  type: 'expense' },
  { id: 5,  date: '2025-03-22', desc: 'Electric Bill',       category: 'Bills',         amount: 98.00,   type: 'expense' },
  { id: 6,  date: '2025-03-20', desc: 'Freelance Project',   category: 'Freelance',     amount: 1200.00, type: 'income'  },
  { id: 7,  date: '2025-03-18', desc: 'Grocery Store',       category: 'Food',          amount: 84.30,   type: 'expense' },
  { id: 8,  date: '2025-03-17', desc: 'Doctor Visit',        category: 'Health',        amount: 60.00,   type: 'expense' },
  { id: 9,  date: '2025-03-15', desc: 'Amazon Order',        category: 'Shopping',      amount: 220.00,  type: 'expense' },
  { id: 10, date: '2025-03-14', desc: 'Internet Bill',       category: 'Bills',         amount: 65.00,   type: 'expense' },
  { id: 11, date: '2025-03-10', desc: 'Restaurant Dinner',   category: 'Food',          amount: 78.00,   type: 'expense' },
  { id: 12, date: '2025-03-08', desc: 'Hotel Stay',          category: 'Travel',        amount: 195.00,  type: 'expense' },
  { id: 13, date: '2025-03-05', desc: 'Performance Bonus',   category: 'Salary',        amount: 800.00,  type: 'income'  },
  { id: 14, date: '2025-03-03', desc: 'Gym Membership',      category: 'Health',        amount: 45.00,   type: 'expense' },
  { id: 15, date: '2025-03-01', desc: 'Spotify',             category: 'Entertainment', amount: 9.99,    type: 'expense' },
  { id: 16, date: '2025-02-28', desc: 'Salary — February',   category: 'Salary',        amount: 4500.00, type: 'income'  },
  { id: 17, date: '2025-02-20', desc: 'Grocery Store',       category: 'Food',          amount: 92.00,   type: 'expense' },
  { id: 18, date: '2025-02-18', desc: 'Electric Bill',       category: 'Bills',         amount: 104.00,  type: 'expense' },
  { id: 19, date: '2025-02-15', desc: 'Flight to LA',        category: 'Travel',        amount: 280.00,  type: 'expense' },
  { id: 20, date: '2025-02-10', desc: 'Freelance Design',    category: 'Freelance',     amount: 900.00,  type: 'income'  },
  { id: 21, date: '2025-02-05', desc: 'Pharmacy',            category: 'Health',        amount: 32.00,   type: 'expense' },
  { id: 22, date: '2025-02-01', desc: 'Online Shopping',     category: 'Shopping',      amount: 156.00,  type: 'expense' },
];

// ─── 6-Month Balance Trend ────────────────────────────────────────────────────
export const TREND_DATA = [
  { month: 'Oct', balance: 12400, income: 5200, expenses: 3800 },
  { month: 'Nov', balance: 13800, income: 5500, expenses: 4100 },
  { month: 'Dec', balance: 12900, income: 5800, expenses: 6700 },
  { month: 'Jan', balance: 14200, income: 6100, expenses: 4800 },
  { month: 'Feb', balance: 16100, income: 7200, expenses: 5300 },
  { month: 'Mar', balance: 18340, income: 6500, expenses: 4238 },
];
