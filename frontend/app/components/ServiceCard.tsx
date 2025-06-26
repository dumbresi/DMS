interface Props {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-200">
      <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
