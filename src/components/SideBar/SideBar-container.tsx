import React from 'react';
import {
  Box, Grid, Container,  useMediaQuery, useTheme,
} from '@mui/material';
import { makeStyles } from "tss-react/mui";
import classNames from 'classnames';
import SidebarView from './SideBar-view';
import { Header } from '../../components';

const useStyles = makeStyles()(
  theme => ({
  content: {
    padding: theme.spacing(4, 4, 4, 4),
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    top: 80,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4, 2, 0, 2),
    },
  },
  shift: {
    width: 'calc(100% - 350px)',
    left: 350,
    [theme.breakpoints.down('sm')]: {
      left: 0,
      width: '100%',
      top: 180,
    },
  },
}));

interface SideBarProps {
  variant: 'sidebar' | 'full' | undefined,
  children: any,
}

interface ScreenBodyProps {
  variant: 'sidebar' | 'full' | undefined,
  isDesktop: boolean,
  children: any,
}

const ScreenBody: React.FC<ScreenBodyProps> = ({
  variant,
  isDesktop,
  children
}) => {
  const { classes } = useStyles();

  if (variant === 'full') {
    return (
      <Box width="100%" className={classes.content}>
        {children}
      </Box>
    );
  }

  return (
    <>
      <SidebarView isDesktop={isDesktop}/>
      <Box className={classNames(classes.content, classes.shift)}>
        <Container maxWidth="lg">
          <Grid container spacing={isDesktop ? 4 : 2}>
            {children}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

const SideBar: React.FC<SideBarProps> = ({
  variant='full',
  children
}) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Header />
      <ScreenBody variant={variant} isDesktop={isDesktop}>
        {children}
      </ScreenBody>
    </>
  );
};

export default SideBar;
