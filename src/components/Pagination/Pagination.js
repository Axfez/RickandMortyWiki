import ReactPaginate from 'react-paginate'
import Box from '@mui/material/Box'

export const Footpagination = ({ pageNumber, setPageNumber, info }) => {
  return (
    <Box>
      <ReactPaginate
        className=""
        nextLabel="Next"
        previousLabel="Prev"
        nextClassName=""
        previousClassName=""
        pageClassName=""
        pageLinkClassName="page-num"
        activeClassName="active"
        onPageChange={(data) => {
          setPageNumber(data.selected + 1)
        }}
        pageCount={info?.pages}
      />
    </Box>
  )
}
