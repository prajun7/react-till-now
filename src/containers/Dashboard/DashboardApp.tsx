import React, { useEffect } from 'react';
import {
  Route, Routes, useNavigate, useLocation, matchPath,
} from 'react-router-dom';
import { StartHere } from './StartHere';
import Home from '../Home';
import SideBar from '../../components/SideBar/SideBar-container';

type route = {
  path: string;
  component: React.FC<object>;
  exact: boolean;
  variant: 'full' | 'sidebar' | undefined
};

const DashboardApp: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const routes: route[] = [
    {
      path: '/react-till-now/',
      component: Home,
      exact: true,
      variant: 'sidebar',
    },
    {
      path: '/react-till-now/starthere',
      component: StartHere,
      exact: true,
      variant: 'sidebar',
    }
  ];

  // useEffect(() => {
  //   // TODO: seems hacky, try useMatch or something,
  //   if (location.pathname === '/') {
  //     navigate('/');
  //   }
  // }, [location.pathname, navigate]);

  const currentRoute = routes.find(
    route => matchPath(route, location.pathname),
  );
  console.log(currentRoute);
    console.log(location.pathname);

  return (
    <>
      <SideBar variant={currentRoute?.variant}>
        <Routes>
            {routes.map(route => (
              <Route
                key={route.path}
                {...route}
              />
            ))}
        </Routes>
        {/* <StartHere /> */}
      </SideBar>
    </>
  );
};

export default DashboardApp;
