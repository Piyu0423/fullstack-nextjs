import React, { ReactNode } from "react";
import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "IdeaCraft",
  description: "Discover and share AI prompts",
};
type User = {
  name: string;
  email: string;
};

type Session = {
  user: User;
  expires: string;
};

type RootLayoutProps = {
  children: ReactNode;
  session?: Session;
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
            {" "}
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
