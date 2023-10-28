import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@react-agent/shadcn-ui';

export interface RestaurantSwitcherProps {
  restaurants: { id: string; name: string }[];
  selectedRestaurant: string;
  onRestaurantChange: (restaurant: string) => void;
}

const RestaurantSwitcher = ({ restaurants, selectedRestaurant, onRestaurantChange }: RestaurantSwitcherProps) => {
  const [active, setActive] = useState(false);

  const handleSelectRestaurant = (restaurant: string) => {
    setActive(false);
    onRestaurantChange(restaurant);
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-xl font-semibold">Select Restaurant:</span>
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {restaurants?.map(({ id, name }) => (
            <DropdownMenuItem key={id} onClick={() => handleSelectRestaurant(id)}>
              {name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default RestaurantSwitcher;
