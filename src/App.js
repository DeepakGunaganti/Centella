
import React, { useState, useEffect } from 'react';
import MoleculeVisualization from './components/MoleculeVisualization';


function App() {
  const [moleculeData, setMoleculeData] = useState('');

  useEffect(() => {
    // Fetch the PDB file content
    fetch('/moleculeData/Water.pdb')
      .then((response) => response.text())
      .then((pdbData) => setMoleculeData(pdbData))
      .catch((error) => console.error('Error fetching PDB data:', error));
  }, []);

  return (
    <div>
      <h1>Drug Molecule Visualization and Analysis Tool</h1>
      <MoleculeVisualization moleculeData={moleculeData} />
   
    </div>
  );
}

export default App;
