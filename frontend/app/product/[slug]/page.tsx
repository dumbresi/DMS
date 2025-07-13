"use client";

import { useParams } from "next/navigation";
import { products } from "@/app/data/products";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Find the product by slug
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you are looking for does not exist.</p>
          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Products
            </Link>
          </div>
        </div>
      </nav>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left side - Image */}
            <div className="relative h-96 lg:h-full min-h-[500px] bg-gray-100">
              <Image
                src={product.imageUrl}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right side - Product Information */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="border-t pt-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Product Details
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {product.details}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-medium">
                    Request Quote
                  </button>
                  <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-300 font-medium">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium text-gray-700">Category:</span>
                <span className="text-gray-600">Medical Equipment</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium text-gray-700">Certification:</span>
                <span className="text-gray-600">CE Certified</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium text-gray-700">Warranty:</span>
                <span className="text-gray-600">2 Years</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium text-gray-700">Installation:</span>
                <span className="text-gray-600">Professional Required</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium text-gray-700">Maintenance:</span>
                <span className="text-gray-600">Annual Service</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium text-gray-700">Support:</span>
                <span className="text-gray-600">24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
