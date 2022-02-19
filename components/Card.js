import Image from 'next/image'
import React from 'react'

export default function Card(props) {
  return (
    <>
        <a
  className="relative block p-8 overflow-hidden border border-gray-100 rounded-lg shadow-sm"
  href={props.ogURL}
    target="_blank"
    rel="noopener noreferrer"
>
  <span
    className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div className="justify-between sm:flex">
    <div>
      <h5 className="text-xl font-bold text-gray-900">
        {props.title}
      </h5>
      <p className="mt-1 text-xs font-medium text-gray-600"></p>
    </div>
  </div>

  <div className="mt-4 sm:pr-8" style={{display: props.description > 0 ? 'none' : 'block'}}>
    <p className="text-sm text-gray-500">
      {props.description}
    </p>
  </div>

  <dl className="flex mt-6" style={{display: props.ogURL > 0 ? 'none' : 'block', margin: props.ogURL > 0 ? '0' : ''}}>
    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">{props.ogURL}</dt>
      <dd className="text-xs text-gray-500">Real Destination</dd>
    </div>

    {/* <div className="flex flex-col-reverse ml-3 sm:ml-6">
      <dt className="text-sm font-medium text-gray-600">Reading time</dt>
      <dd className="text-xs text-gray-500">3 minute</dd>
    </div> */}
  </dl>
</a>
    </>
  )
}
