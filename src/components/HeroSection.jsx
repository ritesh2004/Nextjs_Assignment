import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <main className="relative min-h-screen mx-auto w-[90%] overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        //poster="/ocean.jpg" // fallback image
        >
          <source src="/video/ocean.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 bg-black/40">
        <div className="text-center text-white max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-semibold mb-6">
            Compassionate Clinical Psychology <br /> for <br /> Lasting Change
          </h1>
          <h2 className="text-lg font-light md:text-xl mb-10">
            Empowering adults through evidence-based therapy, self-discovery, and emotional wellness — available via telehealth in Michigan and most U.S. states through PSYPACT.
          </h2>
          <Button size={"lg"}>
            Book a Consultation
          </Button>
        </div>
      </div>
    </main>
  );
}
