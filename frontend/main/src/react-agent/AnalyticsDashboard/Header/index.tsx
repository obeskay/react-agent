
import React from 'react';
import { Box, Input } from '@react-agent/shadcn-ui'
import TeamSwitcher, { Team } from './TeamSwitcher';
import DashboardNav from './DashboardNav';
import UserNav from './UserNav';

export interface HeaderProps {
  teams: Team[];
  selectedTeam: Team;
  onTeamSwitch: (team: Team) => void;
  dashboardItems: Array<{label: string, route: string}>;
  onSearch: (searchTerm: string) => void;
  user: {
    name: string,
    image: string,
    onLogout: () => void,
    onChangePassword: () => void,
    onProfile: () => void
  };
};

const Header = ({ teams, selectedTeam, onTeamSwitch, dashboardItems, onSearch, user }: HeaderProps) => {
  return (
    <Box className="flex h-16 items-center px-4 border-b">
      <TeamSwitcher
        teams={teams}
        selectedTeam={selectedTeam}
        onTeamSwitch={onTeamSwitch}
      />

      <DashboardNav items={dashboardItems} />

      <div className="ml-auto flex items-center space-x-4">
        <Input
          type="search"
          className="h-9 md:w-[100px] lg:w-[300px]"
          placeholder="Search"
          onChange={e => onSearch(e.target.value)}
        />

        <UserNav {...user} />
      </div>
    </Box>
  );
};

export default Header;
