import React from 'react';
import { Button } from '@react-agent/shadcn-ui';

export interface HeaderActionsProps {
  onSave: () => void; // Callback function to handle saving
  onProfile: () => void; // Callback function to handle profile open
}

const HeaderActions: React.FC<HeaderActionsProps> = ({ onSave, onProfile }) => {
  return (
    <div className="flex items-center space-x-2">
      <Button color="primary" size="sm" onClick={onSave}>
        Save
      </Button>
      <Button color="secondary" size="sm" onClick={onProfile}>
        Profile
      </Button>
    </div>
  );
};

export default HeaderActions;
