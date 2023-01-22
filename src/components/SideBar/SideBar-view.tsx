import React, { useState } from 'react';
import {
  useMediaQuery,
  useTheme,
} from '@mui/material';
import SideBarDesktop from './Desktop/SideBarDesktop-view';
import SideBarMobile from './Mobile/SideBarMobile-view';

interface SideBarViewProps {
  isDesktop: boolean
}

const SidebarView: React.FC<SideBarViewProps> = ({ isDesktop }) => {
  const theme = useTheme();
  //const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const [mobileCollapseState, setMobileCollapseState] = useState(true);
  const toggleCollapse = () => { setMobileCollapseState(!mobileCollapseState); };

  console.log('in sidebar view', mobileCollapseState);

  if (!isDesktop) {
    return (
      <SideBarMobile
        toggleCollapse={toggleCollapse}
        collapseState={mobileCollapseState}
      />
    );
  }

  return (
    <SideBarDesktop />
  );
};

export default SidebarView;
