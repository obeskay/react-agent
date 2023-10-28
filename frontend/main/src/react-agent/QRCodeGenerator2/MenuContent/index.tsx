import React, { useState } from 'react';
import MenuHeader from './MenuHeader';
import DishCardsContainer from './DishCardsContainer';
import DesignPreview from './DesignPreview';

export interface Dish {
  name: string;
  description: string;
  price: number;
}

export interface MenuContentProps {
  /* Your interface implementation */
  menuName: string;
  setMenuName: (menuName: string) => void;
  logo: File;
  setLogo: (logo: File) => void;
  dishes: Dish[];
  onAddDish: () => void;
  onUpdateDish: (index: number, dish: Dish) => void;
  onDeleteDish: (index: number) => void;
}

export const MenuContent = ({
  menuName,
  setMenuName,
  logo,
  setLogo,
  dishes,
  onAddDish,
  onUpdateDish,
  onDeleteDish,
}: MenuContentProps) => {
  // State for holding the list of dishes
  const [dishList, setDishList] = useState<Dish[]>(dishes);

  // Handlers for adding, updating and deleting dishes
  const handleAddDish = () => {
    onAddDish();
    setDishList([...dishList, { name: '', description: '', price: 0 }]);
  };

  const handleUpdateDish = (index: number, dish: Dish) => {
    onUpdateDish(index, dish);
    const newDishList = [...dishList];
    newDishList[index] = dish;
    setDishList(newDishList);
  };

  const handleDeleteDish = (index: number) => {
    onDeleteDish(index);
    const newDishList = [...dishList];
    newDishList.splice(index, 1);
    setDishList(newDishList);
  };

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <MenuHeader menuName={menuName} setMenuName={setMenuName} logo={logo} setLogo={setLogo} />
      <div className="space-y-4">
        <DishCardsContainer
          dishes={dishList}
          onAddDish={handleAddDish}
          onUpdateDish={handleUpdateDish}
          onDeleteDish={handleDeleteDish}
        />
        <DesignPreview
          menu={{
            restaurantDetails: {
              dishList: [],
              name: '',
              sections: [],
            },
            sections: [],
          }}
          userActions={{
            saveProgress: () => {},
            accessAccountDetails: () => {},
          }}
          handlers={
            {
              addDish: () => {},
              editDish: () => {},
              deleteDish: () => {},
              generatePDF: () => {},
            }
            // addDish={handleAddDish}
            // editDish={() => editDish(index, dishIndex)}
            // deleteDish={() => deleteDish(index, dishIndex)}
            // generatePDF={handleGeneratePDF}
          }
        />
      </div>
    </div>
  );
};

export default MenuContent;
