import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Social media icons
import Image from "next/image"; // Import for the logo

export function Footer() {
  const logoSrc = "/images/logo.png";

  return (
    <footer id="footer" className="bg-gray-900 text-gray-200 py-16 w-full"> {/* Increased padding */}
      {/* Footer Top Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div className="flex flex-col items-center lg:items-start">
          <Link href="/" className="flex flex-col items-center lg:items-start">
            <Image src={logoSrc} alt="Logo" width={100} height={100} className="mb-2" />
            <p className="text-center lg:text-left text-sm text-gray-400">
              PERG DIPONEGORO KISARAN
            </p>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="hover:text-white transition duration-300">
              Home
            </Link>
            <Link
              href="/gallery"
              className="hover:text-white transition duration-300"
            >
              Gallery
            </Link>
          </nav>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="text-sm text-gray-400 text-center lg:text-left">
            Address: Jl. DIPONEGORO No. 125, Kisaran, Indonesia
          </p>
          <p className="text-sm text-gray-400 text-center lg:text-left">Email: smadiponegorokisaran@gmail.com</p>
          <p className="text-sm text-gray-400 text-center lg:text-left">Phone: (62) 623 41070</p>

          {/* Social Media Icons */}
          <div className="mt-4 flex space-x-4 justify-center lg:justify-start">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebookF className="hover:text-white transition duration-300 text-xl" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter className="hover:text-white transition duration-300 text-xl" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="hover:text-white transition duration-300 text-xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-12 pt-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 text-center w-full">
            © {new Date().getFullYear()} PERG DIPONEGORO KISARAN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
