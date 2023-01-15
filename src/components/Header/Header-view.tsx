import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'
import { Typography, SxProps, Theme, Box } from '@mui/material';
import Language from './components/Language/Language';
import { useTranslation } from 'react-i18next';

const sxToolbar: SxProps<Theme> = (theme) => ({
  display: 'grid',
  gridTemplateColumns: '1fr auto auto',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    pl: 1,
    pr: 1,
  },
});

const sxTitle: SxProps<Theme> = (theme) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.caption.fontSize,
  },
});

const HeaderView: React.FC = () => {
  const { t } = useTranslation('App.Header');

  return (
    <>
        <AppBar>
          <Toolbar sx={sxToolbar}>
            <Typography sx={sxTitle} noWrap>{t('Title')}</Typography>
            <Language />
          </Toolbar>
        </AppBar>
    </>
  );
};

export default HeaderView;
