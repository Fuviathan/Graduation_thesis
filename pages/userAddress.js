import React, { useState } from 'react'
import Layout from '@/components/User/Layout/Layout'
import AddressPage from '@/components/User/Address/AddressPage';
import Link from 'next/link';
import BasicModal from '@/components/Modal/BasicModal';
import CreateAddressModal from '@/components/User/Address/CreateAddressModal';

export default function UserAddress() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Layout>
      <BasicModal open={open} onClose={handleClose}>
        <CreateAddressModal open={open} onClose={handleClose}/>
      </BasicModal>
      <AddressPage setOpen={setOpen}/>
    </Layout>
  )
}