import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-screen-xl container py-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Image
          src="/nbmhs-crop-removebg-preview.png"
          alt="North Brisbane Maintenance Logo"
          width={200}
          height={50}
          className="object-contain"
        />
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#services" className="text-gray-600 hover:text-gray-900">Services</Link></li>
            <li><Link href="#about" className="text-gray-600 hover:text-gray-900">About</Link></li>
            <li><Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}