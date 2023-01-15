import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Icon, Box, IconButton, Grid, Menu, MenuItem, Typography,
} from '@mui/material';
import i18n from '../../../../modules/I18n/index';
import Session from '../../../../modules/Session';
import { SESSION_STORAGE_KEY as LanguageKey } from '../../../../modules/Language';

const Language = () => {
  const { t } = useTranslation('App.Header');
  const [anchorE1, setAnchorE1] = React.useState(null);

  const openLanguage = (event: any) => {
    setAnchorE1(event.currentTarget);
  };

  const closeLanguage = () => {
    setAnchorE1(null);
  };

  const changeLanguageToSpanish = () => {
    i18n.changeLanguage('es');
    Session.set(LanguageKey, { Language: 'es' });
    closeLanguage();
  };

  const changeLanguageToEnglish = () => {
    i18n.changeLanguage('en');
    Session.set(LanguageKey, { Language: 'en' });
    closeLanguage();
  };

  return (
    <Grid item>
      <Box>
        <IconButton onClick={openLanguage}>
          <Icon>language</Icon>
        </IconButton>
      </Box>
      <Menu
        keepMounted
        anchorEl={anchorE1}
        open={Boolean(anchorE1)}
        onClose={closeLanguage}
      >
        <MenuItem onClick={changeLanguageToEnglish}>
          <Typography>{t('English')}</Typography>
        </MenuItem>
        <MenuItem onClick={changeLanguageToSpanish}>
          <Typography>{t('Spanish')}</Typography>
        </MenuItem>
      </Menu>
    </Grid>
  );
};


export default Language;
