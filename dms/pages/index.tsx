import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <section className="py-12 px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </section>
    </Layout>
  );
}
