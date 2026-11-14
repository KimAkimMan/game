"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_EVENTS, GalleryEvent } from "@/lib/gameData";
import { X, ZoomIn, Calendar } from "lucide-react";

export default function EventGallery() {
  const [selectedEventKey, setSelectedEventKey] = useState<string>("genshin");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const currentGallery =
    GALLERY_EVENTS.find((e) => e.eventKey === selectedEventKey) ||
    GALLERY_EVENTS[0];

  return (
    <section id="gallery" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest px-3 py-1 bg-blue-50 rounded-full">
            In-Game Moments
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252525] mt-3 tracking-tight">
            Event Gallery
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Dokumentasi event spesial, poster promosi, dan momen berharga dalam game.
          </p>
        </div>

        {/* Gallery Game Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {GALLERY_EVENTS.map((event: GalleryEvent) => {
            const isActive = selectedEventKey === event.eventKey;
            return (
              <button
                key={event.eventKey}
                onClick={() => setSelectedEventKey(event.eventKey)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#007BFF] text-white shadow-md shadow-blue-500/25 scale-105"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {event.eventTitle.replace("Event ", "")}
              </button>
            );
          })}
        </div>

        {/* Gallery Title */}
        <div className="flex items-center justify-center gap-2 mb-8 text-gray-800">
          <Calendar className="w-5 h-5 text-blue-600" />
          <h3 className="text-xl sm:text-2xl font-bold">
            {currentGallery.eventTitle}
          </h3>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentGallery.images.map((imgSrc, idx) => (
            <div
              key={`${imgSrc}-${idx}`}
              onClick={() => setLightboxImage(imgSrc)}
              className="group relative aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-md hover:shadow-2xl border border-gray-100 cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <Image
                src={imgSrc}
                alt={`${currentGallery.eventTitle} ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-108 transition-transform duration-500"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="p-3 bg-white/90 text-gray-900 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <ZoomIn className="w-5 h-5 text-blue-600" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[2000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            aria-label="Tutup"
          >
            <X className="w-7 h-7" />
          </button>
          <div
            className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt="Zoomed Event View"
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
