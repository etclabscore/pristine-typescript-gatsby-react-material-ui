import React, { useState } from "react";
import { graphql } from "gatsby";
import useDarkMode from "use-dark-mode";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { lightTheme, darkTheme } from "../themes/default";
import Layout from "../layouts";
import NextAndPrev from "../components/NextAndPrev";

interface IProps {
  pageContext: {
    slug: string;
    next: any;
    prev: any;
  };
  data: any;
}

const DefaultTemplate: React.FC<IProps> = ({ children, pageContext, data }) => {
  const darkMode = useDarkMode();
  const theme = darkMode.value ? darkTheme : lightTheme;
  const page = data.mdx;

  return (
    <Layout>
      <MDXRenderer slug={page.fields.slug}>{page.body}</MDXRenderer>
      <NextAndPrev prev={pageContext.prev} next={pageContext.next} />
    </Layout>
  );
};

export default DefaultTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    mdx(fields: { slug: { eq: $path } }) {
      body
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
