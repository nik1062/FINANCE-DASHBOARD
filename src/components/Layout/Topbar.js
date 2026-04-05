import React from 'react';
import { useApp } from '../../context/AppContext';
import './Topbar.css';

// ─── Topbar Component ─────────────────────────────────────────────────────────
export default function Topbar() {
  const { role, setRole } = useApp();

  return (
    <header className="topbar">
      {/* Search Bar */}
      <div className="topbar__search-wrap">
        <svg className="topbar__search-icon" width="14" height="14" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          className="topbar__search"
          placeholder="Search anything..."
        />
      </div>

      <div className="topbar__spacer" />

      {/* Role Switcher */}
      <div className={`topbar__role-wrap ${role}`}>
        <div className="topbar__role-dot" />
        <span className="topbar__role-prefix">Role:</span>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="topbar__role-select"
        >
          <option value="admin">Admin</option>
          <option value="viewer">Viewer</option>
        </select>
      </div>

      {/* Notification Bell */}
      <button className="topbar__icon-btn" title="Notifications">
        🔔
      </button>

      {/* Avatar */}
      <div className="topbar__avatar">JD</div>
    </header>
  );
}
