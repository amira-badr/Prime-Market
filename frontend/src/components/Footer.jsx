import logo from "../assets/logo.svg";
import { Globe, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-24 overflow-hidden">

      {/* Glow */}
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px]"></div>
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-[120px]"></div>

      {/* Card */}
      <div className="relative mx-auto max-w-7xl rounded-[35px] border border-white/20 bg-gradient-to-br from-[#17092f] via-[#25115d] to-[#0b5378] p-10 shadow-[0_0_70px_rgba(93,63,211,.35)]">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Logo */}
          <div>
            <img src={logo} alt="Prime Market" className="h-16" />

            <p className="mt-5 leading-8 text-gray-200">
              Prime Market هو متجر إلكتروني حديث يوفر أحدث المنتجات
              بجودة ممتازة وأسعار تنافسية مع تجربة تسوق احترافية.
            </p>

            <div className="mt-8 flex gap-4">

              <button className="rounded-full bg-white/10 p-3 text-white transition hover:scale-110 hover:bg-cyan-500">
                <Globe size={20} />
              </button>

              <button className="rounded-full bg-white/10 p-3 text-white transition hover:scale-110 hover:bg-fuchsia-500">
                <Mail size={20} />
              </button>

              <button className="rounded-full bg-white/10 p-3 text-white transition hover:scale-110 hover:bg-violet-500">
                <Phone size={20} />
              </button>

            </div>

          </div>

          {/* Links */}

          <div>

            <h3 className="mb-6 text-2xl font-bold text-white">
              روابط سريعة
            </h3>

            <ul className="space-y-4 text-gray-200">

              <li className="cursor-pointer transition hover:text-cyan-300">
                الرئيسية
              </li>

              <li className="cursor-pointer transition hover:text-cyan-300">
                المتجر
              </li>

              <li className="cursor-pointer transition hover:text-cyan-300">
                الأقسام
              </li>

              <li className="cursor-pointer transition hover:text-cyan-300">
                العروض
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-2xl font-bold text-white">
              تواصل معنا
            </h3>

            <div className="space-y-5 text-gray-200">

              <div className="flex items-center gap-3">
                <Phone className="text-cyan-300" size={20} />
                <span>+20 100 000 0000</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-cyan-300" size={20} />
                <span>info@primemarket.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-cyan-300" size={20} />
                <span>Egypt</span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-300">
          © {new Date().getFullYear()} Prime Market — جميع الحقوق محفوظة.
        </div>

      </div>

    </footer>
  );
};

export default Footer;