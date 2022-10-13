import { NextComponentType } from 'next';
import Footer from './Footer';
import HeadInfo from './HeadInfo';
import TopBar from './TopBar';

const Layout: NextComponentType = ({ children }) => (
  <>
    <HeadInfo />
    <TopBar />
    {children}
    <Footer />
  </>
);

export default Layout;
