"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import GameMenu from "@/components/GameMenu";
import VideoSection from "@/components/VideoSection";
import CharacterSection from "@/components/CharacterSection";
import EventGallery from "@/components/EventGallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedGame, setSelectedGame] = useState<string>("genshin");

  const handleSelectGame = (gameId: string) => {
    setSelectedGame(gameId);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      <Navbar />
      <main className="flex-1">
        <Hero onSelectGame={handleSelectGame} />
        <About />
        <GameMenu onSelectGame={handleSelectGame} />
        <VideoSection />
        <CharacterSection
          selectedGame={selectedGame}
          onSelectGame={handleSelectGame}
        />
        <EventGallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
