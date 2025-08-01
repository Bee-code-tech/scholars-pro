'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';

const ScholarsProTeaser: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(180); 
  const [isExpired, setIsExpired] = useState<boolean>(false);

  useEffect(() => {
    // Reset timer on page visit
    setTimeLeft(180); 
    setIsExpired(false);
    
    const timer = setInterval(() => {
      setTimeLeft((prevTime: number) => {
        if (prevTime <= 1) {
          setIsExpired(true);
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number): {  minutes: number; secs: number } => {
  
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { minutes, secs };
  };

  const schools = [
    { name: "UNILAG", fullName: "University of Lagos", image: "/unilag.png" },
    { name: "UI", fullName: "University of Ibadan", image: "/ui.png" },
    { name: "OAU", fullName: "Obafemi Awolowo University", image: "/oau.png" },
    { name: "UNILORIN", fullName: "University of Ilorin", image: "/unilorin.png" },
    { name: "UNIBEN", fullName: "University of Benin", image: "/uniben.png" },
    { name: "UNN", fullName: "University of Nigeria, Nsukka", image: "/unn.png" },
    { name: "OOU", fullName: "Olabisi Onabanjo University", image: "/oou.png" },
    { name: "DELSU", fullName: "Delta State University", image: "/delsu.png" },
    { name: "LAUTECH", fullName: "Ladoke Akintola University of Technology", image: "/lautech.png" },
    { name: "FUOYE", fullName: "Federal University Oye-Ekiti", image: "/fuoye.png" },
    { name: "S.O.N", fullName: "Schools Of Nursing", image: "/nursing.png" },
    { name: "UNIPORT", fullName: "University of Port Harcourt", image: "/uniport.png" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const buttonVariants: Variants = {
    idle: {
      scale: 1,
      boxShadow: "0 4px 20px rgba(147, 0, 255, 0.3)"
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 30px rgba(147, 0, 255, 0.5)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const time = formatTime(timeLeft);

  return (
    <section className="overflow-x-hidden w-full min-h-screen pb-8 h-full bg-gradient-to-br from-purple-900 via-[#47007B] to-[#9300FF] relative ">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#9300FF]/30 to-purple-400/20 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-300/10 to-pink-300/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-10 right-1/4 w-48 h-48 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-xl opacity-50 animate-pulse delay-500"></div>
      </div>

      <motion.div 
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 h-full flex flex-col"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header with Logo */}
        <motion.header variants={itemVariants} className="flex justify-between items-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center space-x-4">
            <div className="w-45 h-16 flex items-center ">
            <img src="/logo.png" alt="Scholars Pro Logo" className='object-cover w-full  block' />
            </div>
            {/* </div> */}
            
          </div>
          
        </motion.header>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-5xl mx-auto text-center px-2">
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 rounded-full px-4 sm:px-6 py-2 sm:py-3">
                <span className="text-yellow-300 font-semibold text-sm sm:text-base">
                  ⭐ 3 DAYS FREE POST-UTME CLASS
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="mb-3 sm:mb-8">
              <h1 className="text-xl sm:text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-1">
                We produced
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 ml-1">
                  368 & 351 scores
                </span>
                <br />
                in the 2025 UTME. And we're set to do more in
                <span className="text-yellow-400 font-bold ml-1">POST-UTME</span>
              </h1>
            
            </motion.div>

          
            {/* Countdown Timer */}
            <motion.div variants={itemVariants} className="mb-4 sm:mb-10">
              <AnimatePresence>
                {!isExpired ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="inline-block"
                  >
                    <div className="text-purple-200 text-sm sm:text-base mb-3 font-medium">Class starts in:</div>
                    <div className="flex justify-center items-center space-x-2 sm:space-x-4">
                      {[
                        { label: 'Minutes', value: time.minutes },
                        { label: 'Seconds', value: time.secs }
                      ].map((item, index) => (
                        <div key={item.label} className="text-center">
                          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                              {item.value.toString().padStart(2, '0')}
                            </div>
                            <div className="text-xs sm:text-sm text-purple-200">
                              {item.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4"
                  >
                    <span className="text-orange-300 font-medium text-sm sm:text-base lg:text-lg">
                      🎓 Registration Open - Secure Your Spot Now!
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* CTA Button */}
            <Link href='https://chat.whatsapp.com/HKkVES7nzpIDhLHhnQADEi' >    
            <motion.div variants={itemVariants} className="mb-6 sm:mb-16">
              <motion.button
                variants={buttonVariants}
                initial="idle"
                whileHover="hover"
                whileTap="tap"
                className="bg-gradient-to-r from-[#9300FF] to-purple-600 text-white font-bold text-sm sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 rounded-full shadow-2xl border-2 border-purple-400/50 relative overflow-hidden group w-full sm:w-auto max-w-sm sm:max-w-none"
                type="button"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-[#9300FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.6 }}
                ></motion.div>
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.892 3.486"/>
                  </svg>
                  <span className="whitespace-nowrap">Join WhatsApp Group Now</span>
                  <motion.div
                    className="ml-1 sm:ml-2 flex-shrink-0"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>
            </Link>
          </div>
        </div>

        {/* Schools Marquee */}
        <motion.div variants={itemVariants} className="mb-8">
          
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex space-x-4"
              animate={{ x: [-2000, 0] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...schools, ...schools].map((school, index) => (
                <div
                  key={`${school.name}-${index}`}
                  className="flex-shrink-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-4 min-w-[150px] text-center hover:bg-white/20 transition-all duration-300 "
                >
                  <div className="w-10 h-8   flex items-center justify-center mx-auto mb-2 rounded-lg">
                    <span className="flex items-center justify-center">
                      <img src={school.image} alt={school.name} className="w-10 h-12 object-cover" />
                    </span>
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">{school.name}</div>
                  <div className="text-purple-200 text-xs leading-tight">{school.fullName}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div variants={itemVariants} className="text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-purple-200">
            <div className="flex items-center">
              <span className="text-yellow-400 mr-2 text-lg">🏆</span>
              <span className="text-sm">Top PUTME Scores Guaranteed</span>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-400 mr-2 text-lg">👥</span>
              <span className="text-sm">1000+ Admissions Secured</span>
            </div>
            {/* <div className="flex items-center">
              <span className="text-yellow-400 mr-2 text-lg">⭐</span>
              <span className="text-sm">100% Success Rate</span>
            </div> */}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ScholarsProTeaser;