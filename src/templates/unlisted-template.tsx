import React, { type FC } from "react";

import { graphql } from "gatsby";

import { Link } from "gatsby";

import { Meta } from "@/components/meta";
import { Page } from "@/components/page";
import { Layout } from "@/components/layout";
import { Sidebar } from "@/components/sidebar";
import { useSiteMetadata } from "@/hooks/use-site-metadata";
import type { AllMarkdownRemark } from "@/types/all-markdown-remark";

interface UnlistedTemplateProps {
  data: {
    allMarkdownRemark: AllMarkdownRemark;
  };
}

const UnlistedTemplate: FC<UnlistedTemplateProps> = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <Sidebar />
      <Page title="Unlisted">
        <ul>
          {edges.map((edge) => (
            <li key={edge.node.fields.slug}>
              <Link to={edge.node.frontmatter?.slug || edge.node.fields.slug}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query UnlistedTemplate {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { template: { eq: "post" }, draft: { ne: true }, unlisted: { eq: true } }
      }
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

export const Head: FC<{ location: { pathname: string } }> = ({ location }) => {
  const { title, description, url } = useSiteMetadata();

  return (
    <Meta
      title={`Unlisted - ${title}`}
      description={description}
      url={url + location.pathname}
    />
  );
};

export default UnlistedTemplate;
