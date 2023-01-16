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
  const { t } = useTranslation('App.StartHere');
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = useMemo((): TabDetail[] => (
    [
      {
        tabName: t('Home'),
        route: '/home',
        disabled: false,
      },
      {
        tabName: t('Counter'),
        route: '/counter',
        disabled: false,
      },
      {
        tabName: t('List'),
        route: '/createlist',
        disabled: false,
      },
      {
        tabName: t('Signup'),
        route: '/signup',
        disabled: false,
      },
    ]
  ), [t]);

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
        rowSpacing={ 2 }
      >
        <Grid item>
          <Box mt={ 6 }>
            <TabBar
              tabs={tabs}
              selectedTab={selectedTab}
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
