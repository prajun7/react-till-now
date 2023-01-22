import React from 'react';
import {
  useMediaQuery,
  useTheme,
} from '@mui/material';
import SideBarDesktop from './Desktop/SideBarDesktop-view';
import SideBarMobile from './Mobile/SideBarMobile-view';

const SidebarView: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  if (!isDesktop) {
    return (
      <SideBarMobile />
    );
  }

  return (
    <SideBarDesktop />
  );
};

export default SidebarView;
