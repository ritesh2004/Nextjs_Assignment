export default function ContactSection() {
  return (
    <section className="w-[90%] mx-auto py-20 px-6" style={{ fontFamily: 'var(--font-playfair)' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md: gap-12">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Office</h2>
          <p className="text-lg text-gray-800">
            1287 Maplewood Drive <br />
            Los Angeles <br />
            CA 90026
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-[#0c3d3d] text-white rounded"
          >
            Google Maps
          </a>

          <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-3">Office Hours</h2>
          <p className="text-lg text-gray-800">In-persion: Tue & Thu, 10 AM–6 PM</p>
          <p className="text-lg text-gray-800">Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</p>

          <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-3">Contact</h2>
          <a className="text-lg text-gray-800" href="tel:(323) 555-0192">📞 (323) 555-0192</a>
            <br />
          <a className="text-lg text-gray-800" href="mailto:serena@blakepsychology.com">📧 serena@blakepsychology.com</a>
        </div>

        {/* Right Column - Form */}
        <div className="bg-white rounded shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Get In Touch
          </h2>
          <p className="text-sm text-gray-700 text-center mb-6">
            Simply fill out the brief fields below and Ellie will be in touch
            with you soon, usually within one business day. This form is safe,
            private, and completely free.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="w-full border rounded px-4 py-2 mt-1"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full border rounded px-4 py-2 mt-1"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="text"
                className="w-full border rounded px-4 py-2 mt-1"
                placeholder="(555) 234-5678"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                What brings you here?
              </label>
              <textarea
                rows="4"
                className="w-full border rounded px-4 py-2 mt-1"
                placeholder="How can I help you?"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred time to reach you
              </label>
              <input
                type="text"
                className="w-full border rounded px-4 py-2 mt-1"
                placeholder="Best time to call or email" 
                required
                />
                
            </div>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="consent"
                    className="mr-2"
                    required
                />
                <label htmlFor="consent" className="text-sm text-gray-700">
                    I agree to be contacted
                </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0c3d3d] text-white py-2 rounded mt-2"
            >
              Submit
            </button>
            <p className="text-xs text-gray-600 mt-3">
              © By submitting, you confirm you are 18+ and agree to our{" "}
              <a href="#" className="underline">
                Privacy Policy & TOS
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
