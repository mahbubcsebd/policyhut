import { useState } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ totalPages, dispayedNumber, currentPage, onPageChange }) => {
    const [pageNumber, setPageNumber] = useState(currentPage);

    const handlePageChange = (event) => {
        setPageNumber(event.selected);
        onPageChange(event.selected);
    };

    return (
        <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={dispayedNumber}
            marginPagesDisplayed={2}
            forcePage={pageNumber}
            onPageChange={handlePageChange}
        />
    );
};

export default Pagination;
