import Link from "next/link";

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

export default function ProductCard({ title, description, imageUrl, slug }: Props) {
  return (
    <Link href={`/products/${slug}`} passHref>
      <div className="cursor-pointer bg-white rounded-xl shadow-sm overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-500 border border-transparent">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          <div className="mt-3 text-blue-600 font-medium text-sm flex items-center space-x-1 group">
            <span className="transition-transform group-hover:translate-x-1">→</span>
            <span>Details</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
