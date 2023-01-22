import React from 'react';
import SideBarDesktop from './Desktop/SideBarDesktop-view';
import SideBarMobile from './Mobile/SideBarMobile-view';

const SidebarView: React.FC = () => {
  const isMobile = false;

  if (isMobile) {
    return (
      <SideBarMobile />
    );
  }

  return (
    <SideBarDesktop />
  );
};

export default SidebarView;
