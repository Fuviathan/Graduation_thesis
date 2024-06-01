import React from 'react'

export default function MarqueeLogo() {
  return (
    <div className="relative flex px-4 overflow-x-hidden shadow-lg">
      <div className="flex py-6 animate-marquee whitespace-nowrap">
        <img src='/brand-01.png' className="mx-4 text-4xl" />
        <img src='/brand-02.png' className="mx-4 text-4xl" />
        <img src='/brand-03.png' className="mx-4 text-4xl" />
        <img src='/brand-04.png' className="mx-4 text-4xl" />
        <img src='/brand-05.png' className="mx-4 text-4xl" />
        <img src='/brand-06.png' className="mx-4 text-4xl" />
        <img src='/brand-07.png' className="mx-6 text-4xl" />
      </div>

      <div className="absolute top-0 flex py-6 animate-marquee2 whitespace-nowrap">
        <img src='/brand-01.png' className="mx-4 text-4xl" />
        <img src='/brand-02.png' className="mx-4 text-4xl" />
        <img src='/brand-03.png' className="mx-4 text-4xl" />
        <img src='/brand-04.png' className="mx-4 text-4xl" />
        <img src='/brand-05.png' className="mx-4 text-4xl" />
        <img src='/brand-06.png' className="mx-4 text-4xl" />
        <img src='/brand-07.png' className="mx-4 text-4xl" />
      </div>
    </div>

  )
}
