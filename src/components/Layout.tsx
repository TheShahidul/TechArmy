import Topbar from './Topbar';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
