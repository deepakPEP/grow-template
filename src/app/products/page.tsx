import { Company, ProductList, SubBanner, SupplierForm } from "@/components";

export default function Products() {

  return (
    <div className="min-h-screen">
      <SubBanner title="Products" description="Describe the Important features, pricing and other relevant info" />

      <Company />

      <ProductList />

      <SupplierForm />
    </div>
  );
}
