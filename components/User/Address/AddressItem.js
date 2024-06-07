import React from 'react'
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline'

export default function AddressItem({ item }) {
  console.log(item)
  return (
    <div className='flex items-center w-full p-4 border-2 border-gray-200 rounded-lg' >
      <div className='w-2/6 '>{item.address}</div>
      <div className='w-1/6 text-center'>{item.fullName}</div>
      <div className='w-1/6 text-center'>{item.email}</div>
      <div className='w-1/6 text-center'>{item.mobileNumber}</div>
      <div className='flex flex-shrink-0 w-1/6'>
        <PencilSquareIcon className='flex-1 w-8 h-8 cursor-pointer hover:opacity-60 hover:text-orange-gray' />
        <TrashIcon className='flex-1 w-8 h-8 cursor-pointer hover:text-red-500 hover:opacity-60' />
      </div>
    </div>
  )
}
