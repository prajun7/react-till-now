import React from 'react';
import classnames from 'classnames';
import {
  Box, Typography, Icon, MenuItem,
} from '@mui/material';
import { makeStyles } from "tss-react/mui";

import otherAssetsIcon from '../../../../images/otherassetsicon.svg';

const useStyles = makeStyles<{selected :boolean; linked: boolean}>()(
  (theme, { selected, linked }) => ({
        disabledContainer: {
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
    balance: number,
    onClick: () => void,
    alert: 'error'| 'warning' | undefined,
    selected: boolean,
    disabled: boolean,
    otherAsset: boolean,
    linked: boolean,

  }

const SidebarRow: React.FC<SidebarRowProps> = ({
  title,
  balance,
  alert,
  selected=false,
  onClick,
  disabled=false,
  otherAsset=false,
  linked = true,
}) => {
  const { classes } = useStyles({ selected, linked });

  return (
    <Box mx={-3}>
      <MenuItem
        onClick={onClick}
        disableGutters
        className={classnames({
          [classes.container]: !disabled,
          [classes.disabledContainer]: disabled,
        })}
        disableRipple
        selected={selected}
      >
        <Box display="flex" px={3} alignItems="center" width="100%" height={60}>
          {otherAsset ? (
            <Box className={classes.iconBox}>
              <img src={otherAssetsIcon} alt="future" width={12} height={18} />
            </Box>
          ) : (
            <></>
            // <img src={iconSelector()} alt="future" width={20} />
          )}
          <Box flexGrow={1} ml={1} className={classes.overflowContainer}>
            <Typography variant="body2" className={classes.overflow}>{title}</Typography>
            {!disabled && <Typography variant="subtitle1" color={otherAsset && !linked && !selected ? 'textSecondary' : 'textPrimary'}>{balance}</Typography>}
          </Box>
          <Box display="flex" alignItems="center" pl={1}>
            {alert && (
              <Icon
                fontSize="small"
                className={classnames({
                  [classes.errorNotificationIcon]: alert === 'error',
                  [classes.warningNotificationIcon]: alert === 'warning',
                })}
              >
                notifications_none
              </Icon>
            )}
            <Icon fontSize="small">chevron_right</Icon>
          </Box>
        </Box>
      </MenuItem>
    </Box>
  );
};

export default SidebarRow;
