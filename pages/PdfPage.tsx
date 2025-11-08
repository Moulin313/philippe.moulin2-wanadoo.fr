import React from 'react';

const PdfPage: React.FC = () => {
  return (
    <div className="py-20 container mx-auto px-4 animate-fadeIn">
       <div className="grid lg:grid-cols-2 gap-12 items-center">
         <div className="order-2 lg:order-1 mt-8 lg:mt-0">
          <img src="https://picsum.photos/seed/pdfpage/800/600" alt="Transformation de documents papier en données numériques" className="rounded-lg shadow-2xl shadow-cyan-500/10 object-cover w-full h-full" />
        </div>
        <div className="order-1 lg:order-2">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Extraction Intelligente de Données depuis vos <span className="text-cyan-400">Documents PDF</span>
          </h1>
          <p className="text-lg text-gray-400 mb-6">
            Libérez les informations captives dans vos documents PDF. Factures, relevés bancaires, contrats... Notre agent IA transforme des montagnes de PDF en données structurées et exploitables.
          </p>

          <div className="mt-6 mb-8 bg-slate-800/70 border-l-4 border-cyan-500 p-4 rounded-r-lg shadow-md">
            <h4 className="font-bold text-white">Positionnement de l'Outil</h4>
            <p className="text-gray-300 mt-2">
              Notre agent est optimisé pour l'analyse ponctuelle et l'audit de documents PDF complexes en local. Il ne vise pas à remplacer les plateformes spécialisées dans le traitement de masse récurrent (comme la récupération de factures fournisseurs), mais à fournir un outil puissant pour des opérations exceptionnelles, en analysant les fichiers importants qui alimentent les dossiers de vos clients (GED).
            </p>
          </div>

          <div className="space-y-4 text-gray-300 bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-2">Fonctionnalités Clés :</h3>
            <p><strong>✓ Traitement de Volumes Importants :</strong> Analysez des documents de plus de 2000 pages avec une rapidité et une précision exceptionnelles, directement sur votre ordinateur.</p>
            <p><strong>✓ Reconnaissance de Structure :</strong> L'IA identifie intelligemment les tableaux, les formulaires et les champs de données, même dans des mises en page complexes.</p>
            <p><strong>✓ Recherche et Synthèse :</strong> Retrouvez instantanément des informations spécifiques dans de vastes archives de documents et obtenez des synthèses de contenu.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfPage;