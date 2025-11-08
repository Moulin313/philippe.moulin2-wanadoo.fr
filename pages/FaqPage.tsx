
import React, { useState } from 'react';
import { ChevronDownIcon } from '../components/icons';

interface FaqItemProps {
  question: string;
  children: React.ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 text-left"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <ChevronDownIcon className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="pb-5 pr-4 text-gray-400">{children}</div>
      </div>
    </div>
  );
};


const FaqPage: React.FC = () => {
  return (
    <div className="py-20 container mx-auto px-4 animate-fadeIn">
      <h1 className="text-4xl font-extrabold text-center text-white mb-12">
        Foire Aux <span className="text-cyan-400">Questions</span>
      </h1>
      <div className="max-w-3xl mx-auto">
        <FaqItem question="Qu'est-ce que PLINFO ?">
          PLINFO est une solution qui fournit des agents d'intelligence artificielle pour le traitement de fichiers volumineux (FEC, PDF, e-mails, etc.) en local. Nos outils sont spécifiquement conçus pour les cabinets d'expertise comptable, alliant sécurité, performance et facilité d'intégration.
        </FaqItem>
        <FaqItem question="Comment le traitement local garantit-il la sécurité ?">
          Le traitement local signifie que vos fichiers et données sensibles ne quittent jamais votre ordinateur. Ils ne sont pas envoyés sur des serveurs cloud ou tiers. Cela élimine les risques liés au transfert de données et garantit une confidentialité maximale.
        </FaqItem>
        <FaqItem question="Quels sont les prérequis système ?">
          Pour une performance optimale, notamment avec des fichiers très volumineux (FEC de plus de 100 000 lignes, PDF de 2000 pages), nous recommandons un ordinateur disposant d'au moins 8 gigaoctets (Go) de mémoire centrale (RAM).
        </FaqItem>
        <FaqItem question="Que signifie 'obligation de moyens' ?">
          L'obligation de moyens est un engagement à mettre en œuvre tous les outils et savoir-faire nécessaires pour atteindre un objectif. Nos agents ont été testés intensivement pour garantir leur efficacité. Nous nous engageons sur la qualité et la performance du programme fourni pour accomplir les tâches décrites.
        </FaqItem>
        <FaqItem question="Combien coûtent les agents ?">
          Chaque agent spécialisé (FEC, PDF, E-mails, Fichiers) est commercialisé au prix unique de 100 €.
        </FaqItem>
        <FaqItem question="Puis-je intégrer les agents à mon propre site web ?">
          Oui, absolument. Nos agents sont conçus pour être facilement intégrés dans le site de votre cabinet, vous permettant d'offrir des services d'analyse de données innovants directement à vos clients.
        </FaqItem>
        <FaqItem question="Faut-il des compétences en programmation ?">
          Non. Nos agents sont conçus pour être configurés sans code ("no-code"). Vous pouvez définir leurs tâches et leurs comportements via une interface simple et intuitive, assistée par l'IA.
        </FaqItem>
      </div>
    </div>
  );
};

export default FaqPage;
