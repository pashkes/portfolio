import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./pagination.css"
import IconArrowLeft from "../../images/icons/arrow-left.svg"
import IconArrowRight from "../../images/icons/arrow-right.svg"

const NavLink = ({ title, test, url, className, children, ...attrs }) => {
  if (!test) {
    return <Link
      className="pagination__arrow"
      to={`work/${url}`}
      aria-label={title}
      {...attrs}
    >{children}</Link>
  } else {
    return <span
      className={`pagination__arrow ${className} is-disabled`}
      tabIndex="-1"
      aria-label={title}
      {...attrs}
    >{children}</span>
  }
}
const Pagination = ({ pageOfAmount, current, first, previousUrl, last, nextUrl }) => {
  const pagesOfNumber = [...Array(pageOfAmount + 1).keys()].slice(1)
  return (
    <nav className="pagination" aria-label={`navigation for works`}>
      <ul className="pagination__list">
        <li>
          <NavLink test={first} className="pagination__arrow--previous" url={previousUrl} title={`Go to Previous Page`}>
            <IconArrowLeft width="33" height="8"/>
          </NavLink>
        </li>
        {
          pagesOfNumber.map((item) => (
            <li
              key={item}
              className={`pagination__item ${current === item ? `is-active` : ``}`}
            >
              <Link
                to={`/work/${item === 1 ? `/` : item}`}
                aria-label={current === item ? `is current page` : ``}
              >
                {item}
              </Link>
            </li>
          ))
        }
        <li>
          <NavLink className="pagination__arrow--next" test={last} url={nextUrl} title={`Go to Next Page`}>
            <IconArrowRight width="33" height="8"/>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  pageOfAmount: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  first: PropTypes.bool.isRequired,
  previousUrl: PropTypes.string.isRequired,
  last: PropTypes.bool.isRequired,
  nextUrl: PropTypes.string.isRequired,
}

export default Pagination
