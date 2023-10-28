
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage, Box, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@react-agent/shadcn-ui';

export interface RecentSalesCardProps {
  user: {
    name: string;
    avatar: string;
  };
  date: string;
  amount: number;
};

const RecentSalesCard = ({user, date, amount}: RecentSalesCardProps) => {
 return (
    <Card className="recent-sales-card">
        <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
        </CardHeader>
        <CardContent>
            <Avatar>
                <AvatarImage src={user.avatar} alt={user.name}/>
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <CardDescription>{user.name}</CardDescription>
            <Box>{date}</Box>
            <Box>${amount}</Box>
        </CardContent>
    </Card>
 );
};

export default RecentSalesCard;
