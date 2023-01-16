import React, { 
  useState, useEffect, useCallback, useMemo,
} from 'react';
import { 
  Routes, Route, useNavigate, useLocation,
} from 'react-router-dom';
import {
  Box, Grid, Theme, SxProps,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TabBar } from '../../../components';
import { TabDetail } from '../../../components/TabBar/TabBar-view';
import HomeRoutes from './Routes';

const sxContainer: SxProps<Theme> = (theme) => ({
  padding: theme.spacing(0, 4, 4, 4),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
    maxWidth: 1080,
    margin: 'auto',
  },
});

const StartHere: React.FC = () => {
  const { t } = useTranslation('App.Dashboard.Tabs');
  const navigate = useNavigate();
  const location = useLocation();
  const isDesktop = true;   // TODO : CHeck if we are in desktop or not

  const tabs = useMemo((): TabDetail[] => (
    [
      {
        tabName: isDesktop ? t('Home') : t('HomeMobile'),
        route: '/home',
        disabled: false,
      },
      {
        tabName: isDesktop ? t('Counter') : t('CounterMobile'),
        route: '/counter',
        disabled: false,
      },
      {
        tabName: isDesktop ? t('CreateList') : t('CreateListMObile'),
        route: '/createlist',
        disabled: false,
      },
      {
        tabName: isDesktop ? t('SignupFLow') : t('SignupFLowMobile'),
        route: '/signup',
        disabled: false,
      },
    ]
  ), [t, isDesktop]);

  const loadTab = useCallback(() => {
    const tabIndex = tabs.findIndex(tab => location.pathname.includes(tab.route));
    return tabIndex !== -1 ? tabIndex : 0;
  }, [tabs, location.pathname]);

  const [selectedTab, setSelectedTab] = useState(loadTab());
  const onChangeTab = (value: number) => navigate(`${tabs[value].route ?? '/'}`);

  useEffect(() => {
    setSelectedTab(loadTab);
  }, [loadTab]);

  return (
    <Box sx={sxContainer}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        rowSpacing={isDesktop ? 2 : 4}
      >
        <Grid item>
          <Box mt={isDesktop ? 6 : 0}>
            <TabBar
              tabs={tabs}
              selectedTab={selectedTab}
              isDesktop={isDesktop}
              onChange={onChangeTab}
            />
          </Box>
        </Grid>
        <Grid item container>
          <Routes>
            <Route path="*">
              {HomeRoutes.map(route => (
                <Route key={route.path} {...route} />
              ))}
            </Route>
          </Routes>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StartHere;
