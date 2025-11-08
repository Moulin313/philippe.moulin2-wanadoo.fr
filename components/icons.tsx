
import React from 'react';

export const MenuIcon: React.FC = () => (
  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const XIcon: React.FC = () => (
  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const ChevronDownIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

export const WhatsAppIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.74.45 3.48 1.34 5l-1.4 5.13 5.26-1.38c1.45.81 3.09 1.25 4.71 1.25h.01c5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.9-9.91-9.9zM17.13 15.1c-.28-.14-1.68-.83-1.94-.92-.26-.1-.45-.14-.64.14-.19.28-.73.92-.9 1.1-.16.19-.32.21-.6.07-.28-.14-1.19-.44-2.27-1.4-.84-.75-1.4-1.68-1.56-1.96-.16-.28-.01-.44.12-.58.12-.12.28-.32.41-.48.14-.16.19-.28.28-.47.1-.19.05-.35-.02-.5-.07-.14-.64-1.52-.87-2.08-.23-.56-.46-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.49.07-.74.35-.25.28-.97 1.05-1.17 2.56-.2 1.52.73 2.97.83 3.16.1.19 1.57 2.4 3.81 3.37.54.23 1.01.37 1.36.47.6.17 1.15.15 1.58.09.49-.07 1.68-.69 1.91-1.35.24-.67.24-1.24.16-1.35-.07-.12-.26-.2-.55-.34z"/>
    </svg>
);
