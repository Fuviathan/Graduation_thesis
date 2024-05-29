import Layout from "@/components/User/Layout/Layout";
import ProductFilter from "../../components/User/productCard/ProductFilter";

export default function OurStore() {

  return (
    // <ProtectRouter>
    <Layout>
      <div className="mx-auto max-w-[1320px] min-h-fit">
        <ProductFilter></ProductFilter>
      </div>
    </Layout>
    //  </ProtectRouter> 
  );
}
