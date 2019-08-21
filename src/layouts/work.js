import React from "react";
import PropTypes from "prop-types";

import Pagination from "../components/pagination/pagination";
import Work from "../components/work/work";
import SEO from "../components/seo/seo";

const WorkLayout = ({pageContext}) => {
  const {group, index: indexPage, first, last, pageCount} = pageContext;
  const previousUrl = String(indexPage - 1 === 1 ? `/` : indexPage - 1);
  const nextUrl = String(indexPage + 1);

  return (
    <div className="work-layout">
      <SEO title={group[0].node.frontmatter.title} />
      <Work index={indexPage} html={group[0].node.html} {...group[0].node.frontmatter} />
      <Pagination
        previousUrl={previousUrl}
        nextUrl={nextUrl}
        first={first}
        last={last}
        current={indexPage}
        pageOfAmount={pageCount}
      />
    </div>
  );
};

WorkLayout.propTypes = {
  pageContext: PropTypes.shape({
    group: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired,
            skills: PropTypes.string.isRequired,
            demoLink: PropTypes.string.isRequired,
            githubLink: PropTypes.string.isRequired,
            preview: PropTypes.string.isRequired,
          }).isRequired,
          html: PropTypes.string.isRequired,
        }).isRequired,
      }),
    ).isRequired,
    pathPrefix: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    first: PropTypes.bool.isRequired,
    last: PropTypes.bool.isRequired,
    pageCount: PropTypes.number.isRequired,
  }),
};

export default WorkLayout;
