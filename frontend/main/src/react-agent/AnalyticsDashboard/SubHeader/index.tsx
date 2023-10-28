
import React from 'react';
import { Box, Button, Calendar, Popover, PopoverContent, PopoverTrigger } from '@react-agent/shadcn-ui';

export interface SubHeaderProps {
  title?: string;
};

const SubHeader: React.FC<SubHeaderProps> = ({ title = "Dashboard" }) => {
  return (
    <Box className="flex items-center justify-between space-y-2">
      <h2 className="text-lg font-medium">{title}</h2>
      <div className="flex items-center space-x-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-10 rounded-full p-0">
              <Calendar className="h-4 w-4" />
              <span className="sr-only">Select date range</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48">
            <Calendar />
          </PopoverContent>
        </Popover>
        <Button className="h-8 px-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">Download</Button>
      </div>
    </Box>
  );
};

export default SubHeader;
