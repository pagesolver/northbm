import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-screen-xl container py-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <div className="flex-shrink-1 max-w-[200px]">
          <Image
            src="/nbmhs-crop-removebg-preview.png"
            alt="North Brisbane Maintenance Logo"
            width={200}
            height={50}
            className="object-contain w-full"
          />
        </div>
        <nav className="flex-grow">
          <ul className="flex space-x-2 sm:space-x-4 justify-end">
            <li><Link href="/our-work" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base">Portfolio</Link></li>
            <li><Link href="/#about" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base">About</Link></li>
            <li><Link href="/#contact" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}