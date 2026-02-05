// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import confetti from "canvas-confetti";

// // --- Ultra-Premium & Large Background Elements ---
// const BackgroundArt = () => {
//   const elements = ["🧸", "💖", "🍫", "🍭", "🍬", "🌹", "✨", "💝", "🍩"];
  
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#1a050d]">
//       {/* Premium Multi-Color Gradient Layer */}
//       <motion.div 
//         animate={{
//           background: [
//             "radial-gradient(circle at 20% 30%, #4a0e2a 0%, #1a050d 100%)",
//             "radial-gradient(circle at 80% 70%, #3b0a3d 0%, #1a050d 100%)",
//             "radial-gradient(circle at 50% 50%, #5c1126 0%, #1a050d 100%)",
//           ]
//         }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute inset-0 opacity-80"
//       />

//       {/* Large Floating Elements (High Visibility) */}
//       <div className="absolute inset-0">
//         {[...Array(18)].map((_, i) => (
//           <motion.div
//             key={i}
//             initial={{ 
//               y: "110vh", 
//               x: `${Math.random() * 100}vw`, 
//               scale: Math.random() * 0.5 + 1,
//               opacity: 0,
//               rotate: 0
//             }}
//             animate={{ 
//               y: "-20vh", 
//               x: [`${Math.random() * 100}vw`, `${Math.random() * 100}vw`],
//               rotate: [0, 45, -45, 0],
//               opacity: [0, 0.6, 0.6, 0]
//             }}
//             transition={{ 
//               duration: 12 + Math.random() * 10, 
//               repeat: Infinity, 
//               ease: "linear",
//               delay: i * 1.2 
//             }}
//             className="absolute text-4xl sm:text-5xl md:text-7xl lg:text-8xl pointer-events-none select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
//             style={{ filter: "blur(0.5px)" }}
//           >
//             {elements[i % elements.length]}
//           </motion.div>
//         ))}
//       </div>

//       {/* Floating Light Orbs */}
//       <div className="absolute top-0 left-0 w-full h-full">
//         <motion.div animate={{ scale: [1, 1.4, 1], x: [0, 50, 0] }} transition={{ duration: 10, repeat: Infinity }} 
//           className="absolute top-[10%] left-[10%] w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-rose-500/10 blur-[100px] sm:blur-[120px] md:blur-[150px] rounded-full" />
//         <motion.div animate={{ scale: [1.4, 1, 1.4], x: [0, -50, 0] }} transition={{ duration: 12, repeat: Infinity }} 
//           className="absolute bottom-[10%] right-[10%] w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-fuchsia-600/10 blur-[100px] sm:blur-[120px] md:blur-[150px] rounded-full" />
//       </div>
//     </div>
//   );
// };

// export default function ValentineQuest() {
//   const [step, setStep] = useState("start");
//   const [path, setPath] = useState("");
//   const [noPos, setNoPos] = useState({ x: 0, y: 0 });
//   const [noAttempts, setNoAttempts] = useState(0);

//   const triggerConfetti = () => {
//     confetti({ 
//       particleCount: 250, 
//       spread: 100, 
//       origin: { y: 0.55 }, 
//       colors: ["#ff0055", "#ffffff", "#ffcc00", "#ff85a1"] 
//     });
//   };

//   const moveNo = () => {
//     setNoAttempts((prev) => prev + 1);
//     if (noAttempts > 5) {
//       setStep("prank");
//     } else {
//       const maxX = window.innerWidth < 640 ? 80 : 160;
//       const maxY = window.innerWidth < 640 ? 60 : 110;
//       setNoPos({ x: Math.random() * maxX * 2 - maxX, y: Math.random() * maxY * 2 - maxY });
//     }
//   };

// const content = {
//     smile: {
//       // Option 1: Focus on Peace & Comfort (Ghar Feeling)
//       q2: "Jab hum saath hote hain, toh tumhare dil mein sabse pehle kya aata hai? ❤️",
//       opts: ["Ghar jaisa sukoon 🏠", "Ek Pyari si Raunak ✨", "Waqt tham jane ka ehsas ⏳"],
//       line: "Duniya mein har koi bhag raha hai, par tumhare sath reh kar lagta hai jaise main ruk sakta hoon. Tum meri wo jagah ho jahan mujhe kuch banne ki zaroorat nahi padti, main bas 'main' reh sakta hoon. You are my safe place."
//     },
//     nature: {
//       // Option 2: Focus on Destiny (Soul Connection)
//       q2: "Tumhe kabhi lagta hai ki hamara milna sirf ek ittefaq tha ya kuch aur? ✨",
//       opts: ["Likha hua naseeb ✍️", "Ek pyara ittefaq 🌸", "Pichle janam ka vaada 🤝"],
//       line: "Pata nahi naseeb kya hai, par agar tumse milna ittefaq bhi tha, toh wo meri zindagi ka sabse khoobsurat ittefaq hai. Tumse baat karke hamesha aisa lagta hai jaise hum sadiyon se ek doosre ko jaante hon."
//     },
//     vibe: {
//       // Option 3: Focus on Deep Understanding (Safe Space)
//       q2: "Mere sath bitaya hua wo konsa lamha hai jo tumhe sabse zyada yaad rehta hai? 🥺",
//       opts: ["Hamari lambi baatein 📞", "Wo pagalpan wali hasi 😂", "Jab hum khamosh hote hain 🤫"],
//       line: "Zindagi mein bohot log milenge, par koi aisa milna jo tumhari khamoshi bhi padh le, bohot mushkil hai. Mere liye wo 'koi' sirf tum ho. Meri har kahani tumse shuru hokar tum par hi khatam hoti hai."
//     }
//   };

//   return (
//     <div className="relative min-h-screen w-full flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-hidden select-none font-sans">
//       <BackgroundArt />

//       <AnimatePresence mode="wait">
//         {step === "start" && (
//           <motion.div key="start" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }}
//             className="z-10 bg-white/10 backdrop-blur-3xl border border-white/30 p-6 sm:p-7 md:p-8 rounded-3xl sm:rounded-[2.5rem] md:rounded-[3rem] text-center max-w-[95vw] sm:max-w-sm md:max-w-md w-full shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
//           >
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-5 sm:mb-6 tracking-tight drop-shadow-md">Choose Your Vibe! ✨</h1>
//             <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4">
//               <button onClick={() => { setPath("smile"); setStep("quiz2"); }} className="py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-rose-500/40 to-pink-500/40 border border-white/20 text-white rounded-2xl sm:rounded-2xl md:rounded-3xl hover:scale-105 active:scale-95 transition-all text-base sm:text-lg font-bold shadow-lg shadow-black/20">Sukoon Waali Feeling ❤️</button>
//               <button onClick={() => { setPath("nature"); setStep("quiz2"); }} className="py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-purple-500/40 to-indigo-500/40 border border-white/20 text-white rounded-2xl sm:rounded-2xl md:rounded-3xl hover:scale-105 active:scale-95 transition-all text-base sm:text-lg font-bold shadow-lg shadow-black/20">Naseeb aur Hum ✨</button>
//               <button onClick={() => { setPath("vibe"); setStep("quiz2"); }} className="py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 border border-white/20 text-white rounded-2xl sm:rounded-2xl md:rounded-3xl hover:scale-105 active:scale-95 transition-all text-base sm:text-lg font-bold shadow-lg shadow-black/20">Hamari Deep Baatein 🥺</button>
//             </div>
//           </motion.div>
//         )}

//         {step === "quiz2" && (
//           <motion.div key="q2" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }}
//             className="z-10 bg-white/10 backdrop-blur-3xl border border-white/20 p-6 sm:p-7 md:p-8 rounded-3xl sm:rounded-[2.5rem] md:rounded-[3rem] text-center max-w-[95vw] sm:max-w-sm md:max-w-md w-full"
//           >
//             <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-5 sm:mb-6 md:mb-7 italic leading-snug">{content[path].q2}</h2>
//             <div className="flex flex-col gap-3">
//               {content[path].opts.map((opt) => (
//                 <button key={opt} onClick={() => setStep("ask")}
//                   className="py-3 sm:py-3.5 md:py-4 px-4 sm:px-5 md:px-6 bg-white/5 border border-white/10 rounded-xl sm:rounded-xl md:rounded-2xl text-white hover:bg-white/20 transition-all font-semibold text-sm sm:text-base"
//                 >
//                   {opt}
//                 </button>
//               ))}
//             </div>
//           </motion.div>
//         )}

//         {step === "ask" && (
//           <motion.div key="ask" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
//             className="z-10 bg-gradient-to-br from-white/20 to-rose-500/5 backdrop-blur-3xl border-2 border-white/40 p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-[3rem] md:rounded-[3.5rem] text-center max-w-[95vw] sm:max-w-md md:max-w-lg w-full shadow-[0_0_100px_rgba(225,29,72,0.3)]"
//           >
//             <motion.div animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 3 }} className="text-5xl sm:text-6xl md:text-7xl mb-5 sm:mb-6 md:mb-7">🌹</motion.div>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 sm:mb-6 md:mb-7 italic tracking-tighter">Be My Valentine?</h1>
//             <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-6 md:gap-8 mt-5 sm:mt-6 md:mt-7">
//               <button onClick={() => { setStep("success"); triggerConfetti(); }}
//                 className="px-10 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 bg-rose-600 text-white rounded-3xl sm:rounded-[2rem] text-2xl sm:text-3xl font-black shadow-[0_0_50px_rgba(225,29,72,0.6)] hover:scale-110 active:scale-90 transition-all"
//               >
//                 YES! 💍
//               </button>
//               <motion.button 
//                 onMouseEnter={moveNo} onClick={moveNo}
//                 animate={{ x: noPos.x, y: noPos.y }}
//                 className="px-7 sm:px-9 md:px-11 py-3 sm:py-4 bg-black/40 text-white rounded-full font-bold text-lg sm:text-xl border border-white/20 backdrop-blur-md"
//               >
//                 No ❌
//               </motion.button>
//             </div>
//           </motion.div>
//         )}

//         {step === "prank" && (
//           <motion.div key="prank" initial={{ scale: 0 }} animate={{ scale: 1 }}
//             className="z-20 bg-white/15 backdrop-blur-3xl p-7 sm:p-8 md:p-10 rounded-3xl sm:rounded-[2.5rem] md:rounded-[3rem] text-center border-4 border-rose-500 shadow-3xl max-w-[95vw] sm:max-w-sm md:max-w-md w-full"
//           >
//             <span className="text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-5 block animate-bounce">😜</span>
//             <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 sm:mb-5 uppercase">Bohot hoshiyar ho rhe ho😁</h2>
//             <p className="text-rose-100 text-lg sm:text-xl mb-7 sm:mb-8 md:mb-9 font-medium">Bohot koshish kar li No dabane ki...</p>
//             <button onClick={() => { setStep("ask"); setNoAttempts(0); setNoPos({x:0, y:0}); }}
//               className="w-full py-3.5 sm:py-4 bg-white text-rose-900 font-black rounded-full hover:scale-105 transition-all text-base sm:text-lg uppercase tracking-widest shadow-xl"
//             >
//               ← Chalo Ab YES Karo
//             </button>
//           </motion.div>
//         )}

//         {step === "success" && (
//           <motion.div key="success" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
//             className="z-10 bg-white/20 backdrop-blur-3xl border border-white/50 p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-[3rem] md:rounded-[3.5rem] text-center max-w-[95vw] sm:max-w-md md:max-w-lg w-full shadow-2xl relative"
//           >
//             <motion.div initial={{ scale: 0, rotate: 20 }} animate={{ scale: 1, rotate: -15 }} transition={{ type: "spring", delay: 0.5 }}
//               className="absolute -top-8 sm:-top-10 md:-top-12 -right-4 sm:-right-6 md:-right-8 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-rose-600 rounded-full flex items-center justify-center border-4 sm:border-5 md:border-6 border-white shadow-[0_10px_30px_rgba(0,0,0,0.4)] z-20"
//             >
//               <p className="text-white font-black text-[0.5rem] sm:text-xs md:text-sm uppercase text-center leading-tight px-1 sm:px-2">Officially<br/>My<br/>Valentine ❤️</p>
//             </motion.div>
//             <span className="text-5xl sm:text-6xl md:text-7xl block mb-5 sm:mb-6 drop-shadow-lg">🥳</span>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 sm:mb-6 italic tracking-tighter">Love Mission: Won!</h2>
//             <p className="text-sm sm:text-base md:text-lg text-rose-50 text-center mb-6 sm:mb-7 md:mb-8 font-serif italic px-3 sm:px-4 leading-relaxed bg-black/10 py-3 sm:py-4 md:py-5 rounded-2xl sm:rounded-2xl md:rounded-3xl border border-white/10">
//               "{content[path].line}"
//             </p>
//             <p className="text-white/60 font-mono tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-xs sm:text-sm md:text-base uppercase mb-6 sm:mb-7 md:mb-8">Save The Date • 14.02.2026</p>
//             <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center flex-wrap">
//                 {["🧸", "🥂", "💍", "🍫", "🌹"].map((e, i) => (
//                     <motion.div key={i} animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, delay: i * 0.2, duration: 2.5 }} 
//                       className="text-3xl sm:text-4xl md:text-5xl bg-white/10 p-2.5 sm:p-3 md:p-4 rounded-xl sm:rounded-xl md:rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm"
//                     >
//                       {e}
//                     </motion.div>
//                 ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

// --- Beautiful Grow Animation Stages with Icons & Images ---
const STAGES = [
  { 
    id: 0, 
    icon: "🌱",
    label: "Ek Nanha Sa Sapna...",
    desc: "Jaise beej zameen mein chhupa ho"
  },
  { 
    id: 1, 
    icon: "🌿",
    label: "Dheere Dheere Badhta Jaaye...",
    desc: "Kuch pyaara sa ugne laga hai"
  },
  { 
    id: 2, 
    icon: "🥀",
    label: "Kaliyon Ka Intezaar...",
    desc: "Ab khilne mein zyada waqt nahi"
  },
  { 
    id: 3, 
    icon: "🌹",
    label: "Khil Gaya Mera Pyaar",
    desc: "Tumhare liye, sirf tumhare liye"
  }
];

const BackgroundEffect = () => (
  <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1a0308] via-[#2d0510] to-[#0a0103]">
    {/* Animated Gradient Orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
    
    {/* Floating Rose Petals */}
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ 
          y: -100, 
          x: `${Math.random() * 100}vw`, 
          rotate: Math.random() * 360,
          opacity: 0 
        }}
        animate={{ 
          y: "110vh", 
          x: `${Math.random() * 100}vw`,
          rotate: Math.random() * 720,
          opacity: [0, 0.3, 0]
        }}
        transition={{ 
          duration: 15 + Math.random() * 10, 
          repeat: Infinity, 
          ease: "linear",
          delay: Math.random() * 5
        }}
        className="absolute text-4xl md:text-5xl blur-[1px]"
      >
        🌹
      </motion.div>
    ))}

    {/* Sparkle Effect */}
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={`spark-${i}`}
        animate={{ 
          opacity: [0, 1, 0],
          scale: [0, 1, 0]
        }}
        transition={{ 
          duration: 2 + Math.random() * 2, 
          repeat: Infinity, 
          delay: Math.random() * 5 
        }}
        className="absolute w-1 h-1 bg-rose-200 rounded-full"
        style={{ 
          top: `${Math.random() * 100}%`, 
          left: `${Math.random() * 100}%` 
        }}
      />
    ))}
  </div>
);

const GrowthStage = ({ stage, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className="relative cursor-pointer group"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", duration: 0.8 }}
    >
      {/* Glow Effect */}
      <motion.div 
        className="absolute -inset-8 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-full blur-[60px] group-hover:blur-[80px]"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Icon Container */}
      <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 flex items-center justify-center">
        <motion.div
          className="text-[12rem] md:text-[14rem] lg:text-[16rem] leading-none"
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {STAGES[stage].icon}
        </motion.div>

        {/* Particle Ring */}
        {stage === 3 && (
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-rose-400 rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${i * 45}deg) translateY(-140px)`
                }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.2 
                }}
              />
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default function RoseDay() {
  const [stage, setStage] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleNext = () => {
    if (stage < STAGES.length - 1) {
      setStage(prev => prev + 1);
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#ff0000", "#ff69b4", "#ffd700"]
      });
    } else {
      setIsRevealed(true);
      confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.5 },
        colors: ["#ff0000", "#ffffff", "#ffd700", "#ff69b4"],
        ticks: 300
      });
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden font-sans">
      <BackgroundEffect />

      <AnimatePresence mode="wait">
        {!isRevealed ? (
          <motion.div 
            key="nurture"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="z-10 flex flex-col items-center max-w-lg w-full px-4"
          >
            {/* Header */}
            <div className="mb-8 md:mb-12 text-center">
              <motion.h1 
                className="text-rose-200/50 uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs font-bold mb-3"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Rose Day 2026
              </motion.h1>
              <p className="text-rose-100/70 text-sm md:text-base italic font-light">
                Tap karke dekho kya khilta hai 🌹
              </p>
            </div>

            {/* Growth Stage Display */}
            <GrowthStage stage={stage} onClick={handleNext} />

            {/* Stage Info */}
            <div className="mt-8 md:mt-12 w-full max-w-sm text-center space-y-4">
              <motion.p 
                key={`label-${stage}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-rose-50 font-semibold text-lg md:text-xl tracking-wide"
              >
                {STAGES[stage].label}
              </motion.p>
              <motion.p
                key={`desc-${stage}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-rose-200/60 text-xs md:text-sm italic"
              >
                {STAGES[stage].desc}
              </motion.p>

              {/* Progress Bar */}
              <div className="relative pt-2">
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden backdrop-blur-sm">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-rose-600 via-rose-500 to-pink-400 rounded-full shadow-lg shadow-rose-500/50"
                    initial={{ width: 0 }}
                    animate={{ width: `${((stage + 1) / STAGES.length) * 100}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
                <p className="text-rose-300/40 text-[10px] mt-2 font-medium">
                  {stage + 1} / {STAGES.length}
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="message"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="z-10 bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-6 md:p-12 lg:p-16 rounded-3xl md:rounded-[4rem] text-center max-w-2xl w-full mx-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          >
            {/* Final Rose */}
            <div className="relative inline-block mb-8 md:mb-12">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-rose-500 to-pink-600 blur-[50px] opacity-40"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="text-[8rem] md:text-[10rem] relative z-10"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🌹
              </motion.div>
            </div>

            {/* Message */}
            <motion.h2 
              className="text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-200 to-rose-300 mb-4 md:mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Happy Rose Day! 🌹
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4 md:space-y-6 mb-8 md:mb-12"
            >
              <p className="text-rose-100/90 text-base md:text-lg lg:text-xl font-serif italic leading-relaxed px-2 md:px-4">
                "Jaise gulaab ki khushboo hawa mein ghul jaati hai, waise hi tum meri zindagi mein ghul gayi ho."
              </p>
              
              <p className="text-rose-200/80 text-sm md:text-base lg:text-lg leading-relaxed px-2 md:px-4">
                Ye rose sirf ek phool nahi hai — ye meri har woh baat hai jo main kabhi keh nahi paaya. 
                Tumhari muskaan se zyada khoobsurat kuch nahi, tumhari baaton se zyada meetha kuch nahi.
              </p>

              <p className="text-rose-300/70 text-xs md:text-sm italic px-2 md:px-4">
                Tum meri duniya ki sabse haseen mehak ho. ❤️
              </p>
            </motion.div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(244, 63, 94, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-pink-500 text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-xs md:text-sm tracking-widest uppercase shadow-lg shadow-rose-900/50 transition-all border border-rose-400/30"
            >
              Forever Yours 💕
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}