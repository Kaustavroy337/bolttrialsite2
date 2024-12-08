import ServiceCard from './ServiceCard';

export default function Services() {
  const services = [
    {
      title: "Digital Marketing",
      description: "Strategic campaigns that drive engagement and conversions across digital platforms.",
      icon: "🚀"
    },
    {
      title: "Brand Strategy",
      description: "Comprehensive brand development and positioning for market success.",
      icon: "💡"
    },
    {
      title: "Content Creation",
      description: "Compelling content that tells your story and connects with your audience.",
      icon: "✍️"
    },
    {
      title: "Social Media",
      description: "Expert social media management to build and engage your community.",
      icon: "📱"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}