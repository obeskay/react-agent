
import React from 'react';
import PDFMenuGenerator from './PDFMenuGenerator';

const PDFMenuGeneratorDemo: React.FC = () => {
  return (
    <div className="container mx-auto my-5">
      <h1 className="text-3xl font-bold mb-5 text-center">PDF Menu Generator Demo</h1>
      <PDFMenuGenerator />
    </div>
  );
}

export default PDFMenuGeneratorDemo;
