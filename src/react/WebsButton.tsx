import React from 'react';

export interface WebsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline';
  children: React.ReactNode;
  asLink?: boolean;
  href?: string;
  className?: string;
}

export function WebsButton({
  variant = 'primary',
  children,
  asLink = false,
  href,
  className = '',
  ...props
}: WebsButtonProps) {
  const variantClass = `webs-btn webs-btn-${variant} ${className}`;

  if (asLink && href) {
    return (
      <a href={href} className={variantClass}>
        {children}
      </a>
    );
  }

  return (
    <button className={variantClass} {...props}>
      {children}
    </button>
  );
}
