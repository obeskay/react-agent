
import React from 'react';
import { Button } from '@react-agent/shadcn-ui';

export interface MenuNavProps {
  currentStage: string;
  stages: string[];
  onStageSelect: (selectedStage: string) => void;
}

const MenuNav: React.FC<MenuNavProps> = ({currentStage, stages, onStageSelect}) => {
 return (
  <div className="flex space-x-4 p-3 bg-gray-100">
    {stages.map(stage => (
      <Button 
        key={stage}
        onClick={() => onStageSelect(stage)}
        className={`knob ${currentStage === stage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
      >
        {stage}
      </Button>
    ))}
  </div>
 );
};

export default MenuNav;
