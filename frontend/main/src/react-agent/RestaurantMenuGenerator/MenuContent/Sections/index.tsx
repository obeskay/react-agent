import React, { useState } from 'react';
import { Box, Button, Card, Typography } from '@react-agent/shadcn-ui';

// Define the types for a single dish
interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
}

// Define the types for the props passed to the Sections component
interface SectionsProps {
  dishes: Dish[];
}

const Sections: React.FC<SectionsProps> = ({ dishes }) => {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const handleSelectDish = (dish: Dish) => {
    setSelectedDish(dish);
  };

  return (
    <Box className="flex flex-col space-y-2">
      <Typography variant="h2">Menu</Typography>
      <div className="grid grid-gap-4 md:grid-cols-2 lg:grid-cols-4">
        {dishes.map((dish) => (
          <Card key={dish.id}>
            <Typography variant="h3">{dish.name}</Typography>
            <Typography variant="body">{dish.description}</Typography>
            <Typography variant="body">{dish.price}</Typography>
            <Button onClick={() => handleSelectDish(dish)}>Edit</Button>
          </Card>
        ))}
      </div>
      {selectedDish && (
        <Box>
          <Typography variant="h2">Preview</Typography>
          <Card>
            <Typography variant="h3">{selectedDish.name}</Typography>
            <Typography variant="body">{selectedDish.description}</Typography>
            <Typography variant="body">{selectedDish.price}</Typography>
          </Card>
        </Box>
      )}
    </Box>
  );
};

export default Sections;
