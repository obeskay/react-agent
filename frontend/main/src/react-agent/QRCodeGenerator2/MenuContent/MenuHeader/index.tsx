import React, { useState } from 'react';
import { Button, Input } from '@react-agent/shadcn-ui';

export interface MenuHeaderProps {
  menuName?: string;
  setMenuName?: (menuName: string) => void;
  logo?: File;
  setLogo?: (logo: File) => void;
}

const MenuHeader = ({ menuName = '', setMenuName = () => {}, logo, setLogo = () => {} }: MenuHeaderProps) => {
  const [menuNameState, setMenuNameState] = useState(menuName);
  const [selectedLogo, setSelectedLogo] = useState(logo);

  const handleMenuNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMenuNameState(e.target.value);
    setMenuName(e.target.value);
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLogo(e.target.files![0]);
    setLogo(e.target.files![0]);
  };

  return (
    <div className="flex items-center justify-between space-y-2">
      <div>
        <Input value={menuNameState} onChange={handleMenuNameChange} />
      </div>
      <div>
        <Button variant="outline" onClick={() => document.getElementById('logoInput')?.click()}>
          Choose Logo
        </Button>
        <input id="logoInput" type="file" hidden onChange={handleLogoChange} />
        {selectedLogo && <img src={URL.createObjectURL(selectedLogo)} alt="logo" className="h-10 mx-3" />}
      </div>
    </div>
  );
};

export default MenuHeader;
