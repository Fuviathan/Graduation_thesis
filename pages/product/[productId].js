// pages/products/[id].js
import { useRouter } from "next/router";
import ProductDetailComponent from "../../components/User/product/ProductDetail";
import Layout from "../../components/User/Layout/Layout";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_BASE_URL } from "@/config/apiConfig";

export default function ProductDetailPage({ productData }) {
  return (
    <Layout>
      <ProductDetailComponent product={productData}></ProductDetailComponent>
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
    return {
      props: { productData },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
