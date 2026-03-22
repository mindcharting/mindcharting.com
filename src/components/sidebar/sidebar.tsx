import React, { type FC } from "react";

import { useSiteMetadata } from "@/hooks/use-site-metadata";

import { SidebarMenu } from "@/components/sidebar-menu";
import { SidebarAuthor } from "@/components/sidebar-author";
import { SidebarContacts } from "@/components/sidebar-contacts";

import * as styles from "./sidebar.module.scss";

type SidebarProps = {
  isHome?: boolean;
};

const Sidebar: FC<SidebarProps> = ({ isHome }) => {
  const { author, menu } = useSiteMetadata();

  return (
    <div className={styles.sidebar}>
      <div className={styles.inner}>
        <SidebarAuthor author={author} isHome={isHome} />
        <SidebarMenu menu={menu} />
        <SidebarContacts contacts={author.contacts} />
      </div>
    </div>
  );
};

export { Sidebar };
