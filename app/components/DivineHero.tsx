'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function DivineHero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-sacred-orange/20 via-transparent to-transparent"></div>

      {/* Animated rings */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[800px] h-[800px] rounded-full border border-divine-gold/30"></div>
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[600px] h-[600px] rounded-full border border-temple-red/30"></div>
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Divine Symbol */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12 relative inline-block"
        >
          <div className="torch-glow">
            <div className="relative w-48 h-48 mx-auto">
              {/* Outer glow ring */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-divine-gold/40 to-temple-red/40 blur-xl"
              ></motion.div>

              {/* Main divine symbol */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-divine-gold via-sacred-orange to-temple-red flex items-center justify-center glow-gold">
                <Sparkles className="w-24 h-24 text-black animate-glow" />
              </div>

              {/* Rotating ornamental elements */}
              {[0, 60, 120, 180, 240, 300].map((rotation, index) => (
                <motion.div
                  key={index}
                  animate={{
                    rotate: [rotation, rotation + 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-divine-gold rounded-full glow-gold"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Temple Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black divine-text text-gradient-gold mb-6 leading-tight">
            Vadakkumpuram
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold divine-text text-white mb-4">
            Vishnumaya Kuttichathan Temple
          </h2>
        </motion.div>

        {/* Sacred Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-64 h-1 bg-gradient-to-r from-transparent via-divine-gold to-transparent mx-auto mb-8"
        ></motion.div>

        {/* Blessing Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-3xl sacred-text text-gray-300 mb-4 max-w-3xl mx-auto"
        >
          Divine Protection • Powerful Miracles • Sacred Blessings
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl sacred-text text-divine-gold mb-12 italic"
        >
          &ldquo;Where faith meets divine power&rdquo;
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="#about"
            className="group relative px-8 py-4 bg-gradient-to-r from-divine-gold to-sacred-orange text-black font-bold divine-text rounded-full text-lg hover:scale-105 transition-all duration-300 glow-gold"
          >
            Explore Temple
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute -inset-1 bg-gradient-to-r from-divine-gold to-sacred-orange rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"
            ></motion.div>
          </a>

          <a
            href="#pooja"
            className="px-8 py-4 border-2 border-divine-gold text-divine-gold font-bold divine-text rounded-full text-lg hover:bg-divine-gold hover:text-black transition-all duration-300"
          >
            Book Pooja
          </a>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                y: [-20, -80, -20],
                x: [0, Math.sin(i) * 30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              className="absolute"
              style={{
                left: `${10 + i * 12}%`,
                top: `${60 + Math.sin(i) * 10}%`,
              }}
            >
              <Sparkles className="w-4 h-4 text-divine-gold" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-divine-gold rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-divine-gold rounded-full"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
