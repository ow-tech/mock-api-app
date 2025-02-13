import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-1 container mx-auto px-6 py-8">{children}</main>
      <Footer />
    </div>
  );
};

const Navbar: React.FC = () => (
  <nav className="bg-blue-600 text-white py-4 text-center font-bold text-lg shadow-md">
    Item Management App
  </nav>
);

const Footer: React.FC = () => (
  <footer className="bg-blue-600 text-white text-center py-20 mt-8">
    &copy; {new Date().getFullYear()} Item Management App
  </footer>
);

export default Layout;

