// pages/products/[id].js
import ProductDetailComponent from "../../components/User/product/ProductDetail";
import Layout from "../../components/User/Layout/Layout";
import axios from "axios";
import { API_BASE_URL } from "@/config/apiConfig";
import BasicModal from "@/components/Modal/BasicModal";
import { useRouter } from 'next/router';

export default function ProductDetailPage({ productData, reviewsData }) {
  const router = useRouter();
  console.log(router.query)
  const { id } = router.query;
  return (
    <Layout>
      <BasicModal>
        
      </BasicModal>
      <ProductDetailComponent product={productData} reviewsList={reviewsData}></ProductDetailComponent>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const productId = params.productId;
  try {
    // Fetch product data based on the ID from your API
    const response = await axios.get(`${API_BASE_URL}admin/product/${productId}`);
    const productData = response.data;
    const responseReview = await axios.get(`${API_BASE_URL}user/reviews-ratings/get-all/${productId}`)
    const reviewsData = responseReview.data;
    return {
      props: { productData, reviewsData },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
