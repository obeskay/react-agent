// Header.tsx
import React from 'react';
import RestaurantSwitcher from './RestaurantSwitcher';
import MenuNav from './MenuNav';
import HeaderActions from './HeaderActions';

export interface HeaderProps {
  restaurants: { id: string; name: string }[];
  selectedRestaurant: string;
  activePage: string;
  onRestaurantChange: (restaurant: string) => void;
  onSave: () => void;
  onProfile: () => void;
}

const Header: React.FC<HeaderProps> = ({
  restaurants,
  selectedRestaurant,
  activePage,
  onRestaurantChange,
  onSave,
  onProfile,
}) => {
  return (
    <div className="flex h-16 items-center px-4 border-b">
      <RestaurantSwitcher
        restaurants={restaurants}
        selectedRestaurant={selectedRestaurant}
        onRestaurantChange={onRestaurantChange}
      />
      <MenuNav activePage={activePage} />
      <HeaderActions onSave={onSave} onProfile={onProfile} />
    </div>
  );
};

export default Header;
