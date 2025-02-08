import ContactForm from "@/components/ContactForm";
import { Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { testimonials } from "@/testimonials";

export default function Page() {
  return (
    <>
      <div className="hero bg-[url('/collective.jpg')] bg-cover bg-center relative text-center rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />

        <div className="hero-content py-12 md:py-18 flex flex-col items-center max-w-xl mx-auto relative text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            North Brisbane Maintenance
          </h1>
          <p className="text-xl md:text-2xl mb-4">
            Professional Handyman Services
          </p>
          <Link
            href="tel:0490407790"
            className="btn btn-primary gap-2 text-lg mb-4"
          >
            <Phone size={24} />
            0490 407 790
          </Link>

          <ul className="flex flex-wrap justify-center gap-4">
            <li>Deck building</li>
            <li>Deck staining</li>
            <li>Staircase rebuilding</li>
            <li>Paver laying</li>
            <li>General carpentry</li>
            <li>Bathrooms</li>
            <li>Fencing and Pitching</li>
          </ul>
        </div>
      </div>

      <section id="about">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col justify-between h-full bg-base-100 p-6 rounded-lg shadow-sm">
            <div>
              <p className="text-lg text-base-content mb-4">
                Experience the professional alternative to DIY with Brent and
                Jo, based on beautiful Bribie Island. Serving Northside Brisbane
                and surrounding local areas, for many years, we bring a wealth
                of experience and knowledge to every project.
              </p>
              <p className="text-lg text-base-content mb-4">
                We are committed to delivering high-quality work with
                exceptional communication and reliable service. Communication is
                our priority—if there&apos;s ever a change in plans, you&apos;ll
                be the first to know. We keep you informed at every stage,
                ensuring smooth and hassle-free project management.
              </p>
              <p className="text-lg text-base-content mb-4">
                Our rates are honest and transparent, providing you with the
                best value. Contact us for a friendly chat about your project
                needs!
              </p>
            </div>
            <Link href="/our-work" className="btn btn-accent text-lg mt-4">
              View Our Portfolio
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full pt-[75%] rounded-lg overflow-hidden">
              <Image
                src="/brent.jpg"
                alt="Brent"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full pt-[75%] rounded-lg overflow-hidden">
              <Image src="/jo.jpg" alt="Jo" fill className="object-cover" />
            </div>
            <div className="relative w-full pt-[50%] col-span-2 rounded-lg overflow-hidden">
              <Image
                src="/collective.jpg"
                alt="Brent and Jo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <p className="text-base-content italic">
                  &quot;{testimonial.review}&quot;
                </p>
                <footer className="mt-4 text-base-content font-semibold">
                  - {testimonial.author}, {testimonial.authorLocation}
                </footer>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-6">
          Get in touch with us for your next project:
        </p>
        <ContactForm />
      </section>
    </>
  );
}
