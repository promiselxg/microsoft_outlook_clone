import { Header, Navbar } from './index';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
