import { products } from "@/app/data/products";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { notFound } from "next/navigation";

// ✅ Metadata generator (optional)
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  return {
    title: product?.title || "Product",
    description: product?.description || "",
  };
}

// ✅ Fix type error: explicitly define the shape of props
export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <img src={product.imageUrl} alt={product.title} className="rounded shadow" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-blue-900 mb-4">{product.title}</h1>
            <p className="text-gray-700">{product.description}</p>
            <button className="mt-6 bg-yellow-400 px-5 py-3 rounded hover:bg-yellow-300 transition">
              Send Inquiry
            </button>
          </div>
        </div>
        <div className="mt-12 border-t pt-6">
          <h2 className="text-blue-700 font-semibold text-lg mb-2">Product Detail</h2>
          <p className="text-gray-600 text-sm">{product.details}</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
