import Image from "next/image";
import { Heart } from "lucide-react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer id="about" className="bg-[#12141c] text-white pt-10 pb-10 border-t border-gray-800">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Profile Curator — compact strip */}
        <div className="flex flex-col sm:flex-row items-center gap-4 py-4 px-5 rounded-2xl bg-white/5 border border-white/10 mb-8">
          {/* Avatar kecil */}
          <div className="relative shrink-0">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 ring-2 ring-blue-500/20">
              <Image
                src="/iseng/WhatsApp Image 2025-01-31 at 14.24.52_ebbbc81basas.jpg"
                alt="Muhammad Abshar Hakim (KIM/FALL)"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white p-1 rounded-full flex items-center justify-center">
              <Heart className="w-2.5 h-2.5 fill-white text-white" />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center sm:text-left min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Profile Curator</span>
            <p className="text-sm font-bold text-white leading-tight truncate">
              (KIM/FALL){" "}
              <span className="font-normal text-gray-400 text-xs">— Muhammad Abshar Hakim</span>
            </p>
            <p className="text-xs text-gray-400 italic mt-0.5 line-clamp-1">
              &ldquo;Bermain Game Bisa membuat tenang tapi kalo gacha ampas mending uninstal.&rdquo;
            </p>
          </div>

          {/* Social icons mini */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://www.facebook.com/hakim.daksnecis/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.instagram.com/abshar_hkm/#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Brand & Links Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-800">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <span className="text-2xl font-bold tracking-tight">
              GAME<span className="text-[#007BFF]">.</span>
            </span>
            <p className="text-xs text-gray-400">
              Arsip Game Komprehensif Karakter &amp; Komunitas Gacha
            </p>
          </div>

          {/* Policy Links */}
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Refund Policy
            </a>
            <span>•</span>
            <a
              href="/iseng/nyoba_web.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Legacy HTML ↗
            </a>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <div className="space-y-1 text-center sm:text-left">
            <p>© 2025 GAME. All rights reserved.</p>
            <p className="text-[11px] text-gray-400">
              Situs fan non-komersial. Semua karakter &amp; aset adalah milik pemegang hak ciptanya (Cygames, HoYoverse, Nexon, dll.).
            </p>
          </div>
          <p className="flex items-center gap-1 shrink-0">
            Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> in Next.js &amp; React
          </p>
        </div>
      </div>
    </footer>
  );
}
