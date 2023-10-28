
import React from 'react';
import { 
Avatar, 
AvatarFallback, 
AvatarImage, 
Box, 
Button, 
DropdownMenu, 
DropdownMenuContent, 
DropdownMenuGroup, 
DropdownMenuItem, 
DropdownMenuLabel, 
DropdownMenuSeparator, 
DropdownMenuShortcut, 
DropdownMenuTrigger 
} from '@react-agent/shadcn-ui';

interface UserProps {
  name: string,
  image: string,
  onLogout: () => void,
  onChangePassword: () => void,
  onProfile: () => void
}

const UserNav: React.FC<UserProps> = ({ name, image, onLogout, onChangePassword, onProfile }) => {
 return (
  <Box className="p-2 pl-4 flex justify-between items-center">
    <Button className="text-xs py-1 px-2 rounded-sm text-white bg-primary-500 hover:bg-primary-600">
      Premium
    </Button>
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name.slice(0,1).toUpperCase()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>{name}</DropdownMenuLabel>
          <DropdownMenuItem onSelect={onProfile}>Profile</DropdownMenuItem>
          <DropdownMenuItem onSelect={onChangePassword}>Change Password</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={onLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </Box>
 );
};

export default UserNav;
