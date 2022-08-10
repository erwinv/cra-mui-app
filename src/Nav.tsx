import { useState } from "react"
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material"
import { Home } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { Icon } from '@mui/material'

function Nav() {
  const [page, setPage] = useState('home')

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={page}
        onChange={(_, newValue) => {
          setPage(newValue)
        }}
      >
        <BottomNavigationAction label="Home" icon={<Home />} component={Link} to="/" />
        <BottomNavigationAction label="Firebase" icon={<Icon>local_fire_department</Icon>} component={Link} to="firebase" />
      </BottomNavigation>
    </Paper>
  )
}

export default Nav
