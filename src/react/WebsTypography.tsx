import React from 'react';

export interface WebsHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

export const WebsHeading: React.FC<WebsHeadingProps> = ({
  level = 2,
  variant,
  children,
  className = '',
  ...props
}) => {
  const Tag = (`h${level}` as const);
  const variantClass = variant ? `webs-${variant}` : `webs-h${level}`;

  return (
    <Tag className={`${variantClass} ${className}`} {...props}>
      {children}
    </Tag>
  );
};

export interface WebsTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'lead' | 'body' | 'sm' | 'xs' | 'eyebrow' | 'caption';
  children: React.ReactNode;
}

export const WebsText: React.FC<WebsTextProps> = ({
  variant = 'body',
  children,
  className = '',
  ...props
}) => {
  const variantClass = variant === 'body' ? 'webs-body' : `webs-${variant}`;

  if (variant === 'eyebrow') {
    return (
      <span className={`${variantClass} ${className}`} {...props}>
        {children}
      </span>
    );
  }

  return (
    <p className={`${variantClass} ${className}`} {...props}>
      {children}
    </p>
  );
};
