
import React from 'react';
import { NavLink } from 'react-router-dom';

const AgentCard: React.FC<{ title: string; description: string; icon: string }> = ({ title, description, icon }) => (
  <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300 border border-slate-700">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-slate-700 mb-4 text-cyan-400 text-3xl">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="text-2xl font-bold text-cyan-400">100 €</div>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 text-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{backgroundImage: "url('https://picsum.photos/1920/1080?random=1&grayscale&blur=2')"}}>
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Transformez vos Données <span className="text-cyan-400">en Décisions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            PLINFO propose des agents IA performants pour traiter vos fichiers volumineux localement, en toute sécurité et avec une efficacité inégalée.
          </p>
          <NavLink
            to="/contact"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
          >
            Nous Contacter
          </NavLink>
        </div>
      </section>

      {/* Agents Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Nos Agents d'Intelligence Artificielle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AgentCard title="FEC & Infos de Gestion" description="Analysez vos Fichiers des Écritures Comptables et extrayez des informations de gestion cruciales." icon="📂" />
            <AgentCard title="Traitement PDF" description="Extrayez, structurez et analysez les données de milliers de pages de documents PDF en quelques instants." icon="📄" />
            <AgentCard title="Communication & Workflows" description="Intégrez cet agent pour automatiser les communications et orchestrer les workflows essentiels au sein de votre cabinet." icon="✉️" />
            <AgentCard title="Fichiers Divers" description="Un agent polyvalent pour traiter et organiser tout type de fichiers de données selon vos règles." icon="🗃️" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-white">Sécurité et Performance, au Cœur de votre Cabinet</h2>
                    <p className="text-gray-400 mb-6">
                        Notre technologie est conçue pour s'intégrer parfaitement à votre environnement, en garantissant la confidentialité absolue de vos données.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="text-cyan-400 mr-3 mt-1">✓</span>
                            <span><strong>Traitement 100% Local :</strong> Vos fichiers ne quittent jamais votre ordinateur. Sécurité maximale garantie.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-cyan-400 mr-3 mt-1">✓</span>
                            <span><strong>Temps d'attente réduits :</strong> Profitez de la puissance de votre machine (8 Go de RAM minimum) pour des résultats quasi instantanés.</span>
                        </li>
                         <li className="flex items-start">
                            <span className="text-cyan-400 mr-3 mt-1">✓</span>
                            <span><strong>Obligation de Moyens :</strong> Nos programmes, testés à de nombreuses reprises, sont livrés avec un engagement de performance.</span>
                        </li>
                    </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-2xl">
                    <img src="https://picsum.photos/800/600?random=2" alt="Sécurité et modernité" className="w-full h-full object-cover" />
                </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
