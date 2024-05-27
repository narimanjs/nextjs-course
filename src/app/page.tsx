import type { Metadata } from "next";
import Link from "next/link";
import Hero from "./components/ui/hero/Hero";
import Catalog from "./components/ui/catalog/Catalog";
import { ProductService } from "./services/product.service";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Home page description",
};

async function getProducts() {
  const data = await ProductService.getAll();
  return data;
}
export default async function Home() {
  const data = await getProducts();
  return (
    <div className='bg-white pb-6 sm:pb-8 lg:pb-12'>
      <Hero />
      <Catalog
        products={data}
        isfull={false}
      />
    </div>
  );
}
