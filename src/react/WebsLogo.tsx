import React from 'react';

export interface WebsLogoProps {
  variant?: 'kgec' | 'ashoka' | 'club';
  name?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  basePath?: string;
}

export function WebsLogo({
  variant = 'kgec',
  name = '',
  size = 64,
  className = '',
  style = {},
  basePath = '/assets/logos',
}: WebsLogoProps) {
  let src = `${basePath}/institutional/kgec-logo.svg`;
  let alt = 'KGEC Emblem';

  if (variant === 'ashoka') {
    src = `${basePath}/institutional/ashoka-stambha.svg`;
    alt = 'Ashoka Stambha State Emblem of India';
  } else if (variant === 'club') {
    src = `${basePath}/clubs/${name || 'binary-hackathon'}.svg`;
    alt = `${name} Club Emblem`;
  }

  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`webs-logo-img ${className}`}
      style={{ width: `${size}px`, height: `${size}px`, objectFit: 'contain', display: 'inline-block', ...style }}
    />
  );
}
