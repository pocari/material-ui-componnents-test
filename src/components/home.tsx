import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { Container, ListItem, List, Divider } from '@material-ui/core';

const Home: FC<{}> = () => {
  return (
    <Container>
      <div>material ui test2</div>
      <Divider/>
      <List>
        <ListItem>
          <Link to={`/sample`}>Sample</Link>
        </ListItem>
        <ListItem>
          <Link to={`/buttons`}>Buttons</Link>
        </ListItem>
      </List>
    </Container>
  )
}

export default Home
