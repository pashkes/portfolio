import React from "react"
import { Link } from "gatsby"

import "./pagination.css"

const Pagination = ({ works, currentWork }) => {
  return (
    <nav className="pagination" aria-label={`navigation for works`}>
      <ul className="pagination__list">
        {
          works.sort((current, next) => Number(current) - Number(next)).map((item, index) => (
            <li
              key={item}
              className={`pagination__item ${currentWork === item ? `is-active` : ``}`}
            >
              <Link
                to={`/work/?project=${item}`}
                aria-label={currentWork === item ? `is current page` : ``}
              >
                {++index}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Pagination
