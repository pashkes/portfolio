import React from "react";

import Pagination from "../components/pagination/pagination";
import Work from "../components/work/work";
import SEO from "../components/seo/seo";

const WorkLayout = ({pageContext}) => {
  const {group, index: indexPage, first, last, pageCount} = pageContext;
  const previousUrl = String(indexPage - 1 === 1 ? `/` : indexPage - 1);
  const nextUrl = String(indexPage + 1);

  return (
    <div className='work-layout'>
      <SEO title={group[0].node.frontmatter.title} />
      <Work index={indexPage} {...group[0].node.frontmatter} />
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

export default WorkLayout;
