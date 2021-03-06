import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Card } from '../'

export const Cardsload = ({ data }) => {
  const drawerWidth = 200

  return (
    <Box sx={{ position: 'relative'}}>
      <Grid
        container
        justifyContent={{ xs: 'center', sm: 'center' }}
        sx={{
          padding: 0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          marginLeft: { sm: `${drawerWidth}px` },
          paddingTop: { xs: '200px' },
        }}
      >
        {data?.results.map((character) => {
          return (
            <div className="row">
              <div className="col-md-4 p-4">
                <Card character={character} />
              </div>
            </div>
          )
        })}
      </Grid>
    </Box>
  )
}
