
import React from 'react';
import { Box } from '@react-agent/shadcn-ui';
import TotalRevenueCard from './TotalRevenueCard';
import SubscriptionsCard from './SubscriptionsCard';
import SalesCard from './SalesCard';
import ActiveNowCard from './ActiveNowCard';

export interface SmallCardsContainerProps {
  totalRevenueData: Array<{ name: string, total: number }>;
  subscriptionCardData: {
    totalRevenue: number;
    numberOfSubscriptions: number;
    sales: number;
    activeUsers: number;
  };
  salesCardData: {
    title: string;
    salesData: number;
  }[];
  activeNowCardData: {
    title: string;
    content: string;
  };
};

const SmallCardsContainer: React.FC<SmallCardsContainerProps> = 
  ({ totalRevenueData, subscriptionCardData, salesCardData, activeNowCardData }) => {

  return (
    <Box className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <TotalRevenueCard data={totalRevenueData} />
      <SubscriptionsCard 
        totalRevenue={subscriptionCardData.totalRevenue} 
        numberOfSubscriptions={subscriptionCardData.numberOfSubscriptions}
        sales={subscriptionCardData.sales}
        activeUsers={subscriptionCardData.activeUsers}
      />
      {salesCardData.map((data, index) => (
        <SalesCard key={index} title={data.title} salesData={data.salesData} />
      ))}
      <ActiveNowCard title={activeNowCardData.title} content={activeNowCardData.content} />
    </Box>
  );
};

export default SmallCardsContainer;
