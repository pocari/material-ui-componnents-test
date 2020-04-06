import React, { FC } from 'react'
import { Box, Typography, Divider } from '@material-ui/core'

interface HeaderProps {
  title: string
}

const Header: FC<HeaderProps> = ({
  title = "Samples"
}) => {
  return (
    <>
      <Box m={1}>
        <Typography variant="h3">{title}</Typography>
      </Box>
      <Divider/>
    </>
  )
}

export default Header
