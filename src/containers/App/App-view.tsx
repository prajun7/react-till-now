import React from 'react';
import DashboardApp from '../Dashboard/DashboardApp';
import { Route, Routes } from 'react-router-dom';
import {
  ThemeProvider,
  createTheme,
} from '@mui/material/styles';

const theme = createTheme();

const AppView: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/*" element={<DashboardApp />} />
      </Routes>
    </ThemeProvider>

  );
};

export default AppView;