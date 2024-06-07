// pages/products/[id].js
import ProductDetailComponent from "../../components/User/product/ProductDetail";
import Layout from "../../components/User/Layout/Layout";
import axios from "axios";
import { API_BASE_URL } from "@/config/apiConfig";
import BasicModal from "@/components/Modal/BasicModal";

export default function ProductDetailPage({ productData, reviewsData }) {
  return (
    <Layout>
      <BasicModal>
        
      </BasicModal>
      <ProductDetailComponent product={productData} reviewsList={reviewsData}></ProductDetailComponent>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    // Fetch the list of product IDs from your API
    const response = await axios.get(`${API_BASE_URL}admin/product/get-all?size=${100}`);
    const products = response.data.content;
    // Generate paths for each product ID
    const paths = products.map((product) => ({
      params: { productId: product.id.toString() },
    }));
    return {
      paths,
      fallback: false, // Set to true if you want to enable incremental static regeneration
    };
  } catch (error) {
    console.error("Error fetching product IDs:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }) {
  const productId = params.productId;
  try {
    // Fetch product data based on the ID from your API
    const response = await axios.get(`${API_BASE_URL}admin/product/${productId}`);
    const productData = response.data;
    const responseReview = await axios.get(`${API_BASE_URL}user/reviews-ratings/get-all/${productId}`)
    const reviewsData = responseReview.data
    return {
      props: { productData, reviewsData },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
