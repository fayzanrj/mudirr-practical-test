import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.scss";
import ChakraUIProvider from "@/providers/ChakraUIProvider";
import AppContextProvider from "@/providers/AppContextProvider";

export const metadata: Metadata = {
  title: "Dashboard - Mudirr",
  description:
    "Mudirr is an intuitive platform designed to streamline project management and monitor progress effectively. Organize tasks, track milestones, and collaborate with ease to ensure your projects are always on track.",
};

const axiforma = localFont({
  src: [
    {
      path: "../fonts/Axiforma-Light.woff",
      weight: "300", // Light weight
    },
    {
      path: "../fonts/Axiforma-Regular.woff",
      weight: "400", // Regular weight
    },
    {
      path: "../fonts/Axiforma-Medium.woff",
      weight: "500", // Medium weight
    },
    {
      path: "../fonts/Axiforma-Bold.woff",
      weight: "700", // Bold weight
    },
    {
      path: "../fonts/Axiforma-ExtraBold.woff",
      weight: "800", // Extra Bold weight
    },
  ],
  variable: "--font-axiforma",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={axiforma.className}>
        <AppContextProvider>
          <ChakraUIProvider>{children}</ChakraUIProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
