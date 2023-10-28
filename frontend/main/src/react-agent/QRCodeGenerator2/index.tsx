
import React from 'react';
import { Box, Button, Card, Typography } from '@react-agent/shadcn-ui'
import Header from './Header';
import MenuContent from './MenuContent';

interface Dish {
  name: string;
  description: string;
  price: number;
}

interface HeaderProps {
  restaurants: {id: string, name: string}[];
  selectedRestaurant: string;
  activePage: string;
  onRestaurantChange: (restaurant: string) => void;
  onSave: () => void;
  onProfile: () => void;
}

export interface MenuContentProps {
  menuName: string;
  setMenuName: (menuName: string) => void;
  logo: File;
  setLogo: (logo: File) => void;
  dishes: Dish[];
  onAddDish: () => void;
  onUpdateDish: (index: number, dish: Dish) => void;
  onDeleteDish: (index: number) => void;
}

export interface PDFMenuPageProps {
  headerProps: HeaderProps;
  menuContentProps: MenuContentProps;
}

// Here goes your actual component
const PDFMenuPage: React.FC<PDFMenuPageProps> = ({headerProps, menuContentProps}) => {
  return (
    <Box>
      <Header {...headerProps} />
      <MenuContent {...menuContentProps} />
    </Box>
  );
};

export default PDFMenuPage;
