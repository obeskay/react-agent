
import React from 'react';
import { Box, Card, CardContent, CardHeader, CardTitle } from '@react-agent/shadcn-ui'; 

export interface SubscriptionsCardProps {
    totalRevenue: number;
    numberOfSubscriptions: number;
    sales: number;
    activeUsers: number;
};

const SubscriptionsCard = ({ totalRevenue, numberOfSubscriptions, sales, activeUsers }: SubscriptionsCardProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Analytics Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
                <Box className="p-4">
                    <h2>Total Revenue: {totalRevenue}</h2>
                    <h2>Number of Subscriptions: {numberOfSubscriptions}</h2>
                    <h2>Sales: {sales}</h2>
                    <h2>Active Users: {activeUsers}</h2>
                </Box>
            </CardContent>
        </Card>
    );
};

export default SubscriptionsCard;
