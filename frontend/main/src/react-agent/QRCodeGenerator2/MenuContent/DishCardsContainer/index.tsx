
import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle, 
  Button 
} from '@react-agent/shadcn-ui';

export interface Dish {
  name: string;
  description: string;
  price: number;
}

export interface DishCardsContainerProps {
  dishes: Dish[];
  onAddDish: () => void;
  onUpdateDish: (index: number, dish: Dish) => void;
  onDeleteDish: (index: number) => void;
}

const DishCardsContainer: React.FC<DishCardsContainerProps> = ({ 
  dishes, 
  onAddDish, 
  onUpdateDish, 
  onDeleteDish 
}) => {
 return (
   <Box className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
     {dishes.map((dish, index) => (
       <Card key={index}>
         <CardHeader>
           <CardTitle>{dish.name}</CardTitle>
           <Button onClick={() => onDeleteDish(index)}>Delete</Button>
         </CardHeader>
         <CardContent>
           <CardDescription>{dish.description}</CardDescription>
           {dish.price}
         </CardContent>
         <CardFooter>
           <Button onClick={() => onUpdateDish(index, dish)}>Edit</Button>
         </CardFooter>
       </Card>
     ))}
     <Button onClick={onAddDish}>Add Dish</Button>
   </Box>
 );
};

export default DishCardsContainer;
