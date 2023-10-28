import { MenubarItem } from '@react-agent/shadcn-ui';
import DishCardsContainer, { Dish } from '../DishCardsContainer';
import MenuHeader from '../MenuHeader';
import HeaderActions from '../../Header/HeaderActions';
import MenuNav from '../../Header/MenuNav';
import RestaurantSwitcher from '../../Header/RestaurantSwitcher';

interface DesignPreviewProps {
  menu: {
    restaurantDetails: any;
    sections: any;
  };
  userActions: any;
  handlers: any;
}

const DesignPreview = ({ menu, userActions, handlers }: DesignPreviewProps) => {
  const { restaurantDetails, sections } = menu;
  const { saveProgress, accessAccountDetails } = userActions;
  const { addDish, editDish, deleteDish } = handlers;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
      <div className="col-span-2">
        <RestaurantSwitcher
          restaurants={[]}
          selectedRestaurant={''}
          onRestaurantChange={function (restaurant: string): void {
            throw new Error('Function not implemented.');
          }}
        />
        <MenuNav activePage={''} />
        <HeaderActions
          onSave={function (): void {
            throw new Error('Function not implemented.');
          }}
          onProfile={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>

      <div className="col-span-5">
        <MenuHeader />

        {sections?.map((section: any, index: number) => (
          <div key={index}>
            <h2 className="text-xl font-semibold">{section.title}</h2>

            <DishCardsContainer
              dishes={[]}
              onAddDish={function (): void {
                throw new Error('Function not implemented.');
              }}
              onUpdateDish={function (index: number, dish: Dish): void {
                throw new Error('Function not implemented.');
              }}
              onDeleteDish={function (index: number): void {
                throw new Error('Function not implemented.');
              }}
            />
          </div>
        ))}

        <PDFDownloadButton generatePDF={handlers.generatePDF} />
      </div>
    </div>
  );
};

export default DesignPreview;

const PDFDownloadButton = ({ generatePDF }: any) => {
  const handleDownloadPDF = () => {
    generatePDF();
  };

  return (
    <div className="bg-primary-500 hover:bg-primary-600" onClick={handleDownloadPDF}>
      Download PDF
    </div>
  );
};
