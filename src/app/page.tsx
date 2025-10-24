import HeroBanner from "@/components/heroBanner";
import { Clientele, Company, Overview, SupplierForm, Whyus } from "@/components";
import Infrastructure from "@/components/Infrastructure";

export default function Home() {

  return (
    <div className="min-h-screen">
      <HeroBanner />

      <Company />

      <Overview />

      <Whyus />

      <Infrastructure />
      
      <Clientele />

      <SupplierForm />
    </div>
  );
}
