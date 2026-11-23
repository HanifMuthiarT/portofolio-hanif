// src/components/SectionTitle.jsx
import React from 'react';

export function SectionTitle({ icon, title, subtitle }) {
  return (
    <div className="section-title">
      <div className="section-title-wrap">
        {icon && <span className="section-icon">{icon}</span>}
        <div className="section-text">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
