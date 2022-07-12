import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import { logo, hamburger } from '../../assets'
import { useState } from 'react'
import { Searchbar } from '..'

const drawerWidth = 200

export function ResponsiveDrawer(props) {
  const { setSearch } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar
          sx={{
            background:
              'linear-gradient(180deg, rgba(0, 177, 50, 0.95) 0%, rgba(2, 252, 237, 0) 100%)',
          }}
        >
          <IconButton
            edge="start"
            aria-label="open-menu"
            onClick={handleDrawerToggle}
            sx={{
              marginRight: 2,
              display: { sm: 'none' },
            }}
          >
            <Box
              as="img"
              src={hamburger}
              alt="hamburger"
              sx={{
                width: '60px',
                height: '60px',
              }}
            />
          </IconButton>
          {/* logo */}
          <Box
            as="img"
            src={logo}
            sx={{
              width: '198px',
              height: '150px',
              position: 'relative',
              left: { xs: '50px', sm: '50%' },
            }}
          />
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <SwipeableDrawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              padding: '20px',
              width: drawerWidth,
              background:
                'linear-gradient(180deg, rgba(0, 255, 102, 0.36) 0%, #00E0FF 58.85%)',
            },
          }}
        >
          <Searchbar />
        </SwipeableDrawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              position: 'fixed',
              boxSizing: 'border-box',
              width: drawerWidth,
              padding: '20px',
              background:
                'linear-gradient(180deg, rgba(0, 255, 102, 0.36) 0%, #00E0FF 58.85%)',
            },
          }}
          open
        >
          <Searchbar />
        </Drawer>
      </Box>
    </Box>
  )
}
