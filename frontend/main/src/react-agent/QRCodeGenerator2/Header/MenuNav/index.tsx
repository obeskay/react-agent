import React from 'react';
import { NavigationMenu, NavigationMenuItem } from '@react-agent/shadcn-ui';
import { useNavigate } from 'react-router-dom';

export interface MenuNavProps {
  activePage: string;
}

const MenuNav = ({ activePage }: MenuNavProps) => {
  // Get the history and query params from the router
  const navigate = useNavigate();

  return (
    <NavigationMenu className="flex items-center space-x-2">
      <NavigationMenuItem onClick={() => navigate('/header')}>Header</NavigationMenuItem>
      <NavigationMenuItem value={'menuContent'} onClick={() => navigate('/menuContent')}>
        Menu Content
      </NavigationMenuItem>
      <NavigationMenuItem value={'sections'} onClick={() => navigate('/sections')}>
        Sections
      </NavigationMenuItem>
      <NavigationMenuItem value={'export'} onClick={() => navigate('/export')}>
        Export
      </NavigationMenuItem>
    </NavigationMenu>
  );
};

export default MenuNav;
