import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className="lg:fixed lg:bottom-0 lg:left-0 lg:-rotate-90 lg:mb-9 text-center">
    <Link href="https://twitter.com/codewithsnowbit">
        <a target="_blank" rel="noopener noreferrer">
        <h1 className="text-lg text-center uppercase font-black bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text">SNOWBIT</h1>
        </a>
    </Link>
    </div>
  )
}
