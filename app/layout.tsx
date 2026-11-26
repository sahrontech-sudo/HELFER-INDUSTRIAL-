import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://www.helfer-group.com"),
  title: { default: "Helfer Industrial Solutions | Vacuum Systems & Engineering", template: "%s | Helfer Industrial Solutions" },
  description: "Industrial vacuum systems, pumps, mechanical components, spare parts and engineering support from Helfer Industrial Solutions, GIDC Vapi, Gujarat.",
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>;
}
