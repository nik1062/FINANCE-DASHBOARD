import React from 'react';
import { formatCurrency } from '../../utils/helpers';

/**
 * ChartTooltip — Custom recharts tooltip with dark theme styling
 */
export default function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div style={{
      background: '#1c1c26',
      border: '1px solid #2e2e42',
      borderRadius: 10,
      padding: '10px 14px',
      fontSize: 13,
      minWidth: 160,
    }}>
      <p style={{ color: '#9896b0', marginBottom: 8, fontWeight: 500 }}>{label}</p>
      {payload.map((p, i) => (
        <div key={i} style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 16,
          color: p.color,
          marginBottom: 3,
        }}>
          <span>{p.name}</span>
          <span style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 500 }}>
            {formatCurrency(p.value)}
          </span>
        </div>
      ))}
    </div>
  );
}
