import React from 'react';
import { WEBS_ICONS } from '../tokens/icons';

export interface WebsIconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof WEBS_ICONS | string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}

export const WebsIcon: React.FC<WebsIconProps> = ({
  name,
  size = 'md',
  className = '',
  ...props
}) => {
  const iconDef = WEBS_ICONS[name as string] || WEBS_ICONS['info'];

  return (
    <svg
      className={`webs-icon webs-icon-${size} ${className}`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: iconDef.svgContent }}
      {...props}
    />
  );
};
