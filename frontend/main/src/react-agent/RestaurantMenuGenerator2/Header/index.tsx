import React from 'react';
import { Box, Button } from '@react-agent/shadcn-ui';

export interface HeaderProps {
  currentRestaurant: string;
  restaurants: string[];
  onRestaurantChange: (name: string) => void;
  currentStage: 'design' | 'review' | 'download';
  onStageChange: (stage: 'design' | 'review' | 'download') => void;
  onSave: () => void;
  onAccountDetails: () => void;
}

const Header = (props: HeaderProps) => {
  const { currentRestaurant, restaurants, onRestaurantChange, currentStage, onStageChange, onSave, onAccountDetails } =
    props;

  return (
    <Box className="flex justify-between items-center p-4">
      {/* RestaurantSwitcher */}
      <Box className="flex w-48 h-12 items-center justify-center">
        <select
          title={
            'Select a restaurant from the list below. ' +
            'You can edit, create or remove restaurants from the left menu.'
          }
          value={currentRestaurant}
          onChange={(e) => onRestaurantChange(e.target.value)}
        >
          {restaurants.map((restaurant, index) => (
            <option key={index} value={restaurant}>
              {restaurant}
            </option>
          ))}
        </select>
      </Box>

      {/* MenuNav */}
      <Box className="flex justify-center items-center space-x-2">
        <Button
          className={currentStage === 'design' ? 'bg-secondary text-white' : 'bg-white text-secondary'}
          onClick={() => onStageChange('design')}
        >
          Design
        </Button>
        <Button
          className={currentStage === 'review' ? 'bg-secondary text-white' : 'bg-white text-secondary'}
          onClick={() => onStageChange('review')}
        >
          Review
        </Button>
        <Button
          className={currentStage === 'download' ? 'bg-secondary text-white' : 'bg-white text-secondary'}
          onClick={() => onStageChange('download')}
        >
          Download
        </Button>
      </Box>

      {/* HeaderActions */}
      <Box className="flex justify-end items-center space-x-2">
        <Button onClick={onSave}>Save</Button>
        <Button onClick={onAccountDetails}>Account</Button>
      </Box>
    </Box>
  );
};

export default Header;
