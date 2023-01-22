import React from 'react';
import {
  Box,
  Collapse,
  Divider,
  IconButton,
} from '@mui/material';
import {
  ExpandMore,
} from '@mui/icons-material';
import { makeStyles } from "tss-react/mui";
import SideBarRow from '../SideBarRow';

const useStyles = makeStyles()(
  theme => ({
    switchContainer: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary.main,
      width: '100%',
      position: 'fixed',
      top: 80,
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 0,
      padding: theme.spacing(1, 2),
      borderBottom: `${theme.palette.grey[200]} solid thin`,
      minHeight: 100,
      filter: `drop-shadow(0px 5px 15px white)`,
    },
    arrow: {
      transitionDuration: ["3s"],
    },
    arrowRotate: {
      transform: 'rotate(180deg)',
      transitionDuration: ["3s"],
    },
    iconButton: {
      padding: 0,
      color: theme.palette.text.primary,
    },
  })
)

interface SideBarMobileProps {
  toggleCollapse : () => void;
  collapseState : boolean;
}

const SideBarMobile: React.FC<SideBarMobileProps> = ({ toggleCollapse, collapseState }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.switchContainer}>
      <Collapse in={collapseState} style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <Box textAlign="center">
          HEADER
        </Box>
      </Collapse>
      <Collapse in={!collapseState} style={{ width: '100%' }}>
        <Box mt={1}>
        <SideBarRow
          onClick={toggleCollapse}
          title={"MY NAME1"}
          selected={true}
          visited={true}
          alert={"warning"}
          linked={true}
        />
        </Box>
        <Box py={2} position="relative">
          <Divider />
        </Box>
        <Box>
          <SideBarRow
            onClick={toggleCollapse}
            title={"MY NAME2"}
            key={100}
            selected={true}
            visited={true}
            alert={"error"}
            linked={true}
          />
        </Box>
      </Collapse>
      <IconButton onClick={toggleCollapse} className={classes.iconButton}>
        <ExpandMore className={collapseState ? classes.arrow : classes.arrowRotate}></ExpandMore>
      </IconButton>
    </Box>
  );
};

export default SideBarMobile;