import React, {useState} from 'react'
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import BasicModal from '@/components/Modal/BasicModal';
import DeleteAddressModal from './DeleteAdressModal';
import UpdateAddressModal from './UpdateAddressModal';

export default function AddressItem({ item }) {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  return (
    <div className='flex items-center w-full p-4 mt-2 border-2 border-gray-200 rounded-lg' >
      <div className='w-2/6 '>{item.address}</div>
      <div className='w-1/6 text-center'>{item.fullName}</div>
      <div className='w-1/6 text-center'>{item.email}</div>
      <div className='w-1/6 text-center'>{item.mobileNumber}</div>
      <div className='flex flex-shrink-0 w-1/6'>
        <PencilSquareIcon onClick={() => setOpenUpdate(true)} className='flex-1 w-8 h-8 cursor-pointer hover:opacity-60 hover:text-orange-gray' />
        <TrashIcon onClick={() => setOpenDelete(true)} className='flex-1 w-8 h-8 cursor-pointer hover:text-red-500 hover:opacity-60' />
      </div>
      <BasicModal open={openDelete} onClose={() => setOpenDelete(false)}>
        <DeleteAddressModal onClose={() => setOpenDelete(false)} id={item.id} />
      </BasicModal>
      <BasicModal open={openUpdate} onClose={() => setOpenUpdate(false)}>
        <UpdateAddressModal open={openUpdate} onClose={() => setOpenUpdate(false)} item={item} />
      </BasicModal>
    </div>
  )
}
