import React from 'react'
import Footer from './Footer'

export default function layout({children}) {
  return (
    <>
    <main>
        {children}
    </main>
    <Footer />
    </>
  )
}
