import Hero from "@/app/components/Hero";
import ProductCard from "@/app/components/ProductCard";
import { products } from "@/app/data/products";
import About from "./about/page";



export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <main className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900">Solution Products</h2>
            <button className="border border-blue-700 text-blue-700 px-4 py-1 rounded text-sm">View All</button>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, idx) => (
              <ProductCard key={idx} {...p} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
