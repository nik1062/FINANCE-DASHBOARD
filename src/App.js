import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Sidebar from './components/Layout/Sidebar';
import Topbar from './components/Layout/Topbar';
import Dashboard from './components/Dashboard/index';
import Transactions from './components/Transactions/index';
import Insights from './components/Insights/index';
import Settings from './components/Settings/index';
import './styles/global.css';
import './App.css';

// ─── Page Router ──────────────────────────────────────────────────────────────
function PageContent() {
  const { activePage } = useApp();

  const pages = {
    dashboard:    <Dashboard />,
    transactions: <Transactions />,
    insights:     <Insights />,
    settings:     <Settings />,
  };

  return (
    <main className="app__content">
      {pages[activePage] || <Dashboard />}
    </main>
  );
}

// ─── App Shell ────────────────────────────────────────────────────────────────
function AppShell() {
  return (
    <div className="app">
      <Sidebar />
      <div className="app__main">
        <Topbar />
        <PageContent />
      </div>
    </div>
  );
}

// ─── Root App (with Context Provider) ────────────────────────────────────────
export default function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  );
}
