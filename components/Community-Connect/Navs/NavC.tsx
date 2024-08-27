// components/NavC.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image'; // For using images, if you have any specific logo

const NavC: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/community-connect');
  };

  return (
    <div className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 cursor-pointer" onClick={handleBackClick}>
              {/* Placeholder logo */}
              <Image
                src="/logo-placeholder.png" // Replace with your logo path
                alt="Community Connect Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                
                <Link
                  href="/community-connect/job-posts"
                  className="text-gray-300 hover:bg-gray-700 hover:text-accent transition px-3 py-2 rounded-md text-sm font-medium"
                >
                  Job Posts
                </Link>
                <Link
                  href="/community-connect/business-advertisements"
                  className="text-gray-300 hover:bg-gray-700 hover:text-accent transition px-3 py-2 rounded-md text-sm font-medium"
                >
                  Business Advertisements
                </Link>
                <Link
                  href="/community-connect/education-field"
                  className="text-gray-300 hover:bg-gray-700 hover:text-accent transition px-3 py-2 rounded-md text-sm font-medium"
                >
                  Education Field
                </Link>
                <Link
                  href="/community-connect/report"
                  className="text-gray-300 hover:bg-gray-700 hover:text-accent transition px-3 py-2 rounded-md text-sm font-medium"
                >
                  Report
                </Link>
                <Link
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-accent transition px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavC;
