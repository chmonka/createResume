import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
// import { html2canvas } from 'html2canvas';

const PdfGenerator = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleGeneratePdf = () => {
    const element = containerRef.current;

    if (!element) {
      alert('No container found!');
      return;
    }

  
  };

  return (
    <div>
      <div ref={containerRef}>
        {/* Your container with elements */}
      </div>
      <button onClick={handleGeneratePdf}>Generate PDF</button>
    </div>
  );
};

export default PdfGenerator;