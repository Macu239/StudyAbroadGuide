import "../Global.css";
import { Header, Footer, ScrollToTop } from "../components";

export const metadata = {
  title: "惠文留學指南",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <ScrollToTop />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
