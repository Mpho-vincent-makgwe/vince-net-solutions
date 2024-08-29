import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div>
      <Link href="/tools/scrape" className="px-4 py-2 hover:text-accent transition">
         Link Scraper
      </Link>
      
    </div>
  )
}

export default index
