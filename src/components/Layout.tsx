
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-saul-cream relative">
      {/* Background pattern */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-saul-gold/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-saul-red/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-3xl bg-saul-yellow/5 rounded-full blur-3xl -z-10"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
