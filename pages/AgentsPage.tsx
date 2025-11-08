import React from 'react';

const AgentsPage: React.FC = () => {
  const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cube 3D - Agents et Processus</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #0f172a; /* Match slate-900 */
            color: #e2e8f0; /* Match slate-200 */
            padding: 20px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
        }
        
        h1 {
            color: white;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            font-size: 1.75rem;
        }
        
        .container {
            background: #1e293b; /* Match slate-800 */
            border-radius: 15px;
            padding: 25px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            max-width: 1400px;
            width: 100%;
            border: 1px solid #334155; /* slate-700 */
        }
        
        .controls {
            margin-bottom: 15px; /* Reduced margin */
            display: flex;
            gap: 15px;
            align-items: center;
            flex-wrap: wrap;
        }
        
        .depth-selector {
            display: flex;
            gap: 10px;
            align-items: center;
        }
        
        .depth-btn {
            padding: 10px 20px;
            border: 2px solid #22d3ee; /* cyan-400 */
            background: transparent;
            color: #22d3ee; /* cyan-400 */
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s;
        }
        
        .depth-btn:hover {
            background: #22d3ee;
            color: #0f172a;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(34, 211, 238, 0.3);
        }
        
        .depth-btn.active {
            background: #22d3ee;
            color: #0f172a;
            box-shadow: 0 4px 12px rgba(34, 211, 238, 0.4);
        }
        
        .legend {
            margin-bottom: 20px;
            padding: 15px;
            background: #0f172a; /* slate-900 */
            border-radius: 8px;
            border-left: 4px solid #22d3ee; /* cyan-400 */
        }
        
        .legend h3 {
            color: #22d3ee; /* cyan-400 */
            margin-bottom: 10px;
        }
        
        .legend-content {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            font-size: 14px;
        }
        
        .legend-item {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .grid-container {
            perspective: 1500px;
            display: flex;
            justify-content: center;
            align-items: flex-start; /* Aligned to top */
            min-height: 480px; /* Reduced height */
        }
        
        .cube-wrapper {
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.5s ease;
        }
        
        .grid {
            display: grid;
            grid-template-columns: 100px repeat(4, 120px);
            grid-template-rows: 50px repeat(4, 100px);
            gap: 2px;
            position: relative;
        }
        
        .layer {
            position: absolute;
            transition: all 0.5s ease;
            top: 0;
            left: 0;
        }
        
        .layer-0 { transform: translateZ(0px); }
        .layer-1 { transform: translateZ(-60px); opacity: 0.95; }
        .layer-2 { transform: translateZ(-120px); opacity: 0.9; }
        .layer-3 { transform: translateZ(-180px); opacity: 0.85; }
        
        .cell {
            border: 1px solid #334155; /* slate-700 */
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 13px;
            font-weight: 600;
            border-radius: 8px;
            transition: all 0.3s;
            position: relative;
            overflow: hidden;
            background: #1e293b; /* slate-800 */
        }
        
        .cell:hover {
            transform: scale(1.05);
            z-index: 10;
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
            border-color: #22d3ee;
        }
        
        .header {
            background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); /* cyan shades */
            color: white;
            font-weight: bold;
            font-size: 14px;
        }
        
        .row-header {
            background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%); /* blue/indigo shades */
            color: white;
            font-weight: bold;
        }
        
        .empty {
            background: transparent;
            border: none;
        }
        
        .data-cell {
            cursor: pointer;
            position: relative;
        }
        
        .data-cell.filled {
            background: #334155; /* slate-700 */
            font-weight: bold;
            color: #e2e8f0; /* slate-200 */
        }
        
        .data-cell.empty-cell {
            background: #1e293b; /* slate-800 */
            border-style: dashed;
            border-color: #475569; /* slate-600 */
        }
        
        .agent-label {
            font-size: 11px;
            padding: 4px 8px;
            background: rgba(34, 211, 238, 0.1); /* cyan-400 with alpha */
            border-radius: 4px;
            margin: 2px;
        }
        
        .depth-indicator {
            position: absolute;
            top: 5px;
            right: 5px;
            width: 20px;
            height: 20px;
            background: #22d3ee; /* cyan-400 */
            color: #0f172a; /* slate-900 */
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            font-weight: bold;
        }
        
        .info-panel {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 15px;
            background: #0f172a; /* slate-900 */
            border: 1px solid #22d3ee;
            border-radius: 8px;
            display: none;
            z-index: 100;
            box-shadow: 0 0 20px rgba(34, 211, 238, 0.3);
        }
        
        .info-panel.active {
            display: block;
        }
        
        .rotate-controls {
            display: flex;
            gap: 10px;
        }
        
        .rotate-btn {
            padding: 8px 16px;
            background: #3b82f6; /* blue-500 */
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s;
        }
        
        .rotate-btn:hover {
            background: #6366f1; /* indigo-500 */
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <h1>Visualisation des Combinaisons d'Agents</h1>
    
    <div class="container">
        <div class="legend">
            <h3>Règles de combinaison :</h3>
            <div class="legend-content">
                <div class="legend-item"><span>📧 <strong>Mails</strong> : Rendre compte</span></div>
                <div class="legend-item"><span>📊 <strong>FEC et gestion</strong> : Initier, Enregistrer, Traiter</span></div>
                <div class="legend-item"><span>📄 <strong>PDF</strong> : Enregistrer, Traiter, Rendre compte</span></div>
                <div class="legend-item"><span>📁 <strong>Fichiers</strong> : Enregistrer, Rendre compte</span></div>
            </div>
        </div>
        
        <div class="controls">
            <div class="depth-selector">
                <strong>Profondeur :</strong>
                <button class="depth-btn active" onclick="showDepth(0)">Niveau 1</button>
                <button class="depth-btn" onclick="showDepth(1)">Niveau 2</button>
                <button class="depth-btn" onclick="showDepth(2)">Niveau 3</button>
                <button class="depth-btn" onclick="showDepth(3)">Niveau 4</button>
                <button class="depth-btn" onclick="showAllDepths()">Tout afficher</button>
            </div>
            <div class="rotate-controls">
                <button class="rotate-btn" onclick="rotateView('left')">↻ Gauche</button>
                <button class="rotate-btn" onclick="rotateView('right')">↺ Droite</button>
                <button class="rotate-btn" onclick="resetView()">⟲ Réinitialiser</button>
            </div>
        </div>
        
        <div class="grid-container">
            <div class="cube-wrapper" id="cubeWrapper">
                <!-- Niveau 1 (surface) -->
                <div class="grid layer layer-0" id="layer0">
                    <div class="cell empty"></div>
                    <div class="cell header">1. Initier</div>
                    <div class="cell header">2. Enregistrer</div>
                    <div class="cell header">3. Traiter</div>
                    <div class="cell header">4. Rendre compte</div>
                    
                    <div class="cell row-header">A. FEC et gestion</div>
                    <div class="cell data-cell filled" onclick="showInfo('A1', 0)"><div class="depth-indicator">1</div><span class="agent-label">Initier</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('A2', 0)"><div class="depth-indicator">1</div><span class="agent-label">Enregistrer</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('A3', 0)"><div class="depth-indicator">1</div><span class="agent-label">Traiter</span></div>
                    <div class="cell data-cell empty-cell"></div>
                    
                    <div class="cell row-header">B. PDF</div>
                    <div class="cell data-cell empty-cell"></div>
                    <div class="cell data-cell filled" onclick="showInfo('B2', 0)"><div class="depth-indicator">1</div><span class="agent-label">Enregistrer</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('B3', 0)"><div class="depth-indicator">1</div><span class="agent-label">Traiter</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('B4', 0)"><div class="depth-indicator">1</div><span class="agent-label">Rendre compte</span></div>
                    
                    <div class="cell row-header">C. Mails</div>
                    <div class="cell data-cell empty-cell"></div><div class="cell data-cell empty-cell"></div><div class="cell data-cell empty-cell"></div>
                    <div class="cell data-cell filled" onclick="showInfo('C4', 0)"><div class="depth-indicator">1</div><span class="agent-label">Rendre compte</span></div>
                    
                    <div class="cell row-header">D. Fichiers</div>
                    <div class="cell data-cell empty-cell"></div>
                    <div class="cell data-cell filled" onclick="showInfo('D2', 0)"><div class="depth-indicator">1</div><span class="agent-label">Enregistrer</span></div>
                    <div class="cell data-cell empty-cell"></div>
                    <div class="cell data-cell filled" onclick="showInfo('D4', 0)"><div class="depth-indicator">1</div><span class="agent-label">Rendre compte</span></div>
                </div>
                
                <!-- Niveau 2 -->
                <div class="grid layer layer-1" id="layer1" style="display:none;">
                    <div class="cell empty"></div><div class="cell header">1. Initier</div><div class="cell header">2. Enregistrer</div><div class="cell header">3. Traiter</div><div class="cell header">4. Rendre compte</div>
                    <div class="cell row-header">A. FEC et gestion</div>
                    <div class="cell data-cell filled" onclick="showInfo('A1', 1)"><div class="depth-indicator">2</div><span class="agent-label">Initier + Initier</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('A2', 1)"><div class="depth-indicator">2</div><span class="agent-label">Initier + Enregistrer</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('A3', 1)"><div class="depth-indicator">2</div><span class="agent-label">Initier + Traiter</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('A4', 1)"><div class="depth-indicator">2</div><span class="agent-label">Enregistrer + Rendre compte</span></div>
                    <div class="cell row-header">B. PDF</div>
                    <div class="cell data-cell filled" onclick="showInfo('B1', 1)"><div class="depth-indicator">2</div><span class="agent-label">Initier + Enregistrer</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('B2', 1)"><div class="depth-indicator">2</div><span class="agent-label">Enregistrer + Enregistrer</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('B3', 1)"><div class="depth-indicator">2</div><span class="agent-label">Enregistrer + Traiter</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('B4', 1)"><div class="depth-indicator">2</div><span class="agent-label">Traiter + Rendre compte</span></div>
                    <div class="cell row-header">C. Mails</div>
                    <div class="cell data-cell empty-cell"></div>
                    <div class="cell data-cell filled" onclick="showInfo('C2', 1)"><div class="depth-indicator">2</div><span class="agent-label">Enregistrer + Rendre compte</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('C3', 1)"><div class="depth-indicator">2</div><span class="agent-label">Traiter + Rendre compte</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('C4', 1)"><div class="depth-indicator">2</div><span class="agent-label">Rendre compte + Rendre compte</span></div>
                    <div class="cell row-header">D. Fichiers</div>
                    <div class="cell data-cell filled" onclick="showInfo('D1', 1)"><div class="depth-indicator">2</div><span class="agent-label">Initier + Enregistrer</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('D2', 1)"><div class="depth-indicator">2</div><span class="agent-label">Enregistrer + Enregistrer</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('D3', 1)"><div class="depth-indicator">2</div><span class="agent-label">Traiter + Enregistrer</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('D4', 1)"><div class="depth-indicator">2</div><span class="agent-label">Rendre compte + Rendre compte</span></div>
                </div>
                
                <!-- Niveau 3 -->
                <div class="grid layer layer-2" id="layer2" style="display:none;">
                     <div class="cell empty"></div><div class="cell header">1. Initier</div><div class="cell header">2. Enregistrer</div><div class="cell header">3. Traiter</div><div class="cell header">4. Rendre compte</div>
                    <div class="cell row-header">A. FEC et gestion</div>
                    <div class="cell data-cell filled" onclick="showInfo('A1', 2)"><div class="depth-indicator">3</div><span class="agent-label">Initier × 3</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('A2', 2)"><div class="depth-indicator">3</div><span class="agent-label">Initier × 2 + Enregistrer</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('A3', 2)"><div class="depth-indicator">3</div><span class="agent-label">Initier + Enregistrer + Traiter</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('A4', 2)"><div class="depth-indicator">3</div><span class="agent-label">Initier + Traiter + Rendre compte</span></div>
                    <div class="cell row-header">B. PDF</div>
                    <div class="cell data-cell filled" onclick="showInfo('B1', 2)"><div class="depth-indicator">3</div><span class="agent-label">Initier + Enregistrer × 2</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('B2', 2)"><div class="depth-indicator">3</div><span class="agent-label">Enregistrer × 3</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('B3', 2)"><div class="depth-indicator">3</div><span class="agent-label">Enregistrer × 2 + Traiter</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('B4', 2)"><div class="depth-indicator">3</div><span class="agent-label">Enregistrer + Traiter + Rendre compte</span></div>
                    <div class="cell row-header">C. Mails</div>
                    <div class="cell data-cell filled" onclick="showInfo('C1', 2)"><div class="depth-indicator">3</div><span class="agent-label">Initier + Enregistrer + Rendre compte</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('C2', 2)"><div class="depth-indicator">3</div><span class="agent-label">Enregistrer × 2 + Rendre compte</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('C3', 2)"><div class="depth-indicator">3</div><span class="agent-label">Enregistrer + Traiter + Rendre compte</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('C4', 2)"><div class="depth-indicator">3</div><span class="agent-label">Traiter + Rendre compte × 2</span></div>
                    <div class="cell row-header">D. Fichiers</div>
                    <div class="cell data-cell filled" onclick="showInfo('D1', 2)"><div class="depth-indicator">3</div><span class="agent-label">Initier + Enregistrer × 2</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('D2', 2)"><div class="depth-indicator">3</div><span class="agent-label">Enregistrer × 3</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('D3', 2)"><div class="depth-indicator">3</div><span class="agent-label">Initier + Enregistrer + Traiter</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('D4', 2)"><div class="depth-indicator">3</div><span class="agent-label">Enregistrer + Rendre compte × 2</span></div>
                </div>
                
                <!-- Niveau 4 -->
                <div class="grid layer layer-3" id="layer3" style="display:none;">
                    <div class="cell empty"></div><div class="cell header">1. Initier</div><div class="cell header">2. Enregistrer</div><div class="cell header">3. Traiter</div><div class="cell header">4. Rendre compte</div>
                    <div class="cell row-header">A. FEC et gestion</div>
                    <div class="cell data-cell filled" onclick="showInfo('A1', 3)"><div class="depth-indicator">4</div><span class="agent-label">Initier × 4</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('A2', 3)"><div class="depth-indicator">4</div><span class="agent-label">Initier × 3 + Enregistrer</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('A3', 3)"><div class="depth-indicator">4</div><span class="agent-label">Initier × 2 + Enregistrer + Traiter</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('A4', 3)"><div class="depth-indicator">4</div><span class="agent-label">Initier + Enregistrer + Traiter + Rendre compte</span></div>
                    <div class="cell row-header">B. PDF</div>
                    <div class="cell data-cell filled" onclick="showInfo('B1', 3)"><div class="depth-indicator">4</div><span class="agent-label">Initier + Enregistrer × 3</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('B2', 3)"><div class="depth-indicator">4</div><span class="agent-label">Enregistrer × 4</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('B3', 3)"><div class="depth-indicator">4</div><span class="agent-label">Enregistrer × 3 + Traiter</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('B4', 3)"><div class="depth-indicator">4</div><span class="agent-label">Enregistrer × 2 + Traiter + Rendre compte</span></div>
                    <div class="cell row-header">C. Mails</div>
                    <div class="cell data-cell filled" onclick="showInfo('C1', 3)"><div class="depth-indicator">4</div><span class="agent-label">Initier × 2 + Enregistrer + Rendre compte</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('C2', 3)"><div class="depth-indicator">4</div><span class="agent-label">Initier + Enregistrer × 2 + Rendre compte</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('C3', 3)"><div class="depth-indicator">4</div><span class="agent-label">Initier + Enregistrer + Traiter + Rendre compte</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('C4', 3)"><div class="depth-indicator">4</div><span class="agent-label">Enregistrer + Traiter + Rendre compte × 2</span></div>
                    <div class="cell row-header">D. Fichiers</div>
                    <div class="cell data-cell filled" onclick="showInfo('D1', 3)"><div class="depth-indicator">4</div><span class="agent-label">Initier × 2 + Enregistrer × 2</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('D2', 3)"><div class="depth-indicator">4</div><span class="agent-label">Initier + Enregistrer × 3</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('D3', 3)"><div class="depth-indicator">4</div><span class="agent-label">Initier × 2 + Enregistrer + Traiter</span></div>
                    <div class="cell data-cell filled" onclick="showInfo('D4', 3)"><div class="depth-indicator">4</div><span class="agent-label">Initier + Enregistrer + Rendre compte × 2</span></div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="info-panel" id="infoPanel">
        <h3 id="infoTitle" style="color:#22d3ee; margin-bottom:5px;">Information</h3>
        <p id="infoContent"></p>
    </div>
    
    <script>
        let rotateY = -20;
        
        function showDepth(depth) {
            const layers = document.querySelectorAll('.layer');
            const buttons = document.querySelectorAll('.depth-btn');
            
            buttons.forEach(btn => btn.classList.remove('active'));
            document.querySelector('.depth-selector').children[depth+1].classList.add('active');
            
            layers.forEach((layer, index) => {
                layer.style.display = (index === depth) ? 'grid' : 'none';
            });
            resetView();
        }
        
        function showAllDepths() {
            const layers = document.querySelectorAll('.layer');
            const buttons = document.querySelectorAll('.depth-btn');
            
            buttons.forEach(btn => btn.classList.remove('active'));
            buttons[4].classList.add('active');
            
            layers.forEach(layer => {
                layer.style.display = 'grid';
            });
            resetView();
        }
        
        function rotateView(direction) {
            if (!document.querySelectorAll('.depth-btn')[4].classList.contains('active')) {
                showAllDepths();
            }
             if (direction === 'left') {
                rotateY -= 15;
            } else if (direction === 'right') {
                rotateY += 15;
            }
            updateRotation();
        }
        
        function resetView() {
            rotateY = -20;
            updateRotation();
        }
        
        function updateRotation() {
            const wrapper = document.getElementById('cubeWrapper');
            wrapper.style.transform = \`scale(0.8) rotateX(-15deg) rotateY(\${rotateY}deg)\`;
        }
        
        function showInfo(cell, depth) {
            const infoPanel = document.getElementById('infoPanel');
            const infoTitle = document.getElementById('infoTitle');
            const infoContent = document.getElementById('infoContent');
            
            infoTitle.textContent = \`Cellule \${cell} - Niveau \${depth + 1}\`;
            infoContent.textContent = \`Détails sur cette combinaison d'agents...\`;
            
            infoPanel.classList.add('active');
            
            setTimeout(() => {
                infoPanel.classList.remove('active');
            }, 3000);
        }
        
        document.addEventListener('DOMContentLoaded', () => {
             showAllDepths();
             updateRotation();
        });
    </script>
</body>
</html>
`;

  return (
    <div className="py-10 container mx-auto px-4 animate-fadeIn">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-white mb-4">
          Combinez vos Agents <span className="text-cyan-400">Sans Limites</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Explorez les combinaisons possibles de nos agents pour créer des workflows sur-mesure. La visualisation ci-dessous, interactive et en 3D, illustre comment vous pouvez superposer les capacités de chaque agent pour construire des processus d'automatisation complexes et puissants, sans écrire une seule ligne de code.
        </p>
      </div>

      <div className="w-full h-[750px] bg-slate-900 rounded-lg shadow-2xl shadow-cyan-500/10 overflow-hidden border border-slate-700">
          <iframe
            srcDoc={htmlContent}
            title="Visualisation 3D interactive des combinaisons d'agents"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
      </div>
    </div>
  );
};

export default AgentsPage;