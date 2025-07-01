export default function AboutSection() {
  return (
    <section className="bg-[#fefefe] w-[90%] mx-auto py-28 px-6 mb-15 border-b-2 border-[#7e7e6b] md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-start gap-10">
        {/* Text Content */}
        <div className="md:w-2/5">
          <h2 className="text-2xl md:text-3xl font-bold text-[#7e7e6b] mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            About Dr. Jennifer Hahm
          </h2>
          <p className="mb-4 leading-relaxed text-[#7e7e6b] font-thin text-lg">
            I'm Dr. Serena Blake, a licensed clinical psychologist (PsyD) based in Los Angeles, CA. Over the past eight years, I’ve had the privilege of working with hundreds of individuals across more than 500 therapy sessions. My approach blends evidence-based techniques—such as cognitive-behavioral therapy and mindfulness—with warmth, curiosity, and deep respect for your lived experience.
          </p>
          <p className="mb-4 leading-relaxed text-[#7e7e6b] font-thin text-lg">
            I specialize in helping people navigate anxiety, strengthen their relationships, and heal from trauma. Whether we meet in my Maplewood Drive office or connect virtually via Zoom, I strive to create a safe, supportive space where you can feel heard, understood, and empowered to grow.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-2/5 flex-shrink-0">
          <img
            src="/profile.jpg"
            alt="Dr. Jennifer Hahm"
            className="w-full h-auto object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
