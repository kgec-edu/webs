import React from 'react';

export interface WebsCardProps {
  title?: string;
  subtitle?: string;
  bordered?: boolean;
  accent?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function WebsCard({
  title,
  subtitle,
  bordered = false,
  accent = false,
  children,
  className = '',
  style = {},
}: WebsCardProps) {
  let cardClass = 'webs-card';
  if (accent) cardClass += ' webs-card-accent';
  else if (bordered) cardClass += ' webs-card-bordered';
  if (className) cardClass += ` ${className}`;

  return (
    <div className={cardClass} style={style}>
      {title && <h3 style={{ fontSize: '1.2rem', marginBottom: subtitle ? '4px' : '14px' }}>{title}</h3>}
      {subtitle && <p style={{ fontSize: '0.85rem', color: 'var(--webs-text-muted)', marginBottom: '14px' }}>{subtitle}</p>}
      {children}
    </div>
  );
}
