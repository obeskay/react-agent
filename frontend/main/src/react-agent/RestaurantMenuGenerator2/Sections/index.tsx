
import React from 'react';

// Assuming the UI components exist in our internal library
import { DishCardsContainer, DesignPreview } from '@react-agent/shadcn-ui';

// Interfaces for the dishes
export interface IDish {
    name: string;
    description: string;
    price: string;
}

export interface SectionsProps {
    dishes: IDish[]; // Array of dishes to display
    onDishChange: (dishIndex: number, updatedDish: IDish) => void; // Function to update a dish
    onDishDelete: (dishIndex: number) => void; // Function to delete a dish
}

const Sections = (props: SectionsProps) => {

    const { dishes, onDishChange, onDishDelete } = props;

    const handleDishChange = (dishIndex: number, updatedDish: IDish) => {
        onDishChange(dishIndex, updatedDish);
    }

    const handleDishDelete = (dishIndex:number) => {
        onDishDelete(dishIndex);
    }

    return (
      <div className="flex flex-col space-y-4 p-4">
        <div className="grid grid-cols-3 gap-4">
          {dishes.map((dish, index) => (
            <DishCardsContainer
                key={index}
                dish={dish}
                onChange={(updatedDish: IDish) => handleDishChange(index, updatedDish)}
                onDelete={() => handleDishDelete(index)}
            />
          ))}
        </div>
        <div className="flex justify-center items-center p-4">
            <DesignPreview dishes={dishes} />
        </div>
      </div>
    );
};

export default Sections;
