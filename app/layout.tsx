import React, { ReactNode } from "react";
import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "AI Prompts Craft",
  description: "Discover and share AI prompts",
};

type RootLayoutProps = {
  children: ReactNode;
  session: any;
};

const RootLayout = ({ children, session }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider session={session}>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
