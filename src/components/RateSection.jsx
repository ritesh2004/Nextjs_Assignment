export default function RatesSection() {
  return (
    <section className="w-[90%] mx-auto text-gray-800 py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-serif text-black mb-10" style={{fontFamily: 'var(--font-playfair)'}}>Session Fees</h2>

        <p className="text-lg mb-4 font-thin text-black" style={{fontFamily: 'var(--font-playfair)'}}>Individual Session - $200/Session</p>
        <p className="text-lg mb-8 font-thin text-black" style={{fontFamily: 'var(--font-playfair)'}}>Couple Session - $240/Session</p>
      </div>
    </section>
  );
}
