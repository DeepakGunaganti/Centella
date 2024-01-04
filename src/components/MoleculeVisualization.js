
import React, { useEffect } from 'react';
import * as $3Dmol from '3dmol';

 function MoleculeVisualization({ moleculeData }) {
  useEffect(() => {
    console.log('Molecule Data:', moleculeData);
    const container = document.getElementById('molecule-container');
    console.log('Container Size:', container.clientWidth, container.clientHeight);
    const viewer = $3Dmol.createViewer('molecule-container');
  

    // const canvas = viewer.renderer.domElement;
    // const canvasWidth = canvas.width;
    // const canvasHeight = canvas.height;

    // if (canvasWidth === 0 || canvasHeight === 0) {
    //   console.error('Canvas has zero size. Check CSS styling or dimensions.');
    //   return;
    // }
  
  
   
    viewer.addModel(moleculeData, 'pdb');

    viewer.setStyle({ stick: {} });
    viewer.zoomTo();
    viewer.render();
  }, [moleculeData]);

  return (
    <div>
      <h2>Molecule Visualization</h2>
      <div id="molecule-container" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );

}


export default MoleculeVisualization;
