import React from 'react';
import NavBar from '@/components/NavBar';

interface LayoutProps {
  children: React.ReactNode;
}

const NavLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <NavBar />
      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default NavLayout;
