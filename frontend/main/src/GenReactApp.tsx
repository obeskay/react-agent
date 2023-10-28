import { BrowserRouter } from 'react-router-dom';
import '@react-agent/shadcn-ui/dist/output.css';
import '../dist/output.css';
import QRCodeGenerator from './react-agent/QRCodeGenerator2';

// Example of generated React component from the JSON composition
const DashboardExample = () => {
  return null;
};

// Example of generated React component from the JSON composition
const SaasCrmLandingPageExample = () => {
  return null;
};

// Uncomment after implementing the AnalyticsDashboard component (yarn backend:dev (read README.md))
// You might need to do some debugging as the generated code is not perfect nor production ready yet
const AnalyticsDashboard = () => {
  return null;
};

function App() {
  const headerProps = {
    restaurants: [
      { id: 'example1', name: 'Example1' },
      { id: 'example2', name: 'Example2' },
    ],
    activePage: 'menuContent',
    selectedRestaurant: 'example2',
    onRestaurantChange: (restaurantId: string) => {
      console.log('Updated restaurant id: ' + restaurantId);
    },
    onSave: () => {
      console.log('Saved');
    },
    onProfile: () => {
      console.log('Profile');
    },
  };

  const menuContentProps = {
    menuName: 'My menu',
    setMenuName: (menuName: string) => {
      console.log('Updated menu name: ' + menuName);
    },
    logo: null as any,
    setLogo: (logo: File) => {
      console.log('Updated logo: ' + logo.name);
    },
    dishes: [{ name: 'Chicken', description: 'Lorem ipsum', price: 12 }],
    onAddDish: () => {
      console.log('Added dish');
    },
    onUpdateDish: (index: number, dish: any) => {
      console.log('Updated dish at index ' + index + ' to ' + dish);
    },
    onDeleteDish: (index: number) => {
      console.log('Deleted dish at index: ' + index);
    },
  };

  return (
    <>
      <BrowserRouter>
        <div className="h-screen">
          <QRCodeGenerator headerProps={headerProps} menuContentProps={menuContentProps} />
          {/* <DashboardExample /> */}
          {/* <SaasCrmLandingPageExample /> */}
          {/* <AnalyticsDashboard /> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
