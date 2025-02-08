import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-content-center sm:px-16 px-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold">ResumeAI</h2>
          <p className="text-sm text-gray-400 mt-2">
            AI-powered career tools to land your dream job faster!
          </p>
          <div className="flex mt-4 space-x-4">
            <FaFacebook className="text-xl cursor-pointer hover:text-blue-500" />
            <FaTwitter className="text-xl cursor-pointer hover:text-blue-400" />
            <FaLinkedin className="text-xl cursor-pointer hover:text-blue-600" />
            <FaInstagram className="text-xl cursor-pointer hover:text-pink-500" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">How It Works</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Customer Support</a></li>
            <li><a href="#" className="hover:text-white">Resume Writing Guide</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-400">📧 support@resumeai.com</p>
          <p className="text-sm text-gray-400">📞 +1 (555) 123-4567</p>
          <p className="text-sm text-gray-400">📍 123 AI Street, Tech City</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} ResumeAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
