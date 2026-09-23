import React, { type FC, type ReactNode, useEffect } from "react";

import { useTheme } from "@/hooks/use-theme";

import * as styles from "./layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [{ mode }] = useTheme();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    document.documentElement.className = mode;
  }, [mode]);

  return (
    <div className={styles.layout}>
      {children}
      <footer className={styles.footer}>
        © {currentYear} MindCharting.com. All rights reserved.
      </footer>
    </div>
  );
};

export { Layout };
