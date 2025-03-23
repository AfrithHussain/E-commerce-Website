import Hero from "@/components/Hero";
import Product from "../components/Product";
import BestSeller from "@/components/BestSeller";
import CompanyPolicy from "@/components/CompanyPolicy";
import Subscribe from "@/components/Subscribe";

function Home() {
  return (
    <div>
      <Hero />
      <Product />
      <BestSeller />
      <CompanyPolicy />
      <Subscribe />
    </div>
  );
}

export default Home;
