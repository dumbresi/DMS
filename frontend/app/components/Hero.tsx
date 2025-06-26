export default function Hero() {
  return (
    <section className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-white" style={{ backgroundImage: 'url("/images/hero.jpg")' }}>
      <div className="bg-black/60 absolute inset-0" />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Expertise in Medical Care For You</h1>
        <div className="flex justify-center space-x-4">
          <button className="bg-yellow-400 text-black px-5 py-2 rounded">Get a Quick Quote</button>
          <button className="border border-white px-5 py-2 rounded">Learn More</button>
        </div>
      </div>
    </section>
  );
}
