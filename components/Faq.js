import React from 'react'
import data from '../data/FaqData'

export default function Faq() {
    const mapData = data.map((item, index) => {
        return(
            
            <details className="group mt-4" open={item.open} key={index}>
              <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
                <h2 className="font-medium">
                    {item.question}
                </h2>
          
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
          
              <div className="px-4 mt-4">
                <p className="leading-relaxed text-gray-700">
                    {item.answer}
                </p>
              </div>
            </details>
              
          
        )
    })
  return (
    <div>
        <div className="max-w-screen-lg mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {mapData}
        </div>
    </div>
  )
}
