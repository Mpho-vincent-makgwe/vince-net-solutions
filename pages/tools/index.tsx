import Link from 'next/link';
import { FaLink } from 'react-icons/fa'; // Icon for link scraper
import React from 'react';

const index = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm">
                <Link href="/tools/scrape">
                    <p className="flex items-center space-x-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 ease-in-out">
                        <FaLink className="text-xl" /> {/* Link Icon */}
                        <span>Link Scraper</span>
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default index;
