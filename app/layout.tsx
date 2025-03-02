import React, { Children, ReactNode } from "react";
import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover and share AI prompts",
};
type RootLayoutProps = {
  children: ReactNode;
};
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
