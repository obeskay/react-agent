
import React, { useEffect, useState } from 'react';
import { Button, DialogContent, DialogDescription, DialogTitle } from '@react-agent/shadcn-ui'

export interface ExportFunctionalityProps {
  generatePdf: () => Promise<Blob>; // function to generate PDF
}

const ExportFunctionality: React.FC<ExportFunctionalityProps> = ({ generatePdf }) => {
  const [isProcessing, setProcessing] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!pdfUrl) return;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'menu.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [pdfUrl]);

  const onExportClick = async () => {
    setProcessing(true);
    try {
      const pdfBlob = await generatePdf();
      setPdfUrl(URL.createObjectURL(pdfBlob));
    } finally {
      setProcessing(false);
    }
  };

  return (
    <Button 
      onClick={onExportClick} 
      disabled={isProcessing}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {isProcessing ? "Processing..." : "Export as PDF"}
    </Button>
  );
};

export default ExportFunctionality;
