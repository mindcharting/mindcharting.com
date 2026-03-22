import React, { type FC } from "react";

import { graphql } from "gatsby";

import { Feed } from "@/components/feed";
import { Meta } from "@/components/meta";
import { Page } from "@/components/page";
import { Layout } from "@/components/layout";
import { Sidebar } from "@/components/sidebar";
import { useSiteMetadata } from "@/hooks/use-site-metadata";
import type { AllMarkdownRemark } from "@/types/all-markdown-remark";
import type { PageContext } from "@/types/page-context";

interface IndexTemplateProps {
  data: {
    allMarkdownRemark: AllMarkdownRemark;
  };
  pageContext: PageContext;
}

const IndexTemplate: FC<IndexTemplateProps> = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <Sidebar isHome />
      <Page>
        <Feed edges={edges} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate($limit: Int!, $offset: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $offset
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true }, unlisted: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            categorySlug
            slug
          }
          frontmatter {
            description
            category
            title
            date
            slug
          }
        }
      }
    }
  }
`;

export const Head: FC<IndexTemplateProps & { location: { pathname: string } }> = ({ pageContext, location }) => {
  const { title, description, url } = useSiteMetadata();
  const {
    pagination: { currentPage: page },
  } = pageContext;
  const pageTitle = page > 0 ? `Posts - Page ${page} - ${title}` : title;

  return <Meta title={pageTitle} description={description} url={url + location.pathname} />;
};

export default IndexTemplate;
