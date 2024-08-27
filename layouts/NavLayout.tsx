// layouts/NavLayout.tsx
import React from 'react';
import { useRouter } from 'next/router';
import NavBar from '@/components/NavBar';
import NavC from '@/components/Community-Connect/Navs/NavC';

interface LayoutProps {
  children: React.ReactNode;
}

const NavLayout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useRouter();

  // Define routes where you want to show NavCom instead of NavBar
  const baseRoute = '/community-connect';

  // Determine which navbar to display based on the current route
  const showNavCom = pathname.startsWith(baseRoute);

  return (
      <div className="relative min-h-screen">
      {showNavCom ? <NavC /> : <NavBar />}
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default NavLayout;
