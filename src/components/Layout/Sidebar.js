import React from 'react';
import { useApp } from '../../context/AppContext';
import './Sidebar.css';

// ─── Navigation Items Config ──────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: 'dashboard',    label: 'Dashboard',    icon: '⊞' },
  { id: 'transactions', label: 'Transactions', icon: '⇄' },
  { id: 'insights',     label: 'Insights',     icon: '◎' },
  { id: 'settings',     label: 'Settings',     icon: '⚙' },
];

// ─── Sidebar Component ────────────────────────────────────────────────────────
export default function Sidebar() {
  const { activePage, setActivePage } = useApp();

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar__logo">
        <div className="sidebar__logo-mark">F</div>
        <span className="sidebar__logo-text">
          Fin<span>Vault</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="sidebar__nav">
        <p className="sidebar__nav-section">Main Menu</p>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`sidebar__nav-item ${activePage === item.id ? 'active' : ''}`}
            onClick={() => setActivePage(item.id)}
          >
            <span className="sidebar__nav-icon">{item.icon}</span>
            <span className="sidebar__nav-label">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* User Profile */}
      <div className="sidebar__bottom">
        <div className="sidebar__user">
          <div className="sidebar__avatar">JD</div>
          <div className="sidebar__user-info">
            <p className="sidebar__user-name">John Doe</p>
            <p className="sidebar__user-email">john@finvault.io</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
