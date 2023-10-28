
import React, { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Box,
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@react-agent/shadcn-ui";

export interface Team {
  id: string;
  name: string;
  avatar: string;
}

export interface TeamSwitcherProps {
  teams: Team[];
  selectedTeam: Team;
  onTeamSwitch: (team: Team) => void;
}

const TeamSwitcher = ({ teams, selectedTeam, onTeamSwitch }: TeamSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTeamSwitch = (teamID: string) => {
    const selectedTeam = teams.find((team) => team.id === teamID);
    if (selectedTeam) {
      onTeamSwitch(selectedTeam);
      setIsOpen(false);
    }
  };

  return (
    <Box className="relative">
      <Button onClick={() => setIsOpen((prev) => !prev)}>
        <Avatar>
          <AvatarImage src={selectedTeam.avatar} alt={selectedTeam.name} />
          <AvatarFallback>{selectedTeam.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <span className="ml-2">{selectedTeam.name}</span>
      </Button>

      {isOpen && (
        <Select isOpen={isOpen}>
          <SelectTrigger className="w-[180px]" />
          <SelectContent>
            {teams.map((team) => (
              <SelectItem value={team.id} key={team.id} onSelect={handleTeamSwitch}>
                <Avatar className="mr-2">
                  <AvatarImage src={team.avatar} alt={team.name} />
                  <AvatarFallback>{team.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <SelectValue>{team.name}</SelectValue>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </Box>
  );
};

export default TeamSwitcher;
