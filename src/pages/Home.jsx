import { motion, AnimatePresence } from "framer-motion";
import { SiYoutube,SiInstagram, SiTiktok, SiGoogle } from '@icons-pack/react-simple-icons';
import { Gamepad2, Search, Zap,Star, Cpu, Users, Smartphone, UserPlus, Globe, GamepadDirectional } from "lucide-react";
import { useState } from "react";
import { gamesData } from "../data/games";


export default function Home() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedFeature, setSelectedFeature] = useState(null);

  const triggerHaptic = (intensity = 10) => {
  if (typeof window !== "undefined" && "vibrate" in navigator) {
    navigator.vibrate(intensity);
  }
};

  const filtered = gamesData.filter(game => {
  const matchesFilter = filter === "All" || game.platforms.includes(filter);
  const matchesSearch = game.title.toLowerCase().includes(search.toLowerCase());
  return matchesFilter && matchesSearch;
});

  return (
    <div className="min-h-screen selection:bg-cyber/40 overflow-x-hidden">
      
      {/* --- RESPONSIVE AGGRESSIVE HERO --- */}
      <section className="relative min-h-[80vh] md:h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden py-20">
        
        {/* Background Vortex */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[280px] md:h-[700px] -z-10 opacity-40">
          <div className="absolute inset-0 bg-cyber rounded-full blur-[80px] md:blur-[160px] animate-vortex" />
          <div className="absolute inset-10 bg-plasma rounded-full blur-[60px] md:blur-[140px] animate-vortex animation-delay-700" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 w-full max-w-5xl"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap className="text-plasma fill-plasma" size={12} />
            <span className="text-[8px] md:text-[10px] font-black tracking-[0.4em] uppercase text-white/70">ARUSHA'S ELITE GAMING HUB</span>
            <Zap className="text-plasma fill-plasma" size={12} />
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-[150px] font-black tracking-tighter italic leading-[0.9] mb-8 uppercase">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyber via-white to-plasma animate-pulse [animation-duration:6s]">
              GAMPERIUM
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-xl font-medium px-4">
            Next-gen PlayStation sanctuary. High-performance hardware, 
            local and online multiplayer, and a legacy vault of <span className="text-white">100+ titles.</span>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center px-6 sm:px-0">
            <button
                onClick={() => {document.getElementById('visitus').scrollIntoView({ behavior: 'smooth' });
                triggerHaptic(20);
                
            }}
            className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-cyber hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 ">
              Visit Us
            </button>
            <button 
              onClick={() => {document.getElementById('vault').scrollIntoView({ behavior: 'smooth' });
                triggerHaptic(20);
                
            }}
              className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-cyber hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 shadow-2xl"
            >
              Explore Vault
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- RESPONSIVE STATS --- */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-24">
        {[
          { label: "Hardware", val: "6 Stations", icon: <Gamepad2 size={18}/> },
          { label: "Library", val: "100+ Games", icon: <Cpu size={18}/> },
          { label: "Mode", val: "Multplayer", icon: <Users size={18}/> },
          { label: "Network", val: "High Speed", icon: <Smartphone size={18}/> },
        ].map((stat, i) => (
          <div key={i} className="bg-onyx/40 border border-white/5 p-5 md:p-8 rounded-[2rem] text-center backdrop-blur-sm
              transition-all duration-300 ease-out
                 hover:bg-white/[0.05] hover:border-cyber/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.2)]
          ">
            <div className="flex justify-center text-cyber mb-3">{stat.icon}</div>
            <p className="text-[9px] uppercase tracking-widest text-gray-500 mb-1">{stat.label}</p>
            <p className="font-bold text-sm md:text-lg text-white">{stat.val}</p>
          </div>
        ))}
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
            Why GAME <span className="text-cyber">Here?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Pro Environment", 
              desc: "Walk in, pick your game start playing and optimized lighting for 0% eye strain.", 
              icon: <Zap/>,
              color: "plasma",
              img: "lounge.webp"
            },
            { 
              title: "Premium Hardware Vibe", 
              desc: "No drifting analogs here. We use genuine DualSense and DualShock controllers to ensure your inputs are as sharp as your skills.", 
              icon: <GamepadDirectional />,
              color: "cyber",
              img: "consoles.webm"
            },
             { 
              title: "Performance Excellence", 
              desc: "Our consoles are deep-cleaned and maintained to prevent overheating and frame drops during your peak sessions.", 
              icon: <Cpu/>,
              color: "volt",
              img: "console.jpg"

            },
            { 
              title: "E-Gaming Culture", 
              desc: "We provide one of the very first e-gaming services in town where you play online with people around the world.", 
              icon: <Globe/>,
              color: "flare",
              img: "egame.jpeg"
            },
            { 
              title: "CO-OP", 
              desc: "Couch Co-op hits just different with some of our amazing titles allowing you to play with up to 4 players in the same PS.", 
              icon: <Users />,
              color: "onyx",
              img: "coop.webp"
            },
            { 
              title: "Play the Latest Titles", 
              desc: "From crimson desert to the newest indie hits, we update our library Reguraly.", 
              icon: <Gamepad2 />,
              color: "cyber", 
              img: "newewst.jpeg"
            }
          ].map((feature, i) => (
      <motion.div
        key={i}
        layoutId={`card-${i}`}
        onClick={() => {setSelectedFeature({ ...feature, id: i });
              triggerHaptic(12);
      }}
        className="group p-8 rounded-[2.5rem] bg-onyx/40 border border-white/5 cursor-pointer hover:border-plasma/50 transition-colors"
      >
        <motion.div layoutId={`icon-${i}`} className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
          {feature.icon}
        </motion.div>
        <motion.h3 layoutId={`title-${i}`} className="text-xl font-bold text-white mb-3 uppercase italic">
          {feature.title}
        </motion.h3>
        <p className="text-gray-500 text-sm">Tap to expand details</p>
      </motion.div>
    ))}
  </div>

  {/* Fullscreen Overlay Morph */}
  <AnimatePresence>
    {selectedFeature && (
      <>
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedFeature(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[100]"
        />

        <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 md:p-8 pointer-events-none">
          <motion.div
            layoutId={`card-${selectedFeature.id}`}
            className="w-full max-w-4xl bg-onyx rounded-[3rem] overflow-hidden relative pointer-events-auto"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              {selectedFeature.img.endsWith('.webm') ? (
                <video
                  key={selectedFeature.img} // Force re-render when the source changes
                  src={selectedFeature.img}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80"
                />
              ) : (
                <img 
                  src={selectedFeature.img} 
                  className="w-full h-full object-cover opacity-80" 
                  alt={selectedFeature.title}
                />
                )}
              {/* The Gradient Overlay stays on top of both */}
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/80 to-transparent" />
            </div>

            <div className="relative p-8 md:p-16 flex flex-col h-full min-h-[500px] justify-end">
              <button 
                onClick={() => setSelectedFeature(null)}
                
                className="absolute top-8 right-8 text-white/50 hover:text-white"
              >
                ✕ Close
              </button>

              <motion.div layoutId={`icon-${selectedFeature.id}`} className="mb-8 scale-150 origin-left">
                {selectedFeature.icon}
              </motion.div>
              
              <motion.h3 layoutId={`title-${selectedFeature.id}`} className="text-4xl md:text-6xl font-black text-white uppercase italic mb-6 leading-none">
                {selectedFeature.title}
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl"
              >
                {selectedFeature.desc}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </>
    )}
  </AnimatePresence>
</section>



      {/* --- THE VAULT (THE GRID) --- */}
      <section id="vault" className="max-w-7xl mx-auto px-4 pb-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="text-left">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-white leading-none">The Vault</h2>
            <div className="flex flex-wrap gap-2 mt-6">
             {["All", "PS5", "PS4", "PS3", "PS2"].map((p) => (
              <motion.button
                key={p}
                // THE MAGNETIC EFFECT (Desktop)
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  
                  color:"white",
                  boxShadow: "0px 0px 20px rgba(34, 211, 238, 0.3)" 
                }}
                // THE "PRESS" EFFECT (Visual Haptic)
                whileTap={{ scale: 0.95 }}
                
                onClick={() => {
                  setFilter(p);
                  triggerHaptic(12); // THE VIBRATION (Mobile)
                }}
                
                className={`px-5 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] transition-all ${
                  filter === p 
                    ? "bg-cyber text-black shadow-lg shadow-cyber/20" 
                    : "bg-white/5 text-gray-500 hover:bg-white/10"
                }`}
              >
                {p}
              </motion.button>
            ))}
            </div>
          </div>

          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-plasma transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search for over 100+ titles..."
              value={search}
              className="w-full py-5 pl-14 pr-6 rounded-[1.5rem] outline-none transition-all text-sm text-white bg-white/5 border border-white/10 focus:border-plasma/50 glass-input"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Dynamic Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 max-h-[75vh] overflow-y-auto pr-6 scroll-smooth custom-scrollbar">        
          <AnimatePresence mode="popLayout">
          {filtered.map((game) => (
            <motion.div
              key={game.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glow-card bg-onyx rounded-[1.5rem] md:rounded-[2.5rem] aspect-[3/4.5] overflow-hidden relative group cursor-pointer"
            >
              <img
                src={game.image}
                alt={game.title}
                loading = "lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-110 group-hover:scale-110 transition-all duration-700"
              />
          
              
              {/* 1. TOP SECTION: Clean and minimalist */}
              <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-start">
                <div className="flex flex-wrap gap-2">
                  {game.platforms.map((plat) => (
                  <span 
                    key={plat} 
                    className="text-[8px] font-black bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full uppercase tracking-widest border border-white/10"
                  >
                    {plat}
                  </span>
                  ))}
                </div>
                <div className={`w-2 h-2 mt-1 rounded-full animate-pulse ${game.status === "Available" ? "bg-green-400 shadow-[0_0_10px_#4ade80]" : "bg-red-500 shadow-[0_0_10px_#ef4444]"}`} />
              </div>

              {/* 2. OVERLAY: Darker gradient to protect text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

              {/* 3. BOTTOM SECTION: Organized info stack */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-20 flex flex-col gap-3">
                
                {/* Genre & Title */}
                <div>
                  <p className="text-[9px] font-bold text-cyber uppercase tracking-[0.2rem] mb-1 opacity-80">
                    {game.genre}
                  </p>
                  <h4 className="font-black text-sm md:text-lg leading-tight uppercase text-white group-hover:text-plasma group-hover:opacity-25 transition-colors line-clamp-2">
                    {game.title}
                  </h4>
                </div>

                {/* Features Row */}
                <div className="flex items-center gap-4 py-2 border-y border-white/5">

                  {/* 1. LOCAL PLAYERS (Couch Co-op) */}
                  <div className="relative group/tooltip flex items-center gap-1.5">
                    <Users size={12} className="text-plasma" />
                    <span className="text-[10px] font-bold text-gray-400">{game.features.players}P</span>
                  
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-plasma text-[8px] font-bold text-white rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30">
                      {game.features.players.includes('-') || parseInt(game.features.players) > 1 ? 'LOCAL CO-OP' : 'SINGLE PLAYER'}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-plasma rotate-45" />
                    </div>
                  </div>

                  {/* 2. ONLINE MULTIPLAYER (The UserPlus Icon) */}
                  {game.features.coop && (
                  <div className="relative group/tooltip">
                    <UserPlus size={12} className="text-cyber opacity-80" />
                    
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-cyber text-[8px] font-bold text-black rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30">
                      ONLINE MULTIPLAYER
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyber rotate-45" />
                    </div>
                  </div>
                  )}

                 
                  {game.features.online && (
                    <div className="relative group/tooltip">
                      <Globe size={12} className="text-plasma opacity-80" />
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-flare text-[8px] font-bold text-white rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30">
                        ONLINE-PLAY ENABLED
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-flare rotate-45" />
                      </div>
                    </div>
                  )}
                 {game.youtubeUrl ? (
                  <a 
                    href={game.youtubeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // Keeps the card click separate
                    className="p-1 bg-red-600 hover:bg-red-500 rounded-full transition-all hover:scale-110 active:scale-90 shadow-lg shadow-red-600/20"
                  >
                  <SiYoutube size={8} className="text-white" fill="currentColor" />
                  </a>
                ) : (
                  <div className="p-2 bg-white/5 rounded-full cursor-not-allowed opacity-30">
                    <SiYoutube size={8} className="text-gray-500" />
                  </div>
                )}  
             </div>

                {/* Station Tags: Now at the very bottom as a "Footer" */}
                <div className="flex flex-wrap gap-1 mt-1">
                  {game.locations.map((loc) => (
                    <span key={loc} className="text-[7px] font-black bg-white/5 text-gray-500 px-1.5 py-0.5 rounded uppercase border border-white/5">
                      {loc}
                    </span>
                  ))}
                </div>
                
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      </section>

      {/* --- VISIT & CONTACT SECTION --- */}
      <section id="visitus" className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/5">
  
      {/* Left Side: The "Base" (Location) */}
      <div className="relative group">
        <div className="absolute -top-6 -left-6 text-[10px] font-black text-cyber/40 tracking-[0.5em] uppercase">
          Coordinates // Arusha_TZ
        </div>
    
      <div className="rounded-[2.5rem] overflow-hidden border border-white/10 h-[400px] relative">
        {/* Replace this with your Google Maps Embed (Styled to Dark) */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15931.473658479106!2d36.686024044773404!3d-3.382311395476623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371bd1384c3b07%3A0xe68b1ea5930f59fe!2sGamperium!5e0!3m2!1sen!2stz!4v1775923537386!5m2!1sen!2stz" 
          style={{ border: 0 }} // In React, style must be an object
          allowFullScreen="" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale invert opacity-50 contrast-125 hover:opacity-80 transition-opacity duration-700"
          loading="lazy"
        />
      
        {/* Overlay "Quest" Info */}
        <div className="absolute bottom-6 left-6 right-6 p-6 bg-onyx/80 backdrop-blur-md border border-white/5 rounded-2xl">
          <h4 className="text-white font-bold italic uppercase tracking-wider mb-1">Gamperium Headquarters</h4>
          <p className="text-gray-400 text-xs">Arusha, Tanzania • Mwanama Kijenge</p>
          <div className="mt-4 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[10px] text-green-500 font-black uppercase">Open Now // Until 8PM</span>
          </div>
        </div>
      </div>
    </div>


        {/* Right Side: The "Link Up" (Contact) */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
            Link <span className="text-plasma">Up.</span>
          </h2>

          <div className="space-y-4">
            {/* ROW 1: EMAIL & SOCIALS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email Terminal */}
              <a href="mailto:gamperium@gmail.com" 
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-plasma/50 transition-all group flex flex-col justify-center">
                <p className="text-[9px] text-gray-500 uppercase font-black mb-1">Email Terminal</p>
                <p className="text-white font-bold truncate group-hover:text-plasma transition-colors">
                  gamperium@gmail.com
                </p>
              </a>

              {/* Social Frequency */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-center">
                <p className="text-[9px] text-gray-500 uppercase font-black mb-3">Social Frequency</p>
                <div className="flex gap-6">
                  <motion.a
                    href="https://www.instagram.com/gamperium?igsh=MjUwM3V2ejZ0dzNz"
                    target="_blank"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="text-gray-400 hover:text-[#E4405F] transition-colors"
                  >
                    <SiInstagram size={22} />
                  </motion.a>

                  <motion.a
                    href="https://www.tiktok.com/@gamperium.gaming?_r=1&_t=ZS-95VBOvfb8bs"
                    target="_blank"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <SiTiktok size={22} />
                  </motion.a>

                  {/* YouTube */}
                  <motion.a
                    href="https://youtube.com/@equinox8395?si=T6LRg_IQEIIX_9A5"
                    target="_blank"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="text-gray-400 hover:text-[#FF0000] transition-colors"
                    >
                    <SiYoutube size={22} />
                  </motion.a>

                    {/* Google Business Profile */}
                    <motion.a
                      href="https://share.google/WgZqTyxYOma8VWp9C"
                      target="_blank"
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="text-gray-400 hover:text-[#4285F4] transition-colors"
                    >
                    <SiGoogle size={20} />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* ROW 2: RATE ME (Full Width) */}
            <motion.a
              href="https://g.page/r/Cf5ZD5OlHovmEAE/review"
              target="_blank"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => triggerHaptic(30)}
              className="relative block p-6 rounded-[2rem] bg-gradient-to-r from-plasma/20 to-transparent border border-plasma/30 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Star size={40} weight="fill" className="text-plasma" />
              </div>

              <div className="relative z-10 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-plasma">New Mission</span>
                  <div className="h-[1px] w-8 bg-plasma/50" />
                </div>
                <h3 className="text-xl font-black italic uppercase text-white tracking-tighter">
                  Rate the <span className="text-plasma">Experience.</span>
                </h3>
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                  Leave a review on Google & unlock legendary status
                </p>
              </div>

              <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-plasma shadow-[0_0_10px_#ff00ff]"
                />
              </div>
            </motion.a>
          </div>
        </div>    
          
    </section>

     {/* FOOTER */}
      <footer className="py-20 border-t border-white/5 text-center flex flex-col items-center gap-6">
      {/* The Brand Stamp */}
      <div className="space-y-2">
        <p className="text-[12px] font-black tracking-[0.5em] text-gray-400 uppercase">
          GAMPERIUM • ARUSHA • EST 2023
        </p>
        <p className="text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase">
          The Ultimate PlayStation Hub in the Heart of the Gamers
        </p>
      </div>

      {/* Subtle "Built by" - Every dev needs a signature */}
      <div className="flex items-center gap-4 opacity-30 hover:opacity-100 transition-opacity duration-500">
        <div className="h-[1px] w-8 bg-gray-800" />
        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
          System Design by <span className="text-white">Gamperium Interactive </span>
        </p>
        <div className="h-[2px] w-8 bg-gray-800" />
      </div>

      {/* Copyright & Legal */}
      <p className="text-[9px] text-gray-700 uppercase tracking-[0.1em] max-w-[300px] leading-relaxed">
        © {new Date().getFullYear()} Gamperium Gaming Lounge. All Rights Reserved. 
        <br />
        PlayStation 3 , 4 & 5 are registered trademarks of Sony Interactive Entertainment Inc.
      </p>
      </footer>
    </div>
  );
}