import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer1 =() => {
  return (
    <footer className="bg-[#043455] text-white/80 pt-16 pb-8">
      <div className=" px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Orbi<span className="text-[#BD8939]">University</span>
            </h3>
            <p className="mb-6 text-sm">
              Your e-commerce education partner. Learn everything about dropshipping, vendor relations, imports, and direct selling on Orbi.pk.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#BD8939] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#BD8939] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#BD8939] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#BD8939] transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#BD8939] transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#BD8939] transition-colors">Home</Link></li>
              <li><Link href="/categories" className="hover:text-[#BD8939] transition-colors">Courses</Link></li>
              <li><Link href="/about" className="hover:text-[#BD8939] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#BD8939] transition-colors">Contact</Link></li>
              <li><a href="https://orbi.pk" target="_blank" rel="noopener noreferrer" className="hover:text-[#BD8939] transition-colors">Visit Orbi.pk</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Course Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/Categories?category=dropshipping" className="hover:text-[#BD8939] transition-colors">Dropshipping</Link></li>
              <li><Link href="/categories?category=vendor" className="hover:text-[#BD8939] transition-colors">Vendor Relations</Link></li>
              <li><Link href="/categories?category=importing" className="hover:text-[#BD8939] transition-colors">Importing</Link></li>
              <li><Link href="/categories?category=selling" className="hover:text-[#BD8939] transition-colors">Direct Selling</Link></li>
              <li><Link href="/categories?category=marketing" className="hover:text-[#BD8939] transition-colors">E-commerce Marketing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>Orbi Headquarters</li>
              <li>3rd Floor, GCU Road, Nishat One IT Tower Faisalabad</li>
              <li>orbiuniversity@gmail.com</li>
              <li>(UAN) 111-116-724</li>
            </ul>
          </div>
        </div>
        
        {/* Separator */}
        <div className="bg-white/10 h-[1px] my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Orbi University. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-[#BD8939] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#BD8939] transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-[#BD8939] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer1;