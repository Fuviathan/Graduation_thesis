import Layout from '@/components/User/Layout/Layout'
import Checkout from '@/components/User/Checkout/Checkout'
// import Order from '@/components/User/Order/Order'
// import OrderDetails from '@/components/User/Order/OrderDetails'
import React from 'react'

const order = () => {
  return (
    <div>
      <Layout>
        <Checkout></Checkout>
      </Layout>
    </div>
  )
}

export default order
