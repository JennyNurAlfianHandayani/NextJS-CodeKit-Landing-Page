import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Image
                src="/logo.png"
                alt="MS Global Services"
                width={200}
                height={60}
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-300 mb-6 max-w-md">
                Your gateway to global business success. Strategic advisory, compliance, and financial solutions for
                entrepreneurs and enterprises worldwide.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-4 w-4 mr-2 text-[#D7B459]" />
                  <span className="text-sm">Dubai, UAE</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="h-4 w-4 mr-2 text-[#D7B459]" />
                  <span className="text-sm">+971 XX XXX XXXX</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-4 w-4 mr-2 text-[#D7B459]" />
                  <span className="text-sm">info@msglobalservices.com</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#company-formation" className="text-gray-300 hover:text-[#D7B459] transition-colors">
                    Company Formation
                  </Link>
                </li>
                <li>
                  <Link href="#audit-tax" className="text-gray-300 hover:text-[#D7B459] transition-colors">
                    Audit & Tax
                  </Link>
                </li>
                <li>
                  <Link href="#investment-banking" className="text-gray-300 hover:text-[#D7B459] transition-colors">
                    Investment Banking
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-[#D7B459] transition-colors">
                    Capital Markets
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-[#D7B459] transition-colors">
                    Business Advisory
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-300 hover:text-[#D7B459] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-[#D7B459] transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-[#D7B459] transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-300 hover:text-[#D7B459] transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-[#D7B459] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2024 MS Global Services. All rights reserved.</p>
              <p className="text-gray-400 text-sm mt-2 md:mt-0">
                Boutique consultancy • Global reach • Local expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
