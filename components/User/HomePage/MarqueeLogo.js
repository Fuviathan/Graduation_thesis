import React from 'react'

export default function MarqueeLogo() {
  return (
    <div class="relative flex overflow-x-hidden px-4 shadow-lg">
      <div class="flex py-6 animate-marquee whitespace-nowrap">
        <img src='/brand-01.png' class="mx-4 text-4xl" />
        <img src='/brand-02.png' class="mx-4 text-4xl" />
        <img src='/brand-03.png' class="mx-4 text-4xl" />
        <img src='/brand-04.png' class="mx-4 text-4xl" />
        <img src='/brand-05.png' class="mx-4 text-4xl" />
        <img src='/brand-06.png' class="mx-4 text-4xl" />
        <img src='/brand-07.png' class="mx-6 text-4xl" />
      </div>

      <div class="flex absolute top-0 py-6 animate-marquee2 whitespace-nowrap">
        <img src='/brand-01.png' class="mx-4 text-4xl" />
        <img src='/brand-02.png' class="mx-4 text-4xl" />
        <img src='/brand-03.png' class="mx-4 text-4xl" />
        <img src='/brand-04.png' class="mx-4 text-4xl" />
        <img src='/brand-05.png' class="mx-4 text-4xl" />
        <img src='/brand-06.png' class="mx-4 text-4xl" />
        <img src='/brand-07.png' class="mx-4 text-4xl" />
      </div>
    </div>

  )
}
