import ContactForm from "@/components/ContactForm";
import { Phone, ArrowRight, CheckCircle, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { testimonials } from "@/testimonials";
import Reviews from "@/components/Reviews";

export default function Page() {
  return (
    <>
      <div className="hero bg-gradient-to-b from-base-200 to-base-100 rounded-xl overflow-hidden shadow-lg border border-base-300 mb-12">
        <div className="hero-content py-6 md:py-10 flex flex-col md:flex-row gap-8 max-w-7xl mx-auto relative px-4 items-center">
          <div className="text-left md:w-1/2 space-y-5">
            <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-1">
              Trusted Professionals Since 2010
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-base-content leading-tight">
              North Brisbane Maintenance
            </h1>
            <p className="text-xl md:text-2xl text-base-content/80">
              Quality handyman services for your home improvement needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 z-10 relative">
              <Link
                href="tel:0490407790"
                className="btn btn-primary btn-lg gap-2 text-lg"
              >
                <Phone size={20} />
                0490 407 790
              </Link>
              <Link href="/portfolio" className="btn btn-outline btn-lg gap-2">
                View Portfolio
                <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6 text-sm font-medium">
              {["Deck building", "Deck staining", "Staircase rebuilding", "Paver laying", "General carpentry", "Bathrooms"].map((service, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative md:ml-8">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-lg overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/collective.jpg"
                alt="North Brisbane Maintenance Team"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-base-100 p-4 rounded-lg shadow-lg border border-base-300">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="font-medium">5.0 average rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Reviews />

      <section id="about">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-1 w-12 bg-primary rounded"></div>
          <h2 className="text-3xl font-bold text-base-content">About Us</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-base-100 p-8 rounded-xl shadow-md border border-base-200 space-y-5">
            <p className="text-lg text-base-content/90 leading-relaxed">
              Experience the professional alternative to DIY with Brent and
              Jo, based on beautiful Bribie Island. Serving Northside Brisbane
              and surrounding local areas, for many years, we bring a wealth
              of experience and knowledge to every project.
            </p>
            <p className="text-lg text-base-content/90 leading-relaxed">
              We are committed to delivering high-quality work with
              exceptional communication and reliable service. Communication is
              our priority—if there&apos;s ever a change in plans, you&apos;ll
              be the first to know.
            </p>
            <p className="text-lg text-base-content/90 leading-relaxed">
              Our rates are honest and transparent, providing you with the
              best value. Contact us for a friendly chat about your project
              needs!
            </p>
            <div className="pt-4">
              <Link href="/our-work" className="btn btn-primary btn-lg gap-2">
                View Our Portfolio
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Image
                src="/brent.jpg"
                alt="Brent"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <span className="text-white p-4 font-semibold text-lg">Brent</span>
              </div>
            </div>
            <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Image 
                src="/jo.jpg" 
                alt="Jo" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <span className="text-white p-4 font-semibold text-lg">Jo</span>
              </div>
            </div>
            <div className="relative w-full aspect-video col-span-2 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Image
                src="/collective.jpg"
                alt="Brent and Jo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <span className="text-white p-4 font-semibold text-lg">Our Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-1 w-12 bg-primary rounded"></div>
          <h2 className="text-3xl font-bold text-base-content">What Our Clients Say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-base-100 p-6 rounded-xl shadow-md border border-base-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-base-content/90 text-lg italic leading-relaxed">
                &quot;{testimonial.review}&quot;
              </p>
              <div className="mt-6 pt-4 border-t border-base-200">
                <p className="font-medium text-base-content">
                  {testimonial.author}
                </p>
                <p className="text-sm text-base-content/70">
                  {testimonial.authorLocation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-1 w-12 bg-primary rounded"></div>
          <h2 className="text-3xl font-bold text-base-content">Contact Us</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg text-base-content/90 leading-relaxed">
              Ready to transform your space? Get in touch with us for a free consultation on your next project.
            </p>
            
            <div className="bg-base-100 p-6 rounded-xl shadow-md border border-base-200">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-base-content/70">Call us at</p>
                  <a href="tel:0490407790" className="text-lg font-medium text-base-content hover:text-primary">
                    0490 407 790
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
