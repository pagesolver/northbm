import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-(--breakpoint-xl) container">
        <div className="navbar-start max-lg:gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Menu size={24} />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Link href="/"><Image
            src="/nbmhs-crop-removebg-preview.png"
            alt="North Brisbane Maintenance Logo"
            width={200}
            height={50}
            className="object-contain"
          /></Link>
          
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-lg menu-horizontal px-1">
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
