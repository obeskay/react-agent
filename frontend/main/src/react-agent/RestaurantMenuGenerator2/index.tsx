
import React, {useState} from 'react';
import { Box, Button } from '@react-agent/shadcn-ui';

import Header from './Header';
import MenuContent from './MenuContent';
import Sections from './Sections';

interface IDish {
    dish: string;
    description: string;
    price: string
};

export interface PDFMenuGeneratorPageProps {
    restaurantList: string[];
}

const PDFMenuGeneratorPage = ({ restaurantList }: PDFMenuGeneratorPageProps) => {
    const [currentRestaurant, setCurrentRestaurant] = useState(restaurantList[0]);
    const [menuItems, setMenuItems] = useState<Array<IDish>>([]);
    const [currentStage, setCurrentStage] = useState<'design' | 'review' | 'download'>('design');
    
    const handleRestaurantChange = (restaurant: string) => {
        setCurrentRestaurant(restaurant);
        // Some API call can be implemented here to fetch the menu items related to the restaurant
    }

    const handleMenuItemChange = (dishIndx: number, updatedDish: IDish) => {
        setMenuItems(prevState => 
            prevState.map((item, index) => index === dishIndx ? updatedDish : item)
        );
    }

    const handleMenuItemDelete = (dishIndex: number) => {
        setMenuItems(prevState => prevState.filter((_, index) => index !== dishIndex));
    }

    return (
        <>
            <Header
                currentRestaurant={currentRestaurant}
                restaurants={restaurantList}
                onRestaurantChange={handleRestaurantChange}
                currentStage={currentStage}
                onStageChange={setCurrentStage}
                onSave={() => console.log("Saving..") /* Add your save logic here */}
                onAccountDetails={() => console.log("Account details..") /* Add your account details logic here */}
            />
            
            {currentStage === 'design' && 
                <MenuContent
                    restaurantName={currentRestaurant}
                    restaurantLogo={""/*Assuming the logo URL is missing*/}
                    menuItems={menuItems}
                />
            }

            {currentStage === 'review' && 
                <Sections
                    dishes={menuItems}
                    onDishChange={handleMenuItemChange}
                    onDishDelete={handleMenuItemDelete}
                />
            }

            {currentStage === 'download' && 
                <Box className="fixed bottom-4 right-4 w-16 h-16">
                    <Button onClick={() => console.log("Clicked..") /* Add your PDF download logic here */}>
                        Download
                    </Button>
                </Box>
            }
        </>
    );
};

export default PDFMenuGeneratorPage;
