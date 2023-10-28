import MenuHeader from '../Header';

export interface MenuContentProps {
  restaurantName: string;
  restaurantLogo: string;
  menuItems: Array<{
    dish: string;
    description: string;
    price: number;
  }>;
}

const MenuContent = ({ restaurantName, restaurantLogo, menuItems }: MenuContentProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <MenuHeader
        // className="flex items-center justify-between space-x-2 p-4"
        restaurantName={restaurantName}
        restaurantLogo={restaurantLogo}
      />
      <Sections className="flex flex-col space-y-4 p-4">
        {menuItems.map((item, index) => (
          <DishCardsContainer
            key={index}
            className="grid grid-cols-3 gap-4"
            dish={item.dish}
            description={item.description}
            price={item.price}
          />
        ))}
        <DesignPreview className="flex justify-center items-center p-4" />
      </Sections>
    </div>
  );
};

export default MenuContent;
