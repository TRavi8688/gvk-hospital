import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import StickyBottomBar from "@/components/StickyBottomBar";
import Header from "@/components/Header";
import EmergencyBanner from "@/components/EmergencyBanner";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Dr. G. Vijaya Kumar Memorial Hospital | Nellore",
  description:
    "Trusted, affordable multispeciality hospital in Nellore, Andhra Pradesh. 24x7 emergency care, NTR Aarogyasri empanelled, experienced doctors, community-focused healthcare.",
  keywords: [
    "GVK Memorial Hospital Nellore",
    "hospital Nellore",
    "Aarogyasri hospital Nellore",
    "multispeciality hospital Andhra Pradesh",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B4F8C",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} font-body antialiased pb-20 md:pb-0`}
      >
        <EmergencyBanner />
        <Header />
        {children}
        <Footer />
        <StickyBottomBar />
      </body>
    </html>
  );
}
