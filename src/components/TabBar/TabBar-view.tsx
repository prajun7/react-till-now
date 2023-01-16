import React from 'react';
import { 
    Tab, Tabs, Typography, SxProps, Theme
} from '@mui/material';

const sxTabContainer: SxProps<Theme> = (theme) => ({
    position: 'relative',
    zIndex: 10,
});

const sxIndicator: SxProps<Theme> = (theme) => ({
    backgroundColor: theme.palette.primary.main,
});

type TabDetail = {
  tabName: string;
  route: string;
  disabled?: boolean;
};

interface TabBarProps {
  tabs: TabDetail[];
  selectedTab: number;
  onChange: (value: number) => void;
}

const TabBar: React.FC<TabBarProps> = ({
  tabs,
  selectedTab,
  onChange,
}) => {

  return (
    <Tabs
      sx={sxTabContainer}
      classes={{ indicator: 'grey' }}
      value={selectedTab}
      variant={'standard'}
      onChange={(_, value) => onChange(value)}
    >
      {tabs.filter(t => !t.disabled).map(t => (
        <Tab
          key={t.tabName}
          label={<Typography variant="subtitle1">{t.tabName}</Typography>}
          disableRipple
        />
      ))}
    </Tabs>
  );
};

export type { TabDetail };
export default TabBar;
