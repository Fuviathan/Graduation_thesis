import React from 'react'
import Layout from '@/components/User/Layout/Layout'
import FavoritePage from '@/components/User/FavoriteProduct/FavoritePage'
import Link from 'next/link';

export default function favoriteProduct() {
  let value;
  if (typeof window !== "undefined") {
    value = JSON.parse(localStorage.getItem("userInformation")) || null;
  }
  if (value) return (
    <Layout>
      <FavoritePage />
    </Layout>
  )
  else return (
    <Layout>
      <div>
        <Link
          href={"/login"}
          className="flex justify-center p-3 mx-auto font-sans text-2xl font-semibold rounded-lg shadow-md bg-light-brown w-fit h-fit text-orange-gray hover:opacity-75"
        >
          Đăng nhập để xem sản phẩm yêu thích của bạn
        </Link>
      </div>
    </Layout>
  )
}
