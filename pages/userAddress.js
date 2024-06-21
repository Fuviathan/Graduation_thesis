import React, { useState } from 'react'
import Layout from '@/components/User/Layout/Layout'
import AddressPage from '@/components/User/Address/AddressPage';
import Link from 'next/link';
import BasicModal from '@/components/Modal/BasicModal';
import CreateAddressModal from '@/components/User/Address/CreateAddressModal';
import ChangePasswordModal from '@/components/User/Address/ChangePasswordModal';

export default function UserAddress() {
  const [open, setOpen] = useState(false)
  const [openChange, setOpenChange] = useState(false)
  const handleClose = () => setOpen(false);
  const handleChangeClose = () => setOpenChange(false);
  return (
    <Layout>
      <BasicModal open={open} onClose={handleClose}>
        <CreateAddressModal open={open} onClose={handleClose}/>
      </BasicModal>
      <BasicModal open={openChange} onClose={handleChangeClose}>
        <ChangePasswordModal open={openChange} onClose={handleChangeClose}/>
      </BasicModal>
      <AddressPage setOpen={setOpen} setOpenChange={setOpenChange}/>
    </Layout>
  )
}