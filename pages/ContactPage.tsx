
import React from 'react';
import { WhatsAppIcon } from '../components/icons';

const ContactPage: React.FC = () => {
  return (
    <div className="py-20 container mx-auto px-4 animate-fadeIn">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-white mb-4">
          Entrez en <span className="text-cyan-400">Contact</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Nous sommes à votre disposition pour toute question ou pour une démonstration de nos solutions.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Nos Coordonnées</h2>
          <div className="space-y-4 text-gray-300">
            <div>
              <h3 className="font-semibold text-cyan-400">Adresse Postale</h3>
              <p>PLINFO</p>
              <p>12 ter rue des mathurins</p>
              <p>91570 Bièvres, France</p>
            </div>
            <div>
              <h3 className="font-semibold text-cyan-400">WhatsApp</h3>
              <a href="https://wa.me/33662079800" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
                <WhatsAppIcon />
                <span>+33 6 62 07 98 00</span>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4">Paiement par Virement Bancaire</h2>
            <p className="text-gray-400 mb-4">Pour régler l'achat d'un agent, veuillez utiliser les coordonnées ci-dessous.</p>
            <div className="space-y-2 text-gray-300">
                <p><strong className="font-semibold text-cyan-400">Titulaire du compte :</strong> M PHILIPPE MOULIN</p>
                <p><strong className="font-semibold text-cyan-400">IBAN :</strong> FR76 3000 4019 8700 0029 4953 303</p>
                <p><strong className="font-semibold text-cyan-400">BIC (SWIFT) :</strong> BNPAFRPPMAS</p>
            </div>
          </div>

        </div>
        <div className="rounded-lg overflow-hidden shadow-2xl">
          <img 
            src="https://picsum.photos/seed/contactpage/800/600" 
            alt="Bureau moderne et accueillant" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;