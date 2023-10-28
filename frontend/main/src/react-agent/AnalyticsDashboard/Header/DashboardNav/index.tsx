
import React from 'react';
import { NavItem } from '@react-agent/shadcn-ui';

export interface DashboardNavProps {
  items: Array<{label: string, route: string}>;
};

const DashboardNav = ({items}: DashboardNavProps) => {
 return (
   <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
     {items.map((item, index) => (
       <NavItem key={index} label={item.label} route={item.route} />
     ))}
   </nav>
 );
};

export default DashboardNav;
