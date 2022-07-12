import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Card } from '../'

export const Cardsload = () => {
  const drawerWidth = 200

  return (
    <Box>
      <Grid
        container
        justifyContent={{ xs: 'center', sm: 'center' }}
        sx={{
          padding: 0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          marginLeft: { sm: `${drawerWidth}px` },
          paddingTop: { xs: '200px' },
          // bgcolor: 'blue'
        }}
      >
        <Card />
      </Grid>
    </Box>
  )
}
