interface Props {
    title: string;
    description: string;
    imageUrl: string;
  }
  
  export default function ProductCard({ title, description, imageUrl }: Props) {
    return (
      <div className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          <div className="mt-3 text-blue-600 font-medium text-sm flex items-center space-x-1">
            <span>→</span> <span>Details</span>
          </div>
        </div>
      </div>
    );
  }
  