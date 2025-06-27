import { useRouter } from "next/router";
import { products } from "@/app/data/products";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;

  const product = products.find((p) => p.slug === slug);

  if (!product) return <div className="p-8 text-center">Product not found</div>;

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image */}
          <div className="flex-1">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="rounded shadow"
            />
            <div className="mt-4">
              <img
                src={product.imageUrl}
                alt="Thumbnail"
                className="w-20 h-20 object-cover border p-1"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-blue-900 mb-4">
              {product.title}
            </h1>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
            <button className="mt-6 bg-yellow-400 px-5 py-3 rounded shadow hover:bg-yellow-300 transition">
              Send Your Inquiry Now
            </button>
          </div>
        </div>

        {/* Detail Tab */}
        <div className="mt-12 border-t pt-6">
          <div className="flex space-x-6 text-sm border-b pb-2">
            <span className="text-blue-700 font-semibold border-b-2 border-blue-700">
              Product Detail
            </span>
          </div>
          <div className="mt-4 text-gray-600 text-sm">
            <p>{product.details}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
