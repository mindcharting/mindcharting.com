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
        <div className={styles.item} key={edge.node.fields.slug} style={{ display: 'flex', gap: '1rem', alignItems: 'baseline', marginBottom: '0.75rem' }}>
          <time
            className={styles.time}
            dateTime={date.toISOString()}
            style={{ color: '#999', fontSize: '0.95rem', minWidth: '85px', fontVariantNumeric: 'tabular-nums' }}
          >
            {year} · {month}
          </time>
          <h2 className={styles.title} style={{ margin: 0, fontSize: '1rem', fontWeight: 'normal' }}>
            <Link
              className={styles.link}
              to={edge.node.frontmatter?.slug || edge.node.fields.slug}
              style={{ textDecoration: 'underline' }}
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
