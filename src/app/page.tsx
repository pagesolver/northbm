import ContactForm from "@/components/ContactForm";
import { Facebook, Phone } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">North Brisbane Maintenance</h1>
        <p className="text-2xl text-gray-600 mb-6">Professional Handyman Services</p>

        <div className="flex justify-center items-center space-x-6">
          <Link
            href="https://www.facebook.com/profile.php?id=61558880364156"
            target="_blank"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Facebook size={24} />
            <span className="text-lg font-semibold">Facebook</span>
          </Link>
          <Link
            href="tel:0490407790"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Phone size={24} />
            <span className="text-lg font-semibold">0490 407 790</span>
          </Link>
        </div>
      </div>

      <section id="about" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
        <p className="text-lg text-gray-600 mb-4">
          The professional alternative to do-it-yourself. We live on Bribie and work both on & off the Island.
          On time & courteous, we provide quality work for a reasonable price.
        </p>
        <Link href="/our-work" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          View Our Portfolio
        </Link>
      </section>

      <section id="services" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600">
          <li className="flex items-center"><span className="mr-2">•</span>Deck building and staining</li>
          <li className="flex items-center"><span className="mr-2">•</span>Staircase rebuilding</li>
          <li className="flex items-center"><span className="mr-2">•</span>Paver laying</li>
          <li className="flex items-center"><span className="mr-2">•</span>General carpentry</li>
          <li className="flex items-center"><span className="mr-2">•</span>Bathrooms</li>
          <li className="flex items-center"><span className="mr-2">•</span>Fencing and pitching</li>
        </ul>
      </section>

      <section id="testimonials" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <blockquote className="bg-gray-200 p-6 rounded-lg shadow flex flex-col justify-between gap-4">
            <p className="text-gray-600 italic">&quot;North Brisbane Maintenance did an excellent job on our deck. Professional, punctual, and great attention to detail!&quot;</p>
            <footer className="text-gray-800 font-semibold">- Petrie Client</footer>
          </blockquote>
          <blockquote className="bg-gray-200 p-6 rounded-lg shadow flex flex-col justify-between gap-4">
            <p className="text-gray-600 italic">&quot;I&apos;m extremely satisfied with the bathroom renovation. They were courteous, clean, and finished on time. Highly recommended!&quot;</p>
            <footer className="text-gray-800 font-semibold">- Bribie Island Client</footer>
          </blockquote>
        </div>
      </section>

      <section id="contact" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-6">Get in touch with us for your next project:</p>
        <ContactForm />
      </section>
    </>
  )
}