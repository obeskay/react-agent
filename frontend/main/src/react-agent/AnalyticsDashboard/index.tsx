
import React from 'react';
import { Box, Tabs, TabsContent } from '@react-agent/shadcn-ui'
import Header from './Header';
import SubHeader from './SubHeader';
import TabNav from './TabNav';
import SmallCardsContainer from './SmallCardsContainer';
import BigCardsContainer from './BigCardsContainer';

interface AnalyticsDashboardPageProps {
  teams: Array<{ name: string, id: string }>;
  selectedTeamId: string;
  onTeamSwitch: (teamId: string) => void;
  dashboardNavItems: Array<{ label: string, to: string }>;
  onSearch: (searchTerm: string) => void;
  user: { name: string, image: string, onLogout: () => void, onChangePassword: () => void, onProfile: () => void };
  subHeaderTitle?: string;
  onDateRangeChange?: (fromDate: Date, toDate: Date) => void;
  tabs: Array<{ label: string, value: string }>;
  defaultTab?: string;
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
}

const AnalyticsDashboardPage: React.FC<AnalyticsDashboardPageProps> = (props: AnalyticsDashboardPageProps) => {
  const [tabValue, setTabValue] = React.useState(props.defaultTab || props.tabs[0].value);

  return (
    <Box className="flex flex-col md:flex min-h-screen text-black">
      <Header {...props} />
      <SubHeader title={props.subHeaderTitle} />
      <Tabs defaultTab={props.defaultTab}>
        <TabNav tabs={props.tabs} onTabChange={setTabValue} />
        <TabsContent value={tabValue}>
          <SmallCardsContainer 
            totalRevenueData={props.totalRevenueData} 
            subscriptionCardData={props.subscriptionCardData}
            salesCardData={props.salesCardData}
            activeNowCardData={props.activeNowCardData}
          />
          <BigCardsContainer />
        </TabsContent>
      </Tabs>
    </Box>
  );
}; 

export default AnalyticsDashboardPage;
