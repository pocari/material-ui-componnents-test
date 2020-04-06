import React, { FC } from 'react';
import { Container, Divider, Button, createStyles, makeStyles, Theme, Icon, ButtonGroup } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Header from 'components/globals/header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttons: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

const Buttons: FC<{}> = () => {
  const classes = useStyles()
  return (
    <Container>
      <Header title="Button"/>

      <Divider/>

      <div className={classes.buttons}>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" disabled>Disabled</Button>
      </div>

      <div className={classes.buttons}>
        <Button >Default</Button>
        <Button  color="primary">Primary</Button>
        <Button  color="secondary">Secondary</Button>
        <Button  disabled>Disabled</Button>
      </div>

      <div className={classes.buttons}>
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" color="primary">Primary</Button>
        <Button variant="outlined" color="secondary">Secondary</Button>
        <Button variant="outlined" disabled>Disabled</Button>
      </div>

      <div className={classes.buttons}>
        <Button variant="outlined" startIcon={<DeleteIcon/>}>Delete</Button>
        <Button variant="outlined" color="primary" endIcon={<Icon>send</Icon>} size="large">Send</Button>
      </div>

      <div className={classes.buttons}>
        <ButtonGroup color="primary" variant="contained">
          <Button>one</Button>
          <Button>two</Button>
          <Button>three</Button>
        </ButtonGroup>

        <ButtonGroup color="primary" orientation="vertical" variant="contained">
          <Button>one</Button>
          <Button>two</Button>
          <Button>three</Button>
        </ButtonGroup>
      </div>
    </Container>
  );
}

export default Buttons

