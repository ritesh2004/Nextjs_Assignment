export default function ServicesSection() {
  const services = [
    {
      title: "Anxiety & Stress Management",
      image: "/anxiety.jpg",
      description:
        "Therapy can help you navigate chronic stress, panic, and overwhelm. Learn tools to manage anxiety, regain calm, and build emotional resilience in daily life.",
    },
    {
      title: "Relationship Counseling",
      image: "/relationship.jpg",
      description:
        "Improve communication, rebuild trust, and deepen emotional connection—whether in romantic relationships, friendships, or family dynamics.",
    },
    {
      title: "Trauma Recovery",
      image: "/trauma.jpg",
      description:
        "Whether from past events or ongoing emotional wounds, trauma therapy offers a safe, supportive space to process, heal, and move forward with confidence.",
    },
  ];

  return (
    <section className="bg-[#f9f6ef] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-[#41413F] mb-16" style={{ fontFamily: 'var(--font-playfair)' }}>
          Areas of Focus
        </h2>

        <div className="grid gap-12 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-48 h-48 mb-6 overflow-hidden rounded-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-2xl font-medium text-[#41413F] mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                {service.title}
              </h2>
              <p className="text-lg font-thin text-[#41413F] leading-relaxed px-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
