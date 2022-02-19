import Image from 'next/image'
import React from 'react'

export default function Error() {
  return (
    <div>
        <div className="text-center">
        <Image
            src="/cant-find.gif"
            alt="Cant find"
            className="object-cover w-full h-64 rounded-lg"
            height={400}
            width={400}
        />

        <p className="mt-6 text-gray-500">We can&apos;t find anything, try searching again and check the url.</p>
        </div>
    </div>
  )
}
