import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

// --- Ultra-Premium & Large Background Elements ---
const BackgroundArt = () => {
  const elements = ["🧸", "💖", "🍫", "🍭", "🍬", "🌹", "✨", "💝", "🍩"];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#1a050d]">
      {/* Premium Multi-Color Gradient Layer */}
      <motion.div 
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, #4a0e2a 0%, #1a050d 100%)",
            "radial-gradient(circle at 80% 70%, #3b0a3d 0%, #1a050d 100%)",
            "radial-gradient(circle at 50% 50%, #5c1126 0%, #1a050d 100%)",
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 opacity-80"
      />

      {/* Large Floating Elements (High Visibility) */}
      <div className="absolute inset-0">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              y: "110vh", 
              x: `${Math.random() * 100}vw`, 
              scale: Math.random() * 0.5 + 1,
              opacity: 0,
              rotate: 0
            }}
            animate={{ 
              y: "-20vh", 
              x: [`${Math.random() * 100}vw`, `${Math.random() * 100}vw`],
              rotate: [0, 45, -45, 0],
              opacity: [0, 0.6, 0.6, 0]
            }}
            transition={{ 
              duration: 12 + Math.random() * 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 1.2 
            }}
            className="absolute text-4xl sm:text-5xl md:text-7xl lg:text-8xl pointer-events-none select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
            style={{ filter: "blur(0.5px)" }}
          >
            {elements[i % elements.length]}
          </motion.div>
        ))}
      </div>

      {/* Floating Light Orbs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div animate={{ scale: [1, 1.4, 1], x: [0, 50, 0] }} transition={{ duration: 10, repeat: Infinity }} 
          className="absolute top-[10%] left-[10%] w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-rose-500/10 blur-[100px] sm:blur-[120px] md:blur-[150px] rounded-full" />
        <motion.div animate={{ scale: [1.4, 1, 1.4], x: [0, -50, 0] }} transition={{ duration: 12, repeat: Infinity }} 
          className="absolute bottom-[10%] right-[10%] w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-fuchsia-600/10 blur-[100px] sm:blur-[120px] md:blur-[150px] rounded-full" />
      </div>
    </div>
  );
};

export default function ValentineQuest() {
  const [step, setStep] = useState("start");
  const [path, setPath] = useState("");
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noAttempts, setNoAttempts] = useState(0);

  const triggerConfetti = () => {
    confetti({ 
      particleCount: 250, 
      spread: 100, 
      origin: { y: 0.55 }, 
      colors: ["#ff0055", "#ffffff", "#ffcc00", "#ff85a1"] 
    });
  };

  const moveNo = () => {
    setNoAttempts((prev) => prev + 1);
    if (noAttempts > 5) {
      setStep("prank");
    } else {
      const maxX = window.innerWidth < 640 ? 80 : 160;
      const maxY = window.innerWidth < 640 ? 60 : 110;
      setNoPos({ x: Math.random() * maxX * 2 - maxX, y: Math.random() * maxY * 2 - maxY });
    }
  };

const content = {
    smile: {
      q2: "Waise, tumhe apni ye pyari si smile kiski yaad dilati hai? 👀",
      opts: ["Sardiyon ki Dhoop ☀️", "Pehli Baarish 🌧️", "Dher Saara Sukoon... ❤️"],
      line: "Duniya mein 8 billion muskurahatein hain, par pata nahi kyun mujhe sirf tumhari hi 'Sukoon' deti hai. Jab tum hasti ho na, toh lagta hai jaise waqt wahin ruk gaya ho. Bas ye smile kabhi khone mat dena."
    },
    nature: {
      q2: "Sach batana, hamara saath tumhe kaisa feel karata hai? 👫",
      opts: ["Ekdum Behti Nadi jaisa 🌊", "Khula Aasman 🌌", "Ek Khoobsurat Khwab ✨"],
      line: "Log kehte hain perfect jodiyaan asmano mein banti hain, par mujhe lagta hai hamari dosti aur hamara sath humne khud mehnat se kamaya hai. Tumhare bina har jagah bheed hai, aur tumhare sath har jagah ghar jaisa sukoon."
    },
    vibe: {
      q2: "Hamari baatein aur ye 'Vibe' tumhe kaisi lagti hai? ⚡",
      opts: ["Non-stop Pagalpan 🤪", "Deep & Emotional 🥺", "Soul Connection ✨"],
      line: "Connection toh logon ka wifi se bhi ho jata hai, par tumse jo 'Soul connection' hai na, wo shayad pichle janam ka udhaar hai. Tumhe dekh kar lagta hai jaise main khud se mil raha hoon. You are my missing piece."
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-hidden select-none font-sans">
      <BackgroundArt />

      <AnimatePresence mode="wait">
        {step === "start" && (
          <motion.div key="start" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }}
            className="z-10 bg-white/10 backdrop-blur-3xl border border-white/30 p-6 sm:p-7 md:p-8 rounded-3xl sm:rounded-[2.5rem] md:rounded-[3rem] text-center max-w-[95vw] sm:max-w-sm md:max-w-md w-full shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-5 sm:mb-6 tracking-tight drop-shadow-md">Choose Your Vibe! ✨</h1>
            <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4">
              <button onClick={() => { setPath("smile"); setStep("quiz2"); }} className="py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-rose-500/40 to-pink-500/40 border border-white/20 text-white rounded-2xl sm:rounded-2xl md:rounded-3xl hover:scale-105 active:scale-95 transition-all text-base sm:text-lg font-bold shadow-lg shadow-black/20">Tumhari Smile 😊</button>
              <button onClick={() => { setPath("nature"); setStep("quiz2"); }} className="py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-purple-500/40 to-indigo-500/40 border border-white/20 text-white rounded-2xl sm:rounded-2xl md:rounded-3xl hover:scale-105 active:scale-95 transition-all text-base sm:text-lg font-bold shadow-lg shadow-black/20">Hamara Saath 👫</button>
              <button onClick={() => { setPath("vibe"); setStep("quiz2"); }} className="py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 border border-white/20 text-white rounded-2xl sm:rounded-2xl md:rounded-3xl hover:scale-105 active:scale-95 transition-all text-base sm:text-lg font-bold shadow-lg shadow-black/20">Hamara Connection ⚡</button>
            </div>
          </motion.div>
        )}

        {step === "quiz2" && (
          <motion.div key="q2" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }}
            className="z-10 bg-white/10 backdrop-blur-3xl border border-white/20 p-6 sm:p-7 md:p-8 rounded-3xl sm:rounded-[2.5rem] md:rounded-[3rem] text-center max-w-[95vw] sm:max-w-sm md:max-w-md w-full"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-5 sm:mb-6 md:mb-7 italic leading-snug">{content[path].q2}</h2>
            <div className="flex flex-col gap-3">
              {content[path].opts.map((opt) => (
                <button key={opt} onClick={() => setStep("ask")}
                  className="py-3 sm:py-3.5 md:py-4 px-4 sm:px-5 md:px-6 bg-white/5 border border-white/10 rounded-xl sm:rounded-xl md:rounded-2xl text-white hover:bg-white/20 transition-all font-semibold text-sm sm:text-base"
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === "ask" && (
          <motion.div key="ask" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            className="z-10 bg-gradient-to-br from-white/20 to-rose-500/5 backdrop-blur-3xl border-2 border-white/40 p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-[3rem] md:rounded-[3.5rem] text-center max-w-[95vw] sm:max-w-md md:max-w-lg w-full shadow-[0_0_100px_rgba(225,29,72,0.3)]"
          >
            <motion.div animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 3 }} className="text-5xl sm:text-6xl md:text-7xl mb-5 sm:mb-6 md:mb-7">🌹</motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 sm:mb-6 md:mb-7 italic tracking-tighter">Be My Valentine?</h1>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-6 md:gap-8 mt-5 sm:mt-6 md:mt-7">
              <button onClick={() => { setStep("success"); triggerConfetti(); }}
                className="px-10 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 bg-rose-600 text-white rounded-3xl sm:rounded-[2rem] text-2xl sm:text-3xl font-black shadow-[0_0_50px_rgba(225,29,72,0.6)] hover:scale-110 active:scale-90 transition-all"
              >
                YES! 💍
              </button>
              <motion.button 
                onMouseEnter={moveNo} onClick={moveNo}
                animate={{ x: noPos.x, y: noPos.y }}
                className="px-7 sm:px-9 md:px-11 py-3 sm:py-4 bg-black/40 text-white rounded-full font-bold text-lg sm:text-xl border border-white/20 backdrop-blur-md"
              >
                No ❌
              </motion.button>
            </div>
          </motion.div>
        )}

        {step === "prank" && (
          <motion.div key="prank" initial={{ scale: 0 }} animate={{ scale: 1 }}
            className="z-20 bg-white/15 backdrop-blur-3xl p-7 sm:p-8 md:p-10 rounded-3xl sm:rounded-[2.5rem] md:rounded-[3rem] text-center border-4 border-rose-500 shadow-3xl max-w-[95vw] sm:max-w-sm md:max-w-md w-full"
          >
            <span className="text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-5 block animate-bounce">😜</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 sm:mb-5 uppercase">Bohot hoshiyar ho rhe ho😁</h2>
            <p className="text-rose-100 text-lg sm:text-xl mb-7 sm:mb-8 md:mb-9 font-medium">Bohot koshish kar li No dabane ki...</p>
            <button onClick={() => { setStep("ask"); setNoAttempts(0); setNoPos({x:0, y:0}); }}
              className="w-full py-3.5 sm:py-4 bg-white text-rose-900 font-black rounded-full hover:scale-105 transition-all text-base sm:text-lg uppercase tracking-widest shadow-xl"
            >
              ← Chalo Ab YES Karo
            </button>
          </motion.div>
        )}

        {step === "success" && (
          <motion.div key="success" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="z-10 bg-white/20 backdrop-blur-3xl border border-white/50 p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-[3rem] md:rounded-[3.5rem] text-center max-w-[95vw] sm:max-w-md md:max-w-lg w-full shadow-2xl relative"
          >
            <motion.div initial={{ scale: 0, rotate: 20 }} animate={{ scale: 1, rotate: -15 }} transition={{ type: "spring", delay: 0.5 }}
              className="absolute -top-8 sm:-top-10 md:-top-12 -right-4 sm:-right-6 md:-right-8 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-rose-600 rounded-full flex items-center justify-center border-4 sm:border-5 md:border-6 border-white shadow-[0_10px_30px_rgba(0,0,0,0.4)] z-20"
            >
              <p className="text-white font-black text-[0.5rem] sm:text-xs md:text-sm uppercase text-center leading-tight px-1 sm:px-2">Officially<br/>My<br/>Valentine ❤️</p>
            </motion.div>
            <span className="text-5xl sm:text-6xl md:text-7xl block mb-5 sm:mb-6 drop-shadow-lg">🥳</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 sm:mb-6 italic tracking-tighter">Love Mission: Won!</h2>
            <p className="text-sm sm:text-base md:text-lg text-rose-50 text-center mb-6 sm:mb-7 md:mb-8 font-serif italic px-3 sm:px-4 leading-relaxed bg-black/10 py-3 sm:py-4 md:py-5 rounded-2xl sm:rounded-2xl md:rounded-3xl border border-white/10">
              "{content[path].line}"
            </p>
            <p className="text-white/60 font-mono tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-xs sm:text-sm md:text-base uppercase mb-6 sm:mb-7 md:mb-8">Save The Date • 14.02.2026</p>
            <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center flex-wrap">
                {["🧸", "🥂", "💍", "🍫", "🌹"].map((e, i) => (
                    <motion.div key={i} animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, delay: i * 0.2, duration: 2.5 }} 
                      className="text-3xl sm:text-4xl md:text-5xl bg-white/10 p-2.5 sm:p-3 md:p-4 rounded-xl sm:rounded-xl md:rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm"
                    >
                      {e}
                    </motion.div>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
//               scale: Math.random() * 0.5 + 1, // Big Scale
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
//             className="absolute text-7xl md:text-9xl pointer-events-none select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
//             style={{ filter: "blur(0.5px)" }}
//           >
//             {elements[i % elements.length]}
//           </motion.div>
//         ))}
//       </div>

//       {/* Floating Light Orbs */}
//       <div className="absolute top-0 left-0 w-full h-full">
//         <motion.div animate={{ scale: [1, 1.4, 1], x: [0, 50, 0] }} transition={{ duration: 10, repeat: Infinity }} 
//           className="absolute top-[10%] left-[10%] w-96 h-96 bg-rose-500/10 blur-[150px] rounded-full" />
//         <motion.div animate={{ scale: [1.4, 1, 1.4], x: [0, -50, 0] }} transition={{ duration: 12, repeat: Infinity }} 
//           className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-fuchsia-600/10 blur-[150px] rounded-full" />
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
//       setNoPos({ x: Math.random() * 320 - 160, y: Math.random() * 220 - 110 });
//     }
//   };

//   const content = {
//     smile: {
//       q2: "Tumhari smile kiski yaad dilati hai?",
//       opts: ["Sardiyon ki Dhoop ☀️", "Pehli Baarish 🌧️", "Sukoon... ❤️"],
//       line: "Kehte hain muskurahat sabke paas hoti hai, par tumhari jaisi smile poori kaayanat mein kisi ke paas nahi. Bas yahi hamesha barkarar rakhna."
//     },
//     nature: {
//       q2: "Hamara saath kaisa lagta hai?",
//       opts: ["Behti Nadi jaisa 🌊", "Khula Aasman 🌌", "Ek Pyaara Khwab ✨"],
//       line: "Jaise phoolon ke bina bahaar nahi hoti, waise hi tumhare bina meri zindagi mein koi raunak nahi. Tum mera sabse khoobsurat hissa ho."
//     },
//     vibe: {
//       q2: "Hamari baatein kaisi hoti hain?",
//       opts: ["Non-stop Pagalpan 🤪", "Deep & Emotional 🥺", "Soul Connection ✨"],
//       line: "Log milte hain, baatein karte hain... par tumse jo connection hai, wo shabdon mein bayaan karna namumkin hai. Tum meri soul-mate ho."
//     }
//   };

//   return (
//     <div className="relative min-h-screen w-full flex items-center justify-center p-6 overflow-hidden select-none font-sans">
//       <BackgroundArt />

//       <AnimatePresence mode="wait">
//         {step === "start" && (
//           <motion.div key="start" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }}
//             className="z-10 bg-white/10 backdrop-blur-3xl border border-white/30 p-10 md:p-16 rounded-[4rem] text-center max-w-lg w-full shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
//           >
//             <h1 className="text-5xl font-black text-white mb-8 tracking-tight drop-shadow-md">Choose Your Vibe! ✨</h1>
//             <div className="flex flex-col gap-5">
//               <button onClick={() => { setPath("smile"); setStep("quiz2"); }} className="py-5 bg-gradient-to-r from-rose-500/40 to-pink-500/40 border border-white/20 text-white rounded-[2rem] hover:scale-105 active:scale-95 transition-all text-xl font-bold shadow-lg shadow-black/20">Tumhari Smile 😊</button>
//               <button onClick={() => { setPath("nature"); setStep("quiz2"); }} className="py-5 bg-gradient-to-r from-purple-500/40 to-indigo-500/40 border border-white/20 text-white rounded-[2rem] hover:scale-105 active:scale-95 transition-all text-xl font-bold shadow-lg shadow-black/20">Hamara Saath 👫</button>
//               <button onClick={() => { setPath("vibe"); setStep("quiz2"); }} className="py-5 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 border border-white/20 text-white rounded-[2rem] hover:scale-105 active:scale-95 transition-all text-xl font-bold shadow-lg shadow-black/20">Hamara Connection ⚡</button>
//             </div>
//           </motion.div>
//         )}

//         {step === "quiz2" && (
//           <motion.div key="q2" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }}
//             className="z-10 bg-white/10 backdrop-blur-3xl border border-white/20 p-10 md:p-16 rounded-[4rem] text-center max-w-lg w-full"
//           >
//             <h2 className="text-3xl font-bold text-white mb-10 italic leading-snug">{content[path].q2}</h2>
//             <div className="flex flex-col gap-4">
//               {content[path].opts.map((opt) => (
//                 <button key={opt} onClick={() => setStep("ask")}
//                   className="py-5 px-8 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/20 transition-all font-semibold text-lg"
//                 >
//                   {opt}
//                 </button>
//               ))}
//             </div>
//           </motion.div>
//         )}

//         {step === "ask" && (
//           <motion.div key="ask" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
//             className="z-10 bg-gradient-to-br from-white/20 to-rose-500/5 backdrop-blur-3xl border-2 border-white/40 p-12 md:p-20 rounded-[5rem] text-center max-w-3xl w-full shadow-[0_0_100px_rgba(225,29,72,0.3)]"
//           >
//             <motion.div animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 3 }} className="text-9xl mb-10">🌹</motion.div>
//             <h1 className="text-6xl md:text-8xl font-black text-white mb-8 italic tracking-tighter">Be My Valentine?</h1>
//             <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-10">
//               <button onClick={() => { setStep("success"); triggerConfetti(); }}
//                 className="px-20 py-8 bg-rose-600 text-white rounded-[2.5rem] text-4xl font-black shadow-[0_0_50px_rgba(225,29,72,0.6)] hover:scale-110 active:scale-90 transition-all"
//               >
//                 YES! 💍
//               </button>
//               <motion.button 
//                 onMouseEnter={moveNo} onClick={moveNo}
//                 animate={{ x: noPos.x, y: noPos.y }}
//                 className="px-12 py-5 bg-black/40 text-white rounded-full font-bold text-2xl border border-white/20 backdrop-blur-md"
//               >
//                 No ❌
//               </motion.button>
//             </div>
//           </motion.div>
//         )}

//         {step === "prank" && (
//           <motion.div key="prank" initial={{ scale: 0 }} animate={{ scale: 1 }}
//             className="z-20 bg-white/15 backdrop-blur-3xl p-14 rounded-[4rem] text-center border-4 border-rose-500 shadow-3xl max-w-lg w-full"
//           >
//             <span className="text-[10rem] mb-6 block animate-bounce">😜</span>
//             <h2 className="text-5xl font-black text-white mb-6 uppercase">Gotcha!</h2>
//             <p className="text-rose-100 text-2xl mb-12 font-medium">Bohot koshish kar li No dabane ki...</p>
//             <button onClick={() => { setStep("ask"); setNoAttempts(0); setNoPos({x:0, y:0}); }}
//               className="w-full py-5 bg-white text-rose-900 font-black rounded-full hover:scale-105 transition-all text-xl uppercase tracking-widest shadow-xl"
//             >
//               ← Chal Ab YES Kar
//             </button>
//           </motion.div>
//         )}

//         {step === "success" && (
//           <motion.div key="success" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
//             className="z-10 bg-white/20 backdrop-blur-3xl border border-white/50 p-12 md:p-20 rounded-[5.5rem] text-center max-w-3xl w-full shadow-2xl relative"
//           >
//             <motion.div initial={{ scale: 0, rotate: 20 }} animate={{ scale: 1.1, rotate: -15 }} transition={{ type: "spring", delay: 0.5 }}
//               className="absolute -top-16 -right-10 w-52 h-52 bg-rose-600 rounded-full flex items-center justify-center border-8 border-white shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-20"
//             >
//               <p className="text-white font-black text-lg uppercase text-center leading-tight">Officially<br/>My<br/>Valentine ❤️</p>
//             </motion.div>
//             <span className="text-9xl block mb-8 drop-shadow-lg">🥳</span>
//             <h2 className="text-6xl md:text-7xl font-black text-white mb-8 italic tracking-tighter">Love Mission: Won!</h2>
//             <p className="text-2xl md:text-3xl text-rose-50 text-center mb-12 font-serif italic px-6 leading-relaxed bg-black/10 py-6 rounded-3xl border border-white/10">
//               "{content[path].line}"
//             </p>
//             <p className="text-white/60 font-mono tracking-[0.4em] text-xl uppercase mb-12">Save The Date • 14.02.2026</p>
//             <div className="flex gap-6 justify-center flex-wrap">
//                 {["🧸", "🥂", "💍", "🍫", "🌹"].map((e, i) => (
//                     <motion.div key={i} animate={{ y: [0, -25, 0], rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, delay: i * 0.2, duration: 2.5 }} 
//                       className="text-6xl bg-white/10 p-6 rounded-[2rem] shadow-xl border border-white/20 backdrop-blur-sm"
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