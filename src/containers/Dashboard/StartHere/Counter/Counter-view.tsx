import React from 'react';
import {
    Box, Button, Paper, Grid, Typography
} from '@mui/material';
import {
    Add, Clear, Remove
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

interface CounterViewProps {
    homeScore: number;
    addHomeScore: () => void;
    removeHomeScore: () => void;
    awayScore: number;
    addAwayScore: () => void;
    removeAwayScore: () => void;
    clear: () => void;
}

const CounterView: React.FC<CounterViewProps> = ({
    homeScore,
    addHomeScore,
    removeHomeScore,
    awayScore,
    addAwayScore,
    removeAwayScore,
    clear,
}) => {
  const { t } = useTranslation('App.StartHere.Counter');

  return (
    <Grid
      container
      spacing={4}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '50vh' }}
    >
      <Grid
          item
          container
          spacing={16}
          direction="row"
          alignItems="center"
          justifyContent="center"
      >
        <Grid item>
          <Typography variant="h6">{t("HomeScore")}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">{t("AwayScore")}</Typography>
        </Grid>
      </Grid>
      <Grid
          item
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
      >
        <Grid item>
            <Button onClick={removeHomeScore} variant="contained" color="primary">
                <Remove />
            </Button>
        </Grid>
        <Grid item>
            <Button onClick={addHomeScore} variant="contained" color="primary">
                <Add />
            </Button>
        </Grid>
        <Grid item>
            <Paper square>{homeScore}</Paper>
        </Grid>
        <Grid item>
            <Box>:</Box>
        </Grid>
        <Grid item>
            <Paper square>{awayScore}</Paper>
        </Grid>
        <Grid item>
            <Button onClick={addAwayScore} variant="contained" color="primary">
                <Add />
            </Button>
        </Grid>
        <Grid item>
            <Button onClick={removeAwayScore} variant="contained" color="primary">
                <Remove />
            </Button>
        </Grid>
      </Grid>
      <Grid item>
        <Button onClick={clear} variant="contained">
            <Clear />
        </Button>
      </Grid>
    </Grid>
  );
}

export default CounterView;
