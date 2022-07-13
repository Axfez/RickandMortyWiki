import Box from '@mui/material/Box'
import { useState } from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

export const Footpagination = ({setPage, data }) => {
  // const [pageNumber, setPageNumber] = useState(1)

  // const pageChange = (e) => {
  //   setPageNumber(e.selected + 1)
  // }
  const handleChange = (page) => {
    setPage(page)
    window.scrollTo(0, 0)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack spacing={2}>
        <Pagination
          count={data?.info.pages}
          color="primary"
          onChange={(e) => handleChange(e.target.textContent)}
        />
      </Stack>
    </Box>
  )
}
