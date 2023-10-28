
import React from 'react';
import { Box, Card, CardContent, CardHeader, CardTitle, Typography } from '@react-agent/shadcn-ui';

// Define the properties for the ActiveNowCard component
export interface ActiveNowCardProps {
  title: string; // e.g., "Active Now"
  content: string; // e.g., "You have 200 active users right now."
}

// Define the ActiveNowCard component
export const ActiveNowCard: React.FC<ActiveNowCardProps> = ({ title, content }) => {
  return (
    <Box className="m-4">
      <Card className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-bold">
            <Typography>{title}</Typography>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Typography className="text-base">{content}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
