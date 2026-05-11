/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import React, { useState, useRef } from 'react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [houseImage, setHouseImage] = useState("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop");
  const [textureImage, setTextureImage] = useState("https://images.unsplash.com/photo-1618219740975-d40978bb7378?q=80&w=800&auto=format&fit=crop");
  const [sandImage, setSandImage] = useState("");
  const [slateImage, setSlateImage] = useState("https://images.unsplash.com/photo-1518098268026-4e89f1a2cb8b?q=80&w=800");
  const [fernsImage, setFernsImage] = useState("https://images.unsplash.com/photo-1542315152-ea1c3dfb867c?q=80&w=800&auto=format&fit=crop");
  const [woodImage, setWoodImage] = useState("https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=800&auto=format&fit=crop");
  
  const [modelImage, setModelImage] = useState("/modelo.png.png");
  const [calmImage, setCalmImage] = useState("https://images.unsplash.com/photo-1542038383-ce83ba2e8620?q=80&w=800&auto=format&fit=crop");
  const [piece1Image, setPiece1Image] = useState("https://images.unsplash.com/photo-1544022613-e87ca7cebbcc?w=400&q=80");
  const [piece2Image, setPiece2Image] = useState("https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80");
  const [piece3Image, setPiece3Image] = useState("https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&q=80");
  const [piece4Image, setPiece4Image] = useState("https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&q=80");
  const [piece5Image, setPiece5Image] = useState("https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80");

  const videoInputRef = useRef<HTMLInputElement>(null);
  const houseInputRef = useRef<HTMLInputElement>(null);
  const textureInputRef = useRef<HTMLInputElement>(null);
  const sandInputRef = useRef<HTMLInputElement>(null);
  const slateInputRef = useRef<HTMLInputElement>(null);
  const fernsInputRef = useRef<HTMLInputElement>(null);
  const woodInputRef = useRef<HTMLInputElement>(null);
  const modelInputRef = useRef<HTMLInputElement>(null);
  const calmInputRef = useRef<HTMLInputElement>(null);
  const piece1InputRef = useRef<HTMLInputElement>(null);
  const piece2InputRef = useRef<HTMLInputElement>(null);
  const piece3InputRef = useRef<HTMLInputElement>(null);
  const piece4InputRef = useRef<HTMLInputElement>(null);
  const piece5InputRef = useRef<HTMLInputElement>(null);

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoUrl(URL.createObjectURL(file));
    }
  };

  const handleHouseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setHouseImage(URL.createObjectURL(file));
    }
  };

  const handleTextureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setTextureImage(URL.createObjectURL(file));
    }
  };

  const handleSandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSandImage(URL.createObjectURL(file));
    }
  };

  const handleSlateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSlateImage(URL.createObjectURL(file));
    }
  };

  const handleFernsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFernsImage(URL.createObjectURL(file));
    }
  };

  const handleWoodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setWoodImage(URL.createObjectURL(file));
    }
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setModelImage(URL.createObjectURL(file));
  };
  const handleCalmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setCalmImage(URL.createObjectURL(file));
  };
  const handlePiece1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPiece1Image(URL.createObjectURL(file));
  };
  const handlePiece2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPiece2Image(URL.createObjectURL(file));
  };
  const handlePiece3Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPiece3Image(URL.createObjectURL(file));
  };
  const handlePiece4Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPiece4Image(URL.createObjectURL(file));
  };
  const handlePiece5Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPiece5Image(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen font-sans selection:bg-cph-olive selection:text-cph-sand">
      {/* Container limits width on ultra-large screens to maintain editorial proportions */}
      <div className="max-w-[1600px] mx-auto p-4 sm:p-8 md:p-12 lg:p-16">
        
        {/* Header Section */}
        <header className="mb-12 md:mb-20 text-center lg:text-left">
          <motion.h1 
            initial={{ opacity: 0, letterSpacing: "-0.1em" }}
            animate={{ opacity: 1, letterSpacing: "-0.04em" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-display font-medium tracking-tighter leading-none mb-4 lowercase text-cph-text overflow-hidden"
            style={{ marginLeft: "-0.04em" }}
          >
            Copenhague
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 border-b border-cph-text/10 pb-8"
          >
            <p className="text-sm md:text-base tracking-[0.2em] font-medium text-cph-slate uppercase">
              Arquitecta <span className="mx-2 font-light">|</span> Minimalista <span className="mx-2 font-light">|</span> Fashionista <span className="mx-2 font-light">|</span> Intencional
            </p>
          </motion.div>
        </header>

        {/* Main Content Layout */}
        <main className="flex flex-col gap-24 lg:gap-32">
          
          {/* Section 1: Video Placeholder */}
          <section className="w-full">
            <FadeIn>
              <div 
                className="w-full aspect-video lg:aspect-[21/9] bg-cph-slate/5 overflow-hidden relative flex items-center justify-center cursor-pointer group"
                onClick={() => videoInputRef.current?.click()}
                title="Cambiar video"
              >
                <input 
                  type="file" 
                  accept="video/*" 
                  ref={videoInputRef} 
                  onChange={handleVideoChange} 
                  className="hidden" 
                />
                {videoUrl ? (
                  <video 
                    src={videoUrl} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <svg className="w-16 h-16 text-cph-slate/30 group-hover:text-cph-espresso transition-colors duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                    <div className="absolute inset-x-0 bottom-8 md:bottom-12 text-center pointer-events-none">
                      <p className="text-cph-slate text-xs md:text-sm tracking-[0.2em] font-medium uppercase opacity-70 group-hover:opacity-100 transition-opacity">Insertar Video Aquí</p>
                    </div>
                  </>
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm tracking-widest uppercase font-medium pointer-events-none">
                  Cambiar Video
                </div>
              </div>
            </FadeIn>
          </section>

          {/* Section 2: Mountain Dwelling */}
          <section className="flex flex-col gap-12 lg:gap-16 items-center">
            <FadeIn>
              <h2 className="text-sm tracking-[0.15em] font-medium uppercase text-center text-cph-espresso">Mountain Dwelling: La vida en la selva</h2>
            </FadeIn>
            
            <div className="flex flex-col xl:flex-row w-full max-w-[1400px] shadow-sm border border-black/5 items-stretch">
              {/* Left Column: House + horizontal texture */}
              <div className="w-full lg:w-4/5 xl:w-5/6 flex flex-col">
                <FadeIn className="w-full flex flex-col">
                  <div 
                    className="w-full overflow-hidden relative group cursor-pointer"
                    onClick={() => houseInputRef.current?.click()}
                    title="Cambiar imagen de la casa"
                  >
                    <input 
                      type="file" 
                      accept="image/*" 
                      ref={houseInputRef} 
                      onChange={handleHouseChange} 
                      className="hidden" 
                    />
                    <img 
                      src={houseImage} 
                      alt="Modern minimalist architecture integrated with nature"
                      className="w-full h-auto object-contain xl:object-cover group-hover:scale-105 transition-transform duration-1000 block"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm tracking-widest uppercase font-medium">
                      Cambiar Imagen
                    </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.2} className="w-full aspect-[2/1] md:aspect-[3/1] xl:aspect-[4/1] flex border-t border-black/5">
                  <div 
                    className="w-full h-full relative group cursor-pointer overflow-hidden flex-1"
                    onClick={() => textureInputRef.current?.click()}
                    title="Cambiar textura interior"
                  >
                    <input type="file" accept="image/*" ref={textureInputRef} onChange={handleTextureChange} className="hidden" />
                    <img src={textureImage} alt="Interior texture" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"/>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs tracking-widest uppercase font-medium text-center px-4">
                      Cambiar
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Right Column: 4 vertical textures */}
              <div className="w-full lg:w-1/5 xl:w-1/6 flex flex-col border-t lg:border-t-0 lg:border-l border-black/5">
                <FadeIn delay={0.3} className="flex flex-col flex-1 h-full min-h-[300px]">
                  <div 
                    className="bg-[#D1C9B9] w-full h-1/4 flex-1 flex items-center justify-center relative group cursor-pointer overflow-hidden"
                    onClick={() => sandInputRef.current?.click()}
                    title="Cambiar imagen beige"
                  >
                    <input type="file" accept="image/*" ref={sandInputRef} onChange={handleSandChange} className="hidden" />
                    {sandImage && <img src={sandImage} className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-1000" />}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] tracking-widest uppercase font-medium text-center px-2">Cambiar</div>
                  </div> {/* Sand */}
                  <div 
                    className="bg-[#616664] w-full h-1/4 flex-1 flex items-center justify-center text-xs tracking-widest relative group cursor-pointer overflow-hidden"
                    onClick={() => slateInputRef.current?.click()}
                    title="Cambiar imagen de pizarra"
                  >
                    <input type="file" accept="image/*" ref={slateInputRef} onChange={handleSlateChange} className="hidden" />
                    <img src={slateImage} className="w-full h-full object-cover mix-blend-multiply opacity-50 group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] tracking-widest uppercase font-medium text-center px-2">Cambiar</div>
                  </div> {/* Slate Concrete */}
                  <div 
                    className="bg-[#4A4F39] w-full h-1/4 flex-1 relative group cursor-pointer overflow-hidden"
                    onClick={() => fernsInputRef.current?.click()}
                    title="Cambiar imagen de helechos"
                  >
                    <input type="file" accept="image/*" ref={fernsInputRef} onChange={handleFernsChange} className="hidden" />
                    <img src={fernsImage} className="w-full h-full object-cover mix-blend-multiply opacity-70 group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] tracking-widest uppercase font-medium text-center px-2">Cambiar</div>
                  </div> {/* Ferns/Nature */}
                  <div 
                    className="bg-[#362C24] w-full h-1/4 flex-1 relative group cursor-pointer overflow-hidden"
                    onClick={() => woodInputRef.current?.click()}
                    title="Cambiar imagen de madera"
                  >
                    <input type="file" accept="image/*" ref={woodInputRef} onChange={handleWoodChange} className="hidden" />
                    <img src={woodImage} className="w-full h-full object-cover mix-blend-multiply opacity-70 group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] tracking-widest uppercase font-medium text-center px-2">Cambiar</div>
                  </div> {/* Wood */}
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Section 3: Fashion, Lifestyle & Colors */}
          <section className="flex flex-col gap-24 pt-16 border-t border-cph-text/10">
            
            {/* Top: 5 Pieces & Fashion Model */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              
              {/* 5 Piezas Claves */}
              <FadeIn delay={0.3} className="w-full order-2 lg:order-1">
                <h3 className="text-xl md:text-2xl tracking-[0.2em] font-medium uppercase mb-12 text-center lg:text-left text-cph-espresso">5 Piezas Claves</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 justify-items-center lg:justify-items-start">
                  {[
                    { name: "Coat", img: piece1Image, ref: piece1InputRef, handler: handlePiece1Change },
                    { name: "Knit", img: piece2Image, ref: piece2InputRef, handler: handlePiece2Change },
                    { name: "Trousers", img: piece3Image, ref: piece3InputRef, handler: handlePiece3Change },
                    { name: "Bag", img: piece4Image, ref: piece4InputRef, handler: handlePiece4Change },
                    { name: "Shoes", img: piece5Image, ref: piece5InputRef, handler: handlePiece5Change }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="w-32 h-32 sm:w-40 sm:h-40 lg:w-36 lg:h-36 xl:w-44 xl:h-44 rounded bg-white shadow-md overflow-hidden flex items-center justify-center p-3 relative group cursor-pointer"
                      onClick={() => item.ref.current?.click()}
                      title={`Cambiar imagen de ${item.name}`}
                    >
                      <input type="file" accept="image/*" ref={item.ref} onChange={item.handler} className="hidden" />
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover mix-blend-multiply hover:opacity-100 opacity-90 transition-opacity"/>
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-cph-espresso text-[10px] tracking-widest uppercase font-medium">Cambiar</div>
                    </motion.div>
                  ))}
                </div>
              </FadeIn>

              {/* Model */}
              <FadeIn delay={0.4} className="w-full flex justify-center order-1 lg:order-2">
                <div 
                  className="relative w-full max-w-md aspect-[3/4] lg:max-w-none lg:w-full lg:h-[80vh] overflow-hidden group mix-blend-multiply cursor-pointer"
                  onClick={() => modelInputRef.current?.click()}
                  title="Cambiar modelo"
                >
                  <input type="file" accept="image/*" ref={modelInputRef} onChange={handleModelChange} className="hidden" />
                  <img 
                    src={modelImage} 
                    alt="Modelo con chaqueta de cuero oliva y pantalones grises"
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-1000"
                  />
                  <div className="absolute inset-x-0 bottom-8 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <span className="bg-white/90 text-cph-espresso text-xs tracking-widest uppercase font-medium px-4 py-2 rounded">Cambiar Modelo</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Paleta de Colores */}
            <FadeIn delay={0.5} className="w-full flex flex-col items-center pt-8">
              <h3 className="text-sm tracking-[0.15em] font-medium uppercase mb-8 text-center text-cph-espresso">Paleta de Colores</h3>
              <div className="flex gap-4 sm:gap-8">
                <ColorBox color="bg-[#D5CCBE]" />
                <ColorBox color="bg-[#5F6462]" />
                <ColorBox color="bg-[#4C513E]" />
                <ColorBox color="bg-[#382C24]" />
              </div>
            </FadeIn>

            {/* Bottom: Un dia en Copenhague, Values */}
            <div className="flex flex-col items-center gap-16 lg:gap-24 w-full max-w-5xl mx-auto pt-8 border-t border-cph-text/10 pb-20">
              
              {/* Schedule */}
              <FadeIn delay={0.4} className="w-full">
                <h3 className="text-xl tracking-[0.2em] font-medium uppercase mb-12 text-center text-cph-espresso">Un dia en Copenhague</h3>
                <div className="flex flex-col gap-8 text-base lg:text-lg font-light tracking-wide max-w-lg mx-auto">
                  <ScheduleRow time="07:30" event="COFFEE & QUIET" />
                  <ScheduleRow time="09:00" event="AT THE STUDIO" />
                  <ScheduleRow time="13:00" event="LUNCH IN THE CITY" />
                  <ScheduleRow time="16:00" event="MEETINGS" />
                  <ScheduleRow time="18:30" event="RIDE HOME" />
                  <ScheduleRow time="20:00" event="UNWIND" />
                </div>
              </FadeIn>

              {/* Values Block / Calm */}
              <FadeIn delay={0.5} className="w-full bg-[#D5CCBE]/40 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 group">
                <div className="flex flex-col gap-6 text-base md:text-xl tracking-[0.2em] uppercase font-medium text-cph-slate text-center md:text-left">
                  <span>Calm</span>
                  <span>Structure</span>
                  <span>Timeless</span>
                  <span>Functionality</span>
                  <span>Quiet Luxury</span>
                </div>
                <div 
                  className="w-full md:w-80 aspect-[3/4] overflow-hidden mix-blend-multiply shadow-sm relative group cursor-pointer"
                  onClick={() => calmInputRef.current?.click()}
                  title="Cambiar imagen"
                >
                  <input type="file" accept="image/*" ref={calmInputRef} onChange={handleCalmChange} className="hidden" />
                  <img src={calmImage} alt="Bicycle by a green door" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs tracking-widest uppercase font-medium">Cambiar</div>
                </div>
              </FadeIn>

            </div>

          </section>
        </main>
      </div>
    </div>
  );
}

function ScheduleRow({ time, event }: { time: string, event: string }) {
  return (
    <div className="flex items-center gap-8 md:gap-12 group cursor-default">
      <span className="w-16 md:w-20 text-cph-slate font-medium text-right">{time}</span>
      <span className="text-cph-text group-hover:text-cph-espresso transition-colors duration-300 font-medium tracking-widest">{event}</span>
    </div>
  );
}

function ColorBox({ color }: { color: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, y: -2 }}
      className={`w-16 h-16 sm:w-20 sm:h-20 ${color} shadow-sm border border-black/5 rounded`}
    />
  );
}
