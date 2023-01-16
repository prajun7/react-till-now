import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from '../../components';
import { StartHere } from './StartHere';

const DashboardApp: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // TODO: seems hacky, try useMatch or something, 
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <Header />
      <StartHere />
    </>
  );
};

export default DashboardApp;
