import React from 'react';
import classnames from 'classnames';
import {
  Box, Typography, MenuItem,
} from '@mui/material';
import {
  NotificationsNone, ChevronRight,
} from '@mui/icons-material';
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles<{selected :boolean; linked: boolean}>()(
  (theme, { selected, linked }) => ({
        visitedContainer: {
          color: theme.palette.text.secondary
        },
        container: {
          color: theme.palette.primary.main
        },
        iconBox: {
          display: "flex",
          justifyContent: "center",
          backgroundColor: theme.palette.grey[500],
          ...(selected ? {
            backgroundColor: theme.palette.text.primary,
          } : {}),
          ...(linked && !selected ? {
            backgroundColor: theme.palette.primary.main,
          } : {}),
          height: 20,
          width: 20,
          borderRadius: 25,
        },
        overflow: {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        overflowContainer: {
          overflow: 'hidden',
        },
        errorNotificationIcon: {
          color: theme.palette.error.main,
        },
        warningNotificationIcon: {
          color: theme.palette.error.light,
        },
    })
  );

  interface SidebarRowProps {
    title: string,
    onClick: () => void,
    alert: 'error'| 'warning' | undefined,
    selected: boolean,
    visited: boolean,
    linked: boolean,
  }

const SidebarRow: React.FC<SidebarRowProps> = ({
  title,
  alert,
  selected=false,
  onClick,
  visited=false,
  linked = true,
}) => {
  const { classes } = useStyles({ selected, linked });

  return (
    <Box mx={-3}>
      <MenuItem
        onClick={onClick}
        disableGutters
        className={classnames({
          [classes.container]: !visited,
          [classes.visitedContainer]: visited,
        })}
        disableRipple
        selected={selected}
      >
        <Box display="flex" px={3} alignItems="center" width="100%" height={60}>
          <Box flexGrow={1} ml={1} className={classes.overflowContainer}>
            <Typography variant="body2" className={classes.overflow}>{title}</Typography>
          </Box>
          <Box display="flex" alignItems="center" pl={1}>
            {alert && (
              <NotificationsNone
                fontSize="small"
                className={classnames({
                  [classes.errorNotificationIcon]: alert === 'error',
                  [classes.warningNotificationIcon]: alert === 'warning',
                })}
              >
              </NotificationsNone>
            )}
            <ChevronRight fontSize="small"></ChevronRight>
          </Box>
        </Box>
      </MenuItem>
    </Box>
  );
};

export default SidebarRow;

/*
  This component is the Horizontal Bar on the SideBar
  selected: When we click on that component it should be highlighted,
  visited: Keeps track of already visited containers,
*/
