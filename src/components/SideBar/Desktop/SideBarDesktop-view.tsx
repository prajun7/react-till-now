import React from 'react';
import {
  Box, Typography, Divider,
} from '@mui/material';
import SideBarRow from '../SideBarRow';
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(
  theme => ({
    sidebar: {
      backgroundColor: theme.palette.common.white,
      borderStyle: 'solid',
      borderColor: theme.palette.grey[200],
      borderWidth: '0px 1px 0px 0px',
      color: theme.palette.text.primary,
      minWidth: 350,
      maxWidth: 350,
      padding: theme.spacing(3),
      position: 'fixed',
      height: '100vh',
      top: 0,
      bottom: 0,
      overflowY: 'auto',
    },
  })
)

const SideBarDesktop = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.sidebar}>
      <Box height={80} display="flex" alignItems="center" mt={-3}>
        <>LOGO</>
      </Box>
      <Box mt={1} mb={2} style={{ minHeight: '125px' }}>
        <>Graphs</>
      </Box>
      <Box my={2} mx={-1}>
        <Divider light />
      </Box>
      <Box mb={1}>
        <Typography variant="subtitle1">Routing</Typography>
      </Box>
      <Box>
          <SideBarRow
            onClick={() => console.log("Click")}
            title={"MY NAME1"}
            selected={true}
            visited={false}
            alert={"warning"}
            linked={true}
        />
          <>
            <Box my={2} mx={-1}>
              <Divider light />
            </Box>
            <Box mb={1}>
              <Typography variant="subtitle1">Graphs</Typography>
            </Box>
            <SideBarRow
              onClick={() => console.log("Click")}
              title={"MY NAME2"}
              key={100}
              selected={true}
              visited={true}
              alert={"error"}
              linked={true}
            />
          </>
      </Box>
    </Box>
  );
};

export default SideBarDesktop;
