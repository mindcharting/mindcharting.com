import React, { type FC } from "react";

import { Link } from "gatsby";

import { type Edge } from "@/types/edge";

import * as styles from "./feed.module.scss";

type FeedProps = {
  edges: Array<Edge>;
};

const Feed: FC<FeedProps> = ({ edges }) => (
  <div className={styles.feed}>
    {edges.map((edge) => {
      const date = new Date(edge.node.frontmatter.date);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');

      return (
        <div className={styles.item} key={edge.node.fields.slug}>
          <time className={styles.time} dateTime={date.toISOString()}>
            {year} · {month}
          </time>
          <h2 className={styles.title}>
            <Link
              className={styles.link}
              to={edge.node.frontmatter?.slug || edge.node.fields.slug}
            >
              {edge.node.frontmatter.title}
            </Link>
          </h2>
        </div>
      );
    })}
  </div>
);

export { Feed };
