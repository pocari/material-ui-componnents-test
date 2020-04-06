import React, { FC } from 'react'
import { Container, Checkbox, FormControlLabel, Box, FormGroup } from '@material-ui/core'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import Header from 'components/globals/header'

const Checkboxes: FC<{}> = () => {
  return (
    <Container>
      <Header title="Button"/>
      <Box>
        <Checkbox color="primary" />
        <Checkbox color="secondary" checked={true} />
      </Box>

      <Box>
        <FormGroup row>
          <FormControlLabel 
            control={<Checkbox color="secondary"/>}
            label="check1Label"
          />
          <FormControlLabel 
            control={<Checkbox color="primary" />}
            label="check1Labe2"
          />
          <FormControlLabel 
            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite/>} color="secondary" />}
            label="check1Labe2"
          />
          <FormControlLabel 
            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite/>} color="secondary" />}
            label="check1Labe3"
            labelPlacement="top"
          />
        </FormGroup>
      </Box>
    </Container>
  )
}

export default Checkboxes
