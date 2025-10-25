import {
  Clientele,
  Company,
  Overview,
  SubBanner,
  SupplierForm,
  Whyus,
} from "@/components";

export default function About() {

  return (
    <div className="min-h-screen">
      <SubBanner
        title="About Us"
        description="Describe the Important features, pricing and other relevant info"
      />

      <Company />

      <Overview />

      <Whyus />

      <Clientele />

      <SupplierForm />
    </div>
  );
}
