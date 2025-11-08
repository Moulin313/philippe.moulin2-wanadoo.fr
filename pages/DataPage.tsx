
import React from 'react';

const DataPage: React.FC = () => {
  return (
    <div className="py-20 container mx-auto px-4 animate-fadeIn">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Traitement Optimisé des <span className="text-cyan-400">FEC et Données de Gestion</span>
          </h1>
          <p className="text-lg text-gray-400 mb-6">
            Le Fichier des Écritures Comptables (FEC) est une mine d'or d'informations, mais sa taille peut rendre son analyse complexe et chronophage. Notre agent IA est spécifiquement conçu pour relever ce défi.
          </p>
          <div className="space-y-4 text-gray-300 bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-2">Capacités de l'agent FEC :</h3>
            <p><strong>✓ Analyse Locale et Sécurisée :</strong> Traitez des FEC de plus de 100 000 lignes directement sur votre poste, sans aucun transfert de données vers des serveurs externes.</p>
            <p><strong>✓ Détection d'Anomalies :</strong> Identifiez rapidement les incohérences, les écritures manquantes ou les erreurs potentielles pour une comptabilité irréprochable.</p>
            <p><strong>✓ Extraction d'Indicateurs Clés :</strong> Générez automatiquement des rapports et des tableaux de bord sur la santé financière de l'entreprise à partir des données brutes.</p>
            <p><strong>✓ Intégration Transparente :</strong> L'agent s'intègre à vos processus existants et peut être intégré directement dans le site de votre cabinet pour un accès simplifié pour vos clients.</p>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <img src="https://picsum.photos/seed/datapage/800/600" alt="Visualisation de données financières" className="rounded-lg shadow-2xl shadow-cyan-500/10 object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default DataPage;
