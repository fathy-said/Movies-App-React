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
{/* <>
  <div className="pagination-box">
    <ul className="pagination">
      <li className="page-item">
        <a className="page-link" role="button" tabIndex={0} href="#">
          <span aria-hidden="true">«</span>
          <span className="visually-hidden">First</span>
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" role="button" tabIndex={0} href="#">
          <span aria-hidden="true">‹</span>
          <span className="visually-hidden">Previous</span>
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" role="button" tabIndex={0} href="#">
          1
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" role="button" tabIndex={0} href="#">
          <span aria-hidden="true">…</span>
          <span className="visually-hidden">More</span>
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" role="button" tabIndex={0} href="#">
          10
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" role="button" tabIndex={0} href="#">
          11
        </a>
      </li>
      <li className="page-item active">
        <span className="page-link">
          12<span className="visually-hidden">(current)</span>
        </span>
      </li>
      <li className="page-item">
        <a className="page-link" role="button" tabIndex={0} href="#">
          13
        </a>
      </li>
      <li className="page-item disabled">
        <span className="page-link">14</span>
      </li>
      <li className="page-item">
        <a className="page-link" role="button" tabIndex={0} href="#">
          <span aria-hidden="true">…</span>
          <span className="visually-hidden">More</span>
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" role="button" tabIndex={0} href="#">
          20
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" role="button" tabIndex={0} href="#">
          <span aria-hidden="true">›</span>
          <span className="visually-hidden">Next</span>
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" role="button" tabIndex={0} href="#">
          <span aria-hidden="true">»</span>
          <span className="visually-hidden">Last</span>
        </a>
      </li>
    </ul>
  </div>
</> */}