import React, { useEffect, useState } from 'react';
import "./PaginationBox.css"
import ReactPaginate from 'react-paginate';
import { geMoviesThunk } from "../../RTX/Thunk/getMoviesThunk"
import { useDispatch } from 'react-redux';

const PaginationBox = ({ totalPages, dispatchType }) => {
  let dispatch = useDispatch()

  const [pageCount, setPageCount] = useState(totalPages);
  let handlePageClick = (data) => {
    // console.log(data.selected + 1);
    dispatch(dispatchType({ page: data.selected + 1 }))
  }
  useEffect(() => {
    if (totalPages > 500) {
      setPageCount(500)
    }
    else {
      setPageCount(totalPages)
    }
  }, [totalPages]);

  return (
    <>
      <div className="pagination-box">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">>"
          onPageChange={handlePageClick}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel="<<"
          renderOnZeroPageCount={null}
          activeClassName={'active'}
          // ======================
          containerClassName={'pagination'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          nextClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-break'}
          breakLinkClassName={'page-link'}
        />
      </div>
    </>
  );
}

export default PaginationBox;
