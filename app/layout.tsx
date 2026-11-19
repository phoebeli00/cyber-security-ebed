import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Employee Cybersecurity Onboarding Training",
  description: "Explore consequences and contextual pressure in workplace cybersecurity.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
