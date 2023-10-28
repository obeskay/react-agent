import React from 'react';
import { Box, Typography, Input } from '@react-agent/shadcn-ui';
import Sections from './Sections';

// Define the types for the MenuContent component props
interface MenuContentProps {
  restaurantName: string;
  handleRestaurantNameChange: (name: string) => void;
  handleLogoUpload: (logo: File) => void;
  dishes: any[];
}

const MenuContent: React.FC<MenuContentProps> = ({
  restaurantName,
  handleRestaurantNameChange,
  handleLogoUpload,
  dishes,
}) => {
  return (
    <Box className="flex-1 space-y-4 p-8 pt-6">
      <Box className="flex flex-col space-y-2">
        <Typography variant="h2">Restaurant Information</Typography>
        <Input
          // label="Restaurant Name"
          value={restaurantName}
          onChange={(e) => handleRestaurantNameChange(e.target.value)}
        />
        {/* <ImageUploader onUpload={handleLogoUpload} /> */}
      </Box>
      <Sections dishes={dishes} />
    </Box>
  );
};

export default MenuContent;
