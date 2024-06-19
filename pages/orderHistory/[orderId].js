// pages/[dynamic].js
import Layout from '@/components/User/Layout/Layout';
import OrderDetails from '@/components/User/Order/OrderDetail';
import { useRouter } from 'next/router';

const DynamicPage = () => {
  const router = useRouter();
  console.log(router.query)
  const { orderId } = router.query;

  return (
    <Layout>
      <OrderDetails orderId={orderId}></OrderDetails>
    </Layout>
  );
};

export default DynamicPage;
