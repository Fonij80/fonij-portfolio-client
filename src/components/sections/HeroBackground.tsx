import { motion } from "framer-motion";

export const HeroBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />

      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -30, 25, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-10rem] top-[2rem] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/30 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 25, 0],
          y: [0, 25, -20, 0],
          scale: [1, 0.96, 1.08, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-10rem] top-[3rem] h-[30rem] w-[30rem] rounded-full bg-cyan-400/25 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, 35, -20, 0],
          y: [0, -25, 20, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10rem] left-[8%] h-[24rem] w-[24rem] rounded-full bg-violet-500/25 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -35, 20, 0],
          y: [0, 20, -15, 0],
          scale: [1, 1.03, 0.98, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-8rem] right-[10%] h-[22rem] w-[22rem] rounded-full bg-emerald-400/15 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, 30, -10, 0],
          y: [0, 15, -20, 0],
          scale: [1, 1.06, 0.97, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/3 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[150px]"
      />

      {/* overall soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(10,10,10,0.28)_100%)]" />

      {/* soft fade to black at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-b from-transparent via-neutral-950/70 to-neutral-950" />

      {/* extra bottom smoothing for less obvious section separation */}
      <div className="absolute inset-x-0 bottom-[-8rem] h-[18rem] bg-neutral-950 blur-3xl" />
    </div>
  );
};
