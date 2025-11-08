
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} PLINFO. Tous droits réservés.</p>
        <p className="text-sm mt-2">12 ter rue des mathurins, 91570 Bièvres</p>
      </div>
    </footer>
  );
};

export default Footer;
