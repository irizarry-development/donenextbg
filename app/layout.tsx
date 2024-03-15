import type { Metadata } from "next"
import Header from "~/components/ui/Header";
import Footer from "~/components/ui/Footer";
import '~/styles/app.css'

export const metadata: Metadata = {
  title: "DoneNextBG",
  description: "The premier house upscaling service in the greater Bowling Green area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Erica+One&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="app-body">
        <Header />
        <main className="app-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
