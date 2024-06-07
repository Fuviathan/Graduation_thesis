import React from 'react'
import Layout from '@/components/User/Layout/Layout'
import AddressPage from '@/components/User/Address/AddressPage';
import Link from 'next/link';

export default function userAddress() {
  return (
    <Layout>
      <AddressPage />
    </Layout>
  )
}