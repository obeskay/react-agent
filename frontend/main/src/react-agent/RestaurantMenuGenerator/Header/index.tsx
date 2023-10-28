import React from 'react';
import { Button } from '@react-agent/shadcn-ui';
import MenuNav from './MenuNav';

interface HeaderProps {
  stages: string[];
  currentStage: string;
  onStageSelect: (selectedStage: string) => void;
}

const RestaurantSwitcher: React.FC = () => {
  return <div>{/* Restaurant switcher content */}</div>;
};

const HeaderActions: React.FC = () => {
  return <div>{/* Header actions content */}</div>;
};

const Header: React.FC<HeaderProps> = ({ stages, currentStage, onStageSelect }) => {
  return (
    <div className="h-16 flex items-center px-4 border-b">
      <RestaurantSwitcher />
      <MenuNav currentStage={currentStage} stages={stages} onStageSelect={onStageSelect} />
      <HeaderActions />
      <Button>Example Button</Button>
    </div>
  );
};

export default Header;
