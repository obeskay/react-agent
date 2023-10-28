
import React, { useState } from 'react';

interface Dish {
  id: string;
  name: string;
  price: string;
  description: string;
}

export interface DishCardsContainerProps {
  initialDishes?: Dish[];
  onDishesChange?: (dishes: Dish[]) => void;
};

const DishCardsContainer: React.FC<DishCardsContainerProps> = ({ initialDishes, onDishesChange }) => {
  const [dishes, setDishes] = useState<Dish[]>(initialDishes || []);

  // Function to handle dish deletion
  function handleDeleteDish(id: string) {
    const newDishes = dishes.filter(dish => dish.id !== id);
    setDishes(newDishes);
    onDishesChange && onDishesChange(newDishes);
  }

  // Function to handle dish addition
  function handleAddDish() {
    let newDish = {
      id: Math.random().toString(36).substring(7),
      name: '',
      price: '',
      description: '',
    };
    setDishes(oldDishes => [...oldDishes, newDish]);
  }

  // Function to handle dish update
  function handleUpdateDish(id: string, updatedDish: Dish) {
    const newDishes = dishes.map(dish => dish.id === id ? updatedDish : dish);
    setDishes(newDishes);
    onDishesChange && onDishesChange(newDishes);
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {dishes.map(dish => (
        <div key={dish.id} className="card">
          <div className="card-header">
            <input
              type="text"
              placeholder="Dish Name"
              value={dish.name}
              onChange={(e) => handleUpdateDish(dish.id, { ...dish, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Price"
              value={dish.price}
              onChange={(e) => handleUpdateDish(dish.id, { ...dish, price: e.target.value })}
            />
          </div>

          <div className="card-body">
            <textarea
              placeholder="Description"
              value={dish.description}
              onChange={(e) => handleUpdateDish(dish.id, { ...dish, description: e.target.value })}
            />
          </div>

          <div className="card-footer">
            <button onClick={() => handleDeleteDish(dish.id)}>Delete</button>
          </div>
        </div>
      ))}

      <button onClick={handleAddDish}>Add New Dish</button>
    </div>
  );
};

export default DishCardsContainer;
