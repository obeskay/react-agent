
import React from 'react';
import { Box, Card, CardContent, CardHeader, CardTitle } from '@react-agent/shadcn-ui';
import { Bar, ComposedChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export interface TotalRevenueCardProps {
    data: Array<{ name: string, total: number }>;
}

const TotalRevenueCard = ({ data }: TotalRevenueCardProps) => {
    return (
        <Box className='m-3'>
            <Card className='p-4 rounded-lg border bg-card text-card-foreground shadow-sm'>
                <CardHeader>
                    <CardTitle>Total Revenue</CardTitle>
                </CardHeader>
                <CardContent className='h-24'>
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={data}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="total" fill="#8884d8" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </Box>
    );
};

export default TotalRevenueCard;

