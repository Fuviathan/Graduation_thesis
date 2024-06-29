import React from 'react'
import CouponList from '../components/User/Coupons/CouponsList'
import Layout from '@/components/User/Layout/Layout'

const coupons = () => {
  return (
    <Layout>
      <div className='text-center text-2xl font-medium text-[#ad8c59]'>Danh sách mã giảm giá</div>
      <CouponList>
      </CouponList>
    </Layout>
  )
}

export default coupons
