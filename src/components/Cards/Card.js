import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'

export const Card = ({ character }) => {
  return (
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
        <div className="row w-100">
          <div className="col-md-6">
            <Typography sx={{}}>Name</Typography>
          </div>
          <div className="col-md-6">
            <Typography>{character.name}</Typography>
          </div>
        </div>

        <div className="row w-100">
          <div className="col-md-6">
            <Typography sx={{}}>Specie</Typography>
          </div>
          <div className="col-md-6">
            <Typography>{character.species}</Typography>
          </div>
        </div>

        <div className="row w-100">
          <div className="col-md-6">
            <Typography sx={{}}>Status</Typography>
          </div>
          <div className="col-md-6">
            <Typography>{character.status}</Typography>
          </div>
        </div>
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
        <Link to="/details/" state={{ id: character.id }}>
          <Typography
            sx={{
              position: 'relative',
              color: 'white',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '20px',
              '&:hover': {
                color: '#00FFF0',
              },
            }}
          >
            DETAILS
          </Typography>
        </Link>
      </Box>
    </Box>
  )
}
