import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  const handleNextPage = (direction) => {
    const nextPage = currentPage + direction;
    if (nextPage === 0) return pagesCount;
    if (nextPage === pagesCount + 1) return 1;
    return nextPage;
  };

  return (
    <nav aria-label="...">
      <div className="d-flex justify-content-center ">
        <ul className="pagination pagi ">
          <li className="page-item ">
            <button
              className="page-link LinkPage"
              aria-label="Previous"
              onClick={() => onPageChange(handleNextPage(-1))}
            >
              <img
                className="ImgHov2"
                src="./image/right.png"
                style={{ width: "15px" }}
              />
            </button>
          </li>

          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage
                  ? "page-item active ItemPage "
                  : "page-item ItemPage "
              }
            >
              <button
                className="page-link shomare"
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            </li>
          ))}

          <li className="page-item">
            <button
              className="page-link LinkPage"
              aria-label="Next"
              onClick={() => onPageChange(handleNextPage(+1))}
            >
              <img
                className="ImgHov3"
                src="./image/icons8-less-than-48.png"
                style={{ width: "15px" }}
              />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
