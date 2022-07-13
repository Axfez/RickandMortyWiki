import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'

import { logo, hamburger } from '../../assets'
import { useState } from 'react'
import { TextField } from '@mui/material'

const drawerWidth = 200

export function ResponsiveDrawer({
  setQuery,
  setStatus,
  setGender,
  status,
  gender,
}) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleStatus = (e) => {
    setStatus(e.target.value || '')
  }

  const handleGender = (e) => {
    setGender(e.target.value || '')
  }

  const onChange = (e) => {
    setQuery(e.target.value)
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
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              label="Search Character"
              variant="standard"
              onChange={onChange}
            />
          </Box>

          <Box sx={{ marginTop: '10px' }}>
            <select onChange={handleStatus} value={status || ''}>
              <option value="">Status</option>
              <option value="alive">alive</option>
              <option value="dead">dead</option>
              <option value="Unknow">Unknown</option>
            </select>
          </Box>
          <Box sx={{ marginTop: '10px' }}>
            <select onChange={handleGender} value={gender || ''}>
              <option value="">Gender</option>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="genderless">genderless</option>
              <option value="unknown">Unknown</option>
            </select>
          </Box>
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
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              label="Search Character"
              variant="standard"
              onChange={onChange}
            />
          </Box>
          <Box sx={{ marginTop: '10px' }}>
            <select onChange={handleStatus} value={status || ''}>
              <option value="">Status</option>
              <option value="alive">alive</option>
              <option value="dead">dead</option>
              <option value="unknown">Unknown</option>
            </select>
            <Box sx={{ marginTop: '10px' }}>
              <select onChange={handleGender} value={gender || ''}>
                <option value="">Gender</option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="genderless">genderless</option>
                <option value="unknown">Unknown</option>
              </select>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </Box>
  )
}
