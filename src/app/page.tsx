import { Facebook, Phone } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">North Brisbane Maintenance</h1>
        <p className="text-xl text-gray-600 mb-6">Professional Handyman Services</p>
        
        <div className="flex justify-center items-center space-x-6">
          <Link 
            href="https://www.facebook.com/profile.php?id=61558880364156" 
            target="_blank"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Facebook />
            <span className="text-lg font-semibold">facebook</span>
          </Link>
          <Link 
            href="tel:0490407790" 
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Phone />
            <span className="text-lg font-semibold">0490 407 790</span>
          </Link>
        </div>
      </section>   

      <section id="services">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Services</h2>
        <ul className="list-disc list-inside text-gray-600 flex flex-wrap justify-between gap-2">
          <li>Deck building and staining</li>
          <li>Staircase rebuilding</li>
          <li>Paver laying</li>
          <li>General carpentry</li>
          <li>Bathrooms</li>
          <li>Fencing and pitching</li>
        </ul>
      </section>

      <hr />

      <section id="about">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About Us</h2>
        <p className="text-gray-600">
          The professional alternative to do-it-yourself. We live on Bribie and work both on & off the Island.
          On time & courteous, we provide quality work for a reasonable price.
        </p>
      </section>

      <hr />

      <section id="our-work" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Work</h2>
        <p className="text-gray-600 mb-4">Check out some of our recent projects:</p>
        <Link href="/our-work" className="text-blue-600 hover:text-blue-800">
          View Our Portfolio &rarr;
        </Link>
      </section>

      <hr />

      <section id="contact" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-4">Fill out the form below and we'll get back to you as soon as possible. Otherwise, contact us via phone or facebook.</p>
        {/* Add your contact form here */}
      </section>
      </>
  )
}