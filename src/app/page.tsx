import ContactForm from "@/components/ContactForm";
import { Facebook, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

      <section id="about" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-lg text-gray-600 mb-4">
                Experience the professional alternative to DIY with Brent and Joe, your trusted experts based on beautiful Bribie Island. Serving Northside Brisbane and surrounding local areas, for many years, we bring a wealth of experience and knowledge to every project.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We are committed to delivering high-quality work with exceptional communication and reliable service. Punctuality is our priority—if there's ever a change in plans, you'll be the first to know. We keep you informed at every stage, ensuring smooth and hassle-free project management.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our rates are honest and transparent, providing you with the best value. Contact us for a friendly chat about your project needs!
              </p>
            </div>
            <Link href="/our-work" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mt-2 w-max">
              View Our Portfolio
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full pt-[75%]">
              <Image src="/brent.jpg" alt="Brent" fill className="rounded-lg object-cover" />
            </div>
            <div className="relative w-full pt-[75%]">
              <Image src="/joe.jpg" alt="Joe" fill className="rounded-lg object-cover" />
            </div>
            <div className="relative w-full pt-[56.25%] col-span-2">
              <Image src="/collective.jpg" alt="Brent and Joe" fill className="rounded-lg object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <blockquote className="bg-gray-200 p-6 rounded-lg shadow flex flex-col justify-between gap-4">
            <p className="text-gray-600 italic">&quot;I am absolutely thrilled with my bathroom renovation! Brent and Joe were courteous and clean, and they finished the job right on time. Their communication was exceptional throughout the entire process, making me feel completely safe in their hands. I highly recommend their services!&quot;</p>
            <footer className="text-gray-800 font-semibold">- Belinda (Bribie Island Client)</footer>
          </blockquote>
          <blockquote className="bg-gray-200 p-6 rounded-lg shadow flex flex-col justify-between gap-4">
            <p className="text-gray-600 italic">&quot;North Brisbane Maintenance did an excellent job on our deck. Professional, punctual, and great attention to detail!&quot;</p>
            <footer className="text-gray-800 font-semibold">- Gary (Bribie Island Client)</footer>
          </blockquote>
          <blockquote className="bg-gray-200 p-6 rounded-lg shadow flex flex-col justify-between gap-4">
            <p className="text-gray-600 italic">&quot;I recently hired North Brisbane Maintenance for some home maintenance tasks, and I couldn't be happier with the results. They were professional, efficient, and incredibly thorough. Every detail was taken care of, and they ensured everything was completed with the least amount of fuss. Excellent service all around!&quot;</p>
            <footer className="text-gray-800 font-semibold">- Samantha (Deception Bay Client)</footer>
          </blockquote>
          <blockquote className="bg-gray-200 p-6 rounded-lg shadow flex flex-col justify-between gap-4">
            <p className="text-gray-600 italic">&quot;I recently had our entire house painted inside by North Brisbane Maintenance, and the results are fantastic! The team was professional, punctual, and meticulous. The communication throughout the project was excellent, and they left our home clean and tidy. We couldn't be happier with their work and highly recommend their services.&quot;</p>
            <footer className="text-gray-800 font-semibold">- Brett (Caboolture Client)</footer>
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