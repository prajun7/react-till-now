import React from 'react';
import DashboardApp from '../Dashboard/DashboardApp';
import { Route, Routes } from 'react-router-dom';


const AppView: React.FC = () => {

  return (
    <Routes>
      <Route path="/*" element={<DashboardApp />} />
    </Routes>
  );
};

export default AppView;