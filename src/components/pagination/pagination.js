import React from "react";
import { Link } from "gatsby";

import "./pagination.css";

const Pagination = ({ works, currentWork }) => {
  return (
    <ul className="pagination">
      {works.map((item, index) => (
        <li key={item} className={`pagination__item ${currentWork === item ? `is-active` : ``}` }>
          <Link to={`/work/?project=${item}`}>{++index}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Pagination
