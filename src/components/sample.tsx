import React, { FC } from 'react';
import { Grid, Paper, Theme, createStyles, makeStyles,  Container,  WithWidth,  withWidth } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

type SampleProps = {} & WithWidth

const Sample: FC<SampleProps> = ({
  width = 'xs'
}) => {
  const classes = useStyles()

  return (
    <>
      <Container>
        <span>{`Current width: ${width}`}</span>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} md={12}>
            <Paper className={classes.paper}>xs=3 sm=6</Paper>
          </Grid>
          <Grid item xs={6} sm={8} md={12}>
            <Paper className={classes.paper}>xs=3 sm=6</Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default withWidth()(Sample)

