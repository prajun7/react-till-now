import React from 'react';
import {
    Box, Button, Paper, Grid
} from '@mui/material';
import {
    Add, Clear, Remove
} from '@mui/icons-material';

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
    return (
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '50vh' }}
        >
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
                <Box pt={2}>
                    <Button onClick={clear} variant="contained">
                        <Clear />
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CounterView;
