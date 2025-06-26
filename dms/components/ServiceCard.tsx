interface Props {
    title: string;
    description: string;
  }
  
  export default function ServiceCard({ title, description }: Props) {
    return (
      <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  }
  