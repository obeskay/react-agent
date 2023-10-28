
import React from 'react';
import AnalyticsDashboardPage from './index';

// Mock Data
const teams = [
 { name: 'Team A', id: '1' },
 { name: 'Team B', id: '2' },
];

const dashboardNavItems = [
 { label: 'Overview', to: '/overview' },
 { label: 'Sales', to: '/sales' },
];

const user = {
 name: 'User Name', 
 image: 'https://example.com/images/user.jpeg', 
 onLogout: () => console.log('Logout'), 
 onChangePassword: () => console.log('Change Password'), 
 onProfile: () => console.log('Profile')
};

const tabs = [
 { label: 'Monthly', value: 'monthly' },
 { label: 'Annual', value: 'annual' },
];

const totalRevenueData = [
 { name: 'Jan', total: 5000 },
 { name: 'Feb', total: 7000 },
];

const subscriptionCardData = {
 totalRevenue: 12000,
 numberOfSubscriptions: 200,
 sales: 100,
 activeUsers: 3000,
};

const salesCardData = [
 { title: 'Monthly Sales', salesData: 5000 },
 { title: 'Annual Sales', salesData: 8000 },
];

const activeNowCardData = {
 title: 'Active Now',
 content: 'You have 200 active users right now.'
};

// AnalyticsDashboardPageDemo Component
const AnalyticsDashboardPageDemo = () => {
 return (
 <AnalyticsDashboardPage 
  teams={teams}
  selectedTeamId={teams[0].id}
  onTeamSwitch={(teamId: string) => console.log(`Switched to team: ${teamId}`)}
  dashboardNavItems={dashboardNavItems}
  onSearch={(searchTerm: string) => console.log(`Search: ${searchTerm}`)}
  user={user}
  subHeaderTitle="Analytics"
  onDateRangeChange={(fromDate: Date, toDate: Date) => console.log(`Date Range: ${fromDate} - ${toDate}`)}
  tabs={tabs}
  defaultTab={tabs[0].value}
  totalRevenueData={totalRevenueData}
  subscriptionCardData={subscriptionCardData}
  salesCardData={salesCardData}
  activeNowCardData={activeNowCardData}
 />
 );
};

export default AnalyticsDashboardPageDemo;
