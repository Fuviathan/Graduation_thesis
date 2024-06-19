import Layout from '@/components/User/Layout/Layout'
import Order from '@/components/User/Order/Order'
import Link from 'next/link';
import React from 'react'

const index = () => {
  return (
    <Layout>
      <Order></Order>
    </Layout>
  );
}

export default index
