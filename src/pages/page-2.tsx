import React from "react";
import { Link as GatsbyLink } from "gatsby";
import Link from "@material-ui/core/Link";

import SEO from "../components/seo";
import { Typography } from "@material-ui/core";

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link
      component={(props: { children: any }) => (
        <GatsbyLink to={"/"}>
          {props.children}
        </GatsbyLink>
      )}>
      <Typography color="textSecondary" variant="body1">
        Go back to the homepage
      </Typography>
    </Link>
  </>
);

export default SecondPage;
