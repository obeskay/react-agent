
import React from 'react';
import { Recharts, Card, CardContent, CardHeader, CardTitle } from '@react-agent/shadcn-ui';

export interface OverviewCardProps {};

const OverviewCard: React.FC<OverviewCardProps> = (props) => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    }
  ];

  return (
    <Card className="col-span-4 p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
      <CardHeader className="w-40 h-8 mb-4">
        <CardTitle>Page Views</CardTitle>
      </CardHeader>
      <CardContent>
        <Recharts.ResponsiveContainer width="100%" height="80%">
          <Recharts.BarChart data={data}>
            <Recharts.CartesianGrid strokeDasharray="3 3" />
            <Recharts.XAxis dataKey="name" />
            <Recharts.YAxis />
            <Recharts.Tooltip />
            <Recharts.Legend />
            <Recharts.Bar dataKey="pv" fill="#8884d8" />
            <Recharts.Bar dataKey="uv" fill="#82ca9d" />
          </Recharts.BarChart>
        </Recharts.ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
