
import React from 'react';
import { TabsTrigger, TabsList } from '@react-agent/shadcn-ui'

export interface TabNavProps {
    tabs: Array<{ label: string, value: string }>,
    defaultTab?: string,
    onTabChange?: (value: string) => void;
};

const TabNav:React.FC<TabNavProps> = ({ tabs, defaultTab, onTabChange }) => {

    const [currentTab, setCurrentTab] = React.useState(defaultTab || tabs[0].value);

    React.useEffect(() => {
        if(onTabChange) {
            onTabChange(currentTab)
        }
    }, [currentTab, onTabChange]);

    return (
        <TabsList className="grid w-full grid-cols-2">
            {tabs.map(tab => (
                <TabsTrigger 
                    onClick={() => setCurrentTab(tab.value)} 
                    value={tab.value}
                    key={tab.value}
                    className={currentTab === tab.value ? 
                        "bg-green-600 text-white" : 
                        "bg-white text-black border border-gray-300"}
                >
                    {tab.label}
                </TabsTrigger>
            ))}
        </TabsList>
    );
};

export default TabNav;
