
import React from 'react';
import { Box } from '@react-agent/shadcn-ui';
import OverviewCard from './OverviewCard';
import RecentSalesCard from './RecentSalesCard';

export interface BigCardsContainerProps {};

const BigCardsContainer: React.FC<BigCardsContainerProps> = (props: BigCardsContainerProps) => {
  return (
    <Box className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Box className="col-span-4 p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
        <OverviewCard/>
      </Box>
      <Box className="col-span-3 p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
        <RecentSalesCard/>
      </Box>
    </Box>
  );
};

export default BigCardsContainer;
