import Image from "next/image";
import { Heart } from "lucide-react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/components/SocialIcons";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Avatar Image */}
          <div className="relative group shrink-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-4 ring-blue-100/80">
              <Image
                src="/iseng/WhatsApp Image 2025-01-31 at 14.24.52_ebbbc81basas.jpg"
                alt="Muhammad Abshar Hakim (KIM/FALL)"
                fill
                sizes="(max-width: 640px) 256px, 288px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white p-3 rounded-2xl shadow-lg flex items-center gap-1.5">
              <Heart className="w-5 h-5 fill-white text-white" />
            </div>
          </div>

          {/* About Details */}
          <div className="flex-1 text-center lg:text-left space-y-5">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">
              Profile Curator
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252525] tracking-tight">
              About Us
            </h2>
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                (KIM/FALL)
              </h3>
              <p className="text-base font-semibold text-blue-600">
                Muhammad Abshar Hakim
              </p>
              <p className="text-gray-600 italic text-base leading-relaxed max-w-2xl">
                &ldquo;Bermain Game Bisa membuat tenang tapi kalo gacha ampas mending uninstal.&rdquo;
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="https://www.facebook.com/hakim.daksnecis/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gray-100 hover:bg-[#1877F2] text-gray-700 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/abshar_hkm/#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 text-gray-700 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-1"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gray-100 hover:bg-black text-gray-700 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-1"
                aria-label="X Twitter"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
