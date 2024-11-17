// components/Navbar.js
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-[#043873] text-white">
      <div className="flex-shrink-0">
        <Link href="/" className="text-2xl font-semibold">whitepace
        </Link>
      </div>

      <div className="flex-1 flex justify-center space-x-6">
        <Link href="/home"className="hover:text-gray-400">Products
        </Link>
        <Link href="/about"className="hover:text-gray-400">Solutions
        </Link>
        <Link href="/services"className="hover:text-gray-400">Resources
        </Link>
        <Link href="/Pricing"className="hover:text-gray-400">Pricing
        </Link>
      </div>

      <div>
        <button className="px-4 py-2 bg-[#FFE492] text-black rounded hover:bg-blue-700">
          Contact
        </button>
      </div>
    </nav>
  )
}

export default Navbar
