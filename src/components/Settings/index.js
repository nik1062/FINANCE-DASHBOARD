import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import './Settings.css';

// ─── Settings Page ────────────────────────────────────────────────────────────
export default function Settings() {
  const { darkMode, setDarkMode } = useApp();

  // Local-only toggles (UI-only, no backend)
  const [emailNotif,   setEmailNotif]   = useState(true);
  const [budgetAlerts, setBudgetAlerts] = useState(false);
  const [saveStorage,  setSaveStorage]  = useState(true);

  return (
    <div className="settings">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-sub">Manage your account and preferences</p>
      </div>

      {/* ── Appearance ──────────────────────────────────────────────────── */}
      <section className="card settings__section">
        <h2 className="settings__section-title">Appearance</h2>
        <ToggleRow
          label="Dark Mode"
          desc="Switch between light and dark theme"
          value={darkMode}
          onToggle={() => setDarkMode((d) => !d)}
        />
      </section>

      {/* ── Notifications ───────────────────────────────────────────────── */}
      <section className="card settings__section">
        <h2 className="settings__section-title">Notifications</h2>
        <ToggleRow
          label="Email Notifications"
          desc="Receive weekly financial summaries by email"
          value={emailNotif}
          onToggle={() => setEmailNotif((v) => !v)}
        />
        <ToggleRow
          label="Budget Alerts"
          desc="Notify when spending exceeds your set budget"
          value={budgetAlerts}
          onToggle={() => setBudgetAlerts((v) => !v)}
        />
        <ToggleRow
          label="Save to LocalStorage"
          desc="Persist your transactions across browser sessions"
          value={saveStorage}
          onToggle={() => setSaveStorage((v) => !v)}
        />
      </section>

      {/* ── Currency & Region ────────────────────────────────────────────── */}
      <section className="card settings__section">
        <h2 className="settings__section-title">Currency & Region</h2>

        <div className="form-group">
          <label className="form-label">Currency</label>
          <select className="form-input">
            <option>USD — US Dollar</option>
            <option>EUR — Euro</option>
            <option>GBP — British Pound</option>
            <option>INR — Indian Rupee</option>
            <option>JPY — Japanese Yen</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Date Format</label>
          <select className="form-input">
            <option>YYYY-MM-DD</option>
            <option>MM/DD/YYYY</option>
            <option>DD/MM/YYYY</option>
          </select>
        </div>

        <button className="btn btn-primary">Save Preferences</button>
      </section>
    </div>
  );
}

// ─── Toggle Row Sub-component ─────────────────────────────────────────────────
function ToggleRow({ label, desc, value, onToggle }) {
  return (
    <div className="settings__toggle-row">
      <div>
        <p className="settings__toggle-label">{label}</p>
        {desc && <p className="settings__toggle-desc">{desc}</p>}
      </div>
      <div
        className={`toggle ${value ? 'on' : ''}`}
        onClick={onToggle}
        role="switch"
        aria-checked={value}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onToggle()}
      />
    </div>
  );
}
