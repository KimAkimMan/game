"use client";

import { useState } from "react";
import { Play, Film } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  desc: string;
  url: string;
  thumb: string;
}

export default function VideoSection() {
  const videos: VideoItem[] = [
    {
      id: "lantern-rite",
      title: "LANTERN RITE",
      desc: "Perayaan tahunan festival lentera megah di Liyue Harbor.",
      url: "https://www.youtube.com/embed/dzsIw1intjo?autoplay=1",
      thumb: "https://img.youtube.com/vi/dzsIw1intjo/hqdefault.jpg",
    },
    {
      id: "zzz-intro",
      title: "Zenless Zone Zero",
      desc: "Trailer aksi kombo penuh adrenalin di kota New Eridu.",
      url: "https://www.youtube.com/embed/LDncWDZJcoA?autoplay=1",
      thumb: "https://img.youtube.com/vi/LDncWDZJcoA/hqdefault.jpg",
    },
    {
      id: "genshin-trailer",
      title: "Genshin Impact",
      desc: "Pengenalan petualangan melintasi penjuru benua Teyvat.",
      url: "https://www.youtube.com/embed/kglEsR7bqAY?autoplay=1",
      thumb: "https://img.youtube.com/vi/kglEsR7bqAY/hqdefault.jpg",
    },
    {
      id: "new-character",
      title: "New Character Reveal",
      desc: "Cuplikan skill dan animasi gameplay karakter terbaru.",
      url: "https://www.youtube.com/embed/vNqBUf1jQ54?autoplay=1",
      thumb: "https://img.youtube.com/vi/vNqBUf1jQ54/hqdefault.jpg",
    },
  ];

  const [activeVideo, setActiveVideo] = useState<VideoItem>(videos[0]);

  return (
    <section id="video" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest px-3 py-1 bg-blue-50 rounded-full">
            Media Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252525] mt-3 tracking-tight">
            Video Demo & Trailers
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Tonton cuplikan gameplay, animasi cinematic, dan teaser resmi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Video Player */}
          <div className="lg:col-span-8 flex flex-col space-y-4">
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black border border-gray-800">
              <iframe
                src={activeVideo.url}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="bg-gray-50/80 rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-1">
                <Film className="w-4 h-4" />
                <span>Now Playing</span>
              </div>
              <h3 className="text-2xl font-bold text-[#252525]">
                {activeVideo.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{activeVideo.desc}</p>
            </div>
          </div>

          {/* Video Playlist */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider px-1">
              Daftar Putar Video ({videos.length})
            </h4>
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
              {videos.map((vid) => {
                const isActive = vid.id === activeVideo.id;
                return (
                  <button
                    key={vid.id}
                    onClick={() => setActiveVideo(vid)}
                    className={`w-full text-left p-3 rounded-2xl flex items-center gap-3.5 transition-all duration-200 cursor-pointer border ${
                      isActive
                        ? "bg-blue-50/90 border-blue-400 shadow-md ring-2 ring-blue-400/20"
                        : "bg-white border-gray-100 hover:border-gray-300 hover:bg-gray-50 shadow-sm"
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className="relative w-28 h-18 shrink-0 rounded-xl overflow-hidden bg-gray-900 shadow-sm">
                      <img
                        src={vid.thumb}
                        alt={vid.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center ${
                            isActive
                              ? "bg-blue-600 text-white"
                              : "bg-white/90 text-gray-800"
                          }`}
                        >
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-sm font-bold truncate ${
                          isActive ? "text-blue-700" : "text-gray-900"
                        }`}
                      >
                        {vid.title}
                      </p>
                      <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">
                        {vid.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
