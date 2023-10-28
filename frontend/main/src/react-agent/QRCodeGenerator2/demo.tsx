
import React, { useState } from 'react';
import PDFMenuPage, { HeaderProps, MenuContentProps } from './PDFMenuPage';

// For demo purpose, we create some preliminary data
const demoRestaurants = [{id: '1', name: 'Restaurant 1'}, {id: '2', name: 'Restaurant 2'}];
const demoDishes = [
  { name: 'Pizza', description: 'Delicious pizza', price: 10 },
  { name: 'Burger', description: 'Yummy burger', price: 7 },
];

// Define some callback functions for demo
const onSave = () => { console.log('Save clicked'); };
const onProfile = () => { console.log('Profile clicked'); };
const onRestaurantChange = (restaurant: string) => { console.log(`Restaurant ${restaurant} selected`); };
const onAddDish = () => { console.log('Add dish clicked'); };
const onUpdateDish = (index: number) => { console.log(`Update dish ${index} clicked`); };
const onDeleteDish = (index: number) => { console.log(`Delete dish ${index} clicked`); };

const PDFMenuPageDemo = () => {
  // Use useState for demonstrating changing of props values
  const [selectedRestaurant, selectRestaurant] = useState(demoRestaurants[0].id);
  const [activePage, setActivePage] = useState('Home');
  const [menuName, setMenuName] = useState('Menu 1');
  const [logo, setLogo] = useState<File | null>(null);

  const menuContentProps: MenuContentProps = {
    menuName,
    setMenuName,
    logo,
    setLogo,
    dishes: demoDishes,
    onAddDish,
    onUpdateDish,
    onDeleteDish,
  };

  const headerProps: HeaderProps = {
    restaurants: demoRestaurants,
    selectedRestaurant,
    activePage,
    onRestaurantChange,
    onSave,
    onProfile,
  };

  return (
    <PDFMenuPage headerProps={headerProps} menuContentProps={menuContentProps} />
  );
};

export default PDFMenuPageDemo;
