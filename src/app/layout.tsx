
"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const navLink = [
  {
    name: "Login",
    href: "./login",
  },
  {
    name: "Register",
    href: "./register",
  },
  {
    name: "Profile",
    href: "./profile",
  },
];



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <body>
        <header>
          <h1
            style={{
              backgroundColor: "#E0A75E",
              padding: "50px",
            }}
          >
            Header here
            <ul>
              {navLink.map((link) => {
                const activeLink = pathName.startsWith(link.href);
                return (
                  <li key={link.name} className={activeLink ? "active-link" : "inactive-link"}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          </h1>
        </header>
        <main style={{ backgroundColor: "#973131", padding: "100px" }}>
          {children}
        </main>
        <footer>
          <h1
            style={{
              backgroundColor: "#E0A75E",
              padding: "50px",
            }}
          >
            Foooter here
          </h1>
        </footer>
      </body>
    </html>
  );
}
