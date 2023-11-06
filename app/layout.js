import { manrope } from "@/app/fonts";
import Footer from "@/components/global/Footer";
import Header from '@/components/global/Header';
import TopBar from '@/components/global/TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import "./reset.css";

export const metadata = {
  title: 'Policyhut',
  description: 'Insurance Policy',
}

 const RootLayout = ({ children }) => {
  return (
      <html lang="en">
          <body className={`${manrope.className}`}>
              <TopBar />
              <Header />
              {children}
              <Footer />
          </body>
      </html>
  );
}

export default RootLayout;
