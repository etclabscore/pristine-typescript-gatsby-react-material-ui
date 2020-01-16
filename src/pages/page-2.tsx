import React from "react";
import { Link as GatsbyLink } from "gatsby";
import Link from "@material-ui/core/Link";

import SEO from "../components/seo";

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <GatsbyLink to="/">
      <Link>
      Go back to the homepage
      </Link>
    </GatsbyLink>
  </>
);

export default SecondPage;
