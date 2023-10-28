
import React from 'react';
import { Box, Card, CardContent, CardHeader, CardTitle } from '@react-agent/shadcn-ui';

export interface SalesCardProps {
  title: string;
  salesData: number;
};

const SalesCard: React.FC<SalesCardProps> = ({ title, salesData }) => {
  return (
    <Box className="w-full sm:w-72 h-32 m-2">
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-center">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <h2 className="text-2xl font-bold">{salesData}</h2>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SalesCard;
