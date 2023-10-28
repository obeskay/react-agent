
import React, { useState } from 'react';
import Header from './Header';
import MenuContent from './MenuContent';
import DishCardsContainer from './DishCardsContainer';
import ExportFunctionality from './ExportFunctionality';

// Define the types for the dish items
interface Dish {
  id: string;
  name: string;
  price: string;
  description: string;
}

const generatePDF: () => Promise<Blob> = async () => {
  // Placeholder function to generate PDF
  const blob = new Blob(["PDF Generated!"], { type: 'application/pdf' });
  return blob;
}

// Define the types for the PDFMenuGenerator component props
const PDFMenuGenerator: React.FC = () => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [restaurantName, setRestaurantName] = useState('');
  const [stage, setStage] = useState('');
  const stages = ['Design', 'Preview', 'Download']

  const handleDishesChange = (updatedDishes: Dish[]) => {
    setDishes(updatedDishes);
  };

  const handleStageSelect = (selectedStage: string) => {
    setStage(selectedStage);
  };

  const handleRestaurantNameChange = (name: string) => {
    setRestaurantName(name);
  };

  const handleLogoUpload = (logo: any) => {
    // handle logo upload
  }

  return (
    <div className="flex flex-col h-screen">
      <Header stages={stages} currentStage={stage} onStageSelect={handleStageSelect}/>
      <MenuContent restaurantName={restaurantName} handleRestaurantNameChange={handleRestaurantNameChange} handleLogoUpload={handleLogoUpload} dishes={dishes} />
      <DishCardsContainer initialDishes={dishes} onDishesChange={handleDishesChange} />
      <ExportFunctionality generatePdf={generatePDF} />
    </div>
  );
};

export default PDFMenuGenerator;
