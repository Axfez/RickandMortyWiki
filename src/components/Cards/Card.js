import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

export const Card = ({ character }) => {
  return (
    <Grid container justifyContent="start" sx={{bgcolor:'violet'}}>
      <Grid
        item
        xs={4}
        sx={{
          bgcolor: 'red',
          marginRight: -1,
        }}
      >
        <Box
          sx={{
            margin: 0,
            display: 'flex',
            boxSizing: 'border-box',
            position: 'relative',
            flexDirection: 'column',
            width: '290px',
            height: '399px',
            borderRadius: '40px',
            border: '1px solid #e0e0e0',
            background: 'linear-gradient(180deg, #00FFF0 0%, #007D32 100%);',
          }}
        >
          {/* character logo */}
          <Box
            as="img"
            src={character.image}
            alt={character.name}
            sx={{
              position: 'relative',
              width: '150px',
              height: '150px',
              marginTop: '27px',
              marginLeft: '75px',
              // marginBottom: "222px",
              bgcolor: 'white',
            }}
          />

          {/* Container character info */}
          <Box
            sx={{
              display: 'flex',
              position: 'relative',
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '200px',
              height: '120px',
              marginLeft: '53px',
              marginTop: '10px',
              marginBottom: '20px',
            }}
          >
            {/* character info */}
            <Typography sx={{ marginRight: '28px' }}>Name</Typography>
            <Typography
              sx={{
                width: '120px',
                height: '40px',
                display: 'flex',
                padding: '0px',
                justifyContent: 'flex-start',
              }}
            >
              {character.name}
            </Typography>

            <Typography sx={{ marginRight: '28px' }}>Specie</Typography>
            <Typography
              sx={{
                width: '120px',
                height: '40px',
                display: 'flex',
                justifyContent: 'flex-start',
              }}
            >
              {character.species}
            </Typography>
            <Typography sx={{ marginRight: '28px' }}>Status</Typography>
            <Typography
              sx={{
                width: '120px',
                height: '40px',
                display: 'flex',
                justifyContent: 'flex-start',
              }}
            >
              {character.status}
            </Typography>
          </Box>
          {/* foot */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              width: 'auto',
              height: '64px',
              marginTop: '8px',
              borderRadius: '0px 0px 40px 40px',
              background: 'rgba(0, 0, 0, 0.56)',
            }}
          >
            <Typography
              sx={{
                position: 'relative',
                color: 'white',
              }}
            >
              DETAILS
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
