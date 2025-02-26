import { FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black-500 to-purple-500 py-8 sm:py-12 border-t border-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
          <div className="mb-6 sm:mb-0 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white mb-4">ArnoCodes</h2>
            <div className="flex space-x-4 justify-center sm:justify-start">
            <a href="https://www.linkedin.com/company/arnocodes/" className="text-white hover:text-gray-200 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href=" https://chat.whatsapp.com/JUr6pLKYcKi9GNyubGNd8v" className="text-white hover:text-gray-200 transition-colors">
                <FaWhatsapp size={24} />
              </a>
              <a href="https://www.instagram.com/arnocodes?igsh=MTQ5YmRnanhkN2M1MA==" className="text-white hover:text-gray-200 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://x.com/ArnoCodes?s=08" className="text-white hover:text-gray-200 transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">CONTACT US</h3>
            {/* <p className="text-white text-sm sm:text-base">Dr. Yogesh Shukla</p> */}
            <p className="text-white text-sm sm:text-base">ArnoCodes | A place to grow</p>
            <p className="text-white text-sm sm:text-base">info.arnocodes26@gmail.com</p>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/20 text-center">
          <p className="text-white text-sm">&copy; 2025 ArnoCodes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

