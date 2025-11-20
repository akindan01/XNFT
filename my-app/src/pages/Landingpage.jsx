import React, { useState, useEffect } from 'react';
import { 
  Search, Menu, X, TrendingUp, Users, Shield, Zap, 
  Palette, Music, Camera, Layers, UserPlus, Globe, Clock, Heart,
  Twitter, Linkedin, Github
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const useCountdown = (endDate) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0, minutes: 0,
    seconds: 0, isEnded: false,
  });

  useEffect(() => {
    if (!endDate) return;

    const calculateTimeLeft = () => {
      const difference = +new Date(endDate) - +new Date();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0, isEnded: false };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isEnded: false,
        };
      } else {
        newTimeLeft.isEnded = true;
      }
      return newTimeLeft;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return timeLeft;
};

const CountdownTimer = ({ endDate }) => {
  const { days, hours, minutes, seconds, isEnded } = useCountdown(endDate);

  if (isEnded) {
    return <div className="text-center text-lg font-bold text-red-500">Auction Ended</div>;
  }

  const timeParts = [
    { label: 'Days', value: days },
    { label: 'Hrs', value: hours },
    { label: 'Mins', value: minutes },
    { label: 'Secs', value: seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 text-center">
      {timeParts.map((part) => (
        <div key={part.label} className="bg-white/10 p-2 rounded-lg">
          <div className="text-xl font-bold" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            {String(part.value).padStart(2, '0')}
          </div>
          <div className="text-xs text-gray-400">{part.label}</div>
        </div>
      ))}
    </div>
  );
};


export default function Landingpage() {
  const [currentSlide, setCurrentSlide] = useState(2); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const featuredNFTs = [
    { id: 1, title: 'Blue Hair Punk', price: '1.5 ETH', artist: 'CryptoArtist', image: 'https://i.pinimg.com/736x/d0/b9/e1/d0b9e111eb8fe18f869afae0ff4e1119.jpg' },
    { id: 2, title: 'Bloc Genesis Bitcoin', price: '2.0 ETH', artist: 'DigitalDreamer', image: 'https://i.pinimg.com/736x/c4/ba/45/c4ba45c6dc50221bfd5e6317b72366c7.jpg' },
    { id: 3, title: 'Ella', price: '2.17 ETH', artist: 'Andy Ganilla', image: 'https://i.pinimg.com/1200x/a2/00/12/a20012c88aa022bda21353203de1de95.jpg' },
    { id: 4, title: 'sKi', price: '1.8 ETH', artist: 'NFTCreator', image: 'https://i.pinimg.com/736x/74/b8/8e/74b88e8d20b2b3bc2b6eb9c306372808.jpg' },
    { id: 5, title: 'Slizko', price: '1.3 ETH', artist: 'ArtMaster', image: 'https://i.pinimg.com/736x/60/ef/75/60ef755259ec4d5110a3f44759ddc558.jpg' },
  ];

  const trendingNFTs = [
    { id: 6, title: 'Abstract Dreams', price: '3.2 ETH', artist: 'Daria Mi', image: 'https://i.pinimg.com/1200x/9c/e9/87/9ce9872a8af4796c6b538eccce6fdef0.jpg' },
    { id: 7, title: 'Cyber Warrior', price: '2.8 ETH', artist: 'FutureVision', image: 'https://i.pinimg.com/1200x/fa/cd/e3/facde36024fe2ed809dc6a51d21aae5d.jpg' },
    { id: 8, title: 'Neon City', price: '2.5 ETH', artist: 'UrbanArtist', image: 'https://i.pinimg.com/736x/18/83/09/188309a2e96462afe8fa88cfdeebbaf5.jpg' },
    { id: 9, title: 'Digital Soul', price: '3.0 ETH', artist: 'SoulCreator', image: 'https://i.pinimg.com/736x/a1/5d/60/a15d60ecd47c07dfcc4f2faf34c4d286.jpg' },
  ];

  const stats = [
    { icon: <TrendingUp className="w-8 h-8" />, value: '50K+', label: 'Artworks' },
    { icon: <Users className="w-8 h-8" />, value: '25K+', label: 'Artists' },
    { icon: <Shield className="w-8 h-8" />, value: '100%', label: 'Secure' },
    { icon: <Zap className="w-8 h-8" />, value: '24/7', label: 'Support' },
  ];

const partners = ['ETHEREUM', 'POLYGON', 'METAMASK', 'COINBASE', 'BINANCE', 'OPENSEA'];

  const categories = [
    { id: 1, name: 'Art', icon: <Palette className="w-12 h-12" />, color: 'bg-black' },
    { id: 2, name: 'Music', icon: <Music className="w-12 h-12" />, color: 'bg-black' },
    { id: 3, name: 'Photography', icon: <Camera className="w-12 h-12" />, color: 'bg-black' },
    { id: 4, name: 'PFPs', icon: <UserPlus className="w-12 h-12" />, color: 'bg-black' },
    { id: 5, name: 'Collectibles', icon: <Layers className="w-12 h-12" />, color: 'bg-black' },
    { id: 6, name: 'Virtual Worlds', icon: <Globe className="w-12 h-12" />, color: 'bg-black' },
  ];
  
  const now = new Date();
  const liveAuctions = [
    { id: 10, title: 'CyberGeisha', artist: 'TokyoLabs', image: 'https://i.pinimg.com/736x/ad/1b/88/ad1b88bbec79d1b2e3ede755599ab5d4.jpg', currentBid: '4.5 ETH', endDate: new Date(now.getTime() + 2 * 60 * 60 * 1000) }, // 2 hours
    { id: 11, title: 'Martian Colony', artist: 'Jeffery Lopez', image: 'https://i.pinimg.com/736x/7a/9d/c6/7a9dc6aea2ec4564570d106c44c2bb32.jpg', currentBid: '2.1 ETH', endDate: new Date(now.getTime() + 5 * 60 * 60 * 1000 + 30 * 60 * 1000) }, // 5.5 hours
    { id: 12, title: 'Oceanic Glitch', artist: 'DeepBlue', image: 'https://i.pinimg.com/736x/97/c1/28/97c128069f71f019d8b8d54e97ad85da.jpg', currentBid: '1.8 ETH', endDate: new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000) }, // 1 day
  ];

  const topCreators = [
    { id: 1, name: 'CypherPunk', avatar: 'https://i.pravatar.cc/150?img=11', volume: '124.5 ETH' },
    { id: 2, name: 'DigitalVoid', avatar: 'https://i.pravatar.cc/150?img=12', volume: '98.2 ETH' },
    { id: 3, name: 'ArtMatrix', avatar: 'https://i.pravatar.cc/150?img=13', volume: '85.0 ETH' },
    { id: 4, name: 'PixelQueen', avatar: 'https://i.pravatar.cc/150?img=14', volume: '77.9 ETH' },
    { id: 5, name: 'SynthWave', avatar: 'https://i.pravatar.cc/150?img=15', volume: '62.1 ETH' },
    { id: 6, name: 'GlitchLord', avatar: 'https://i.pravatar.cc/150?img=16', volume: '50.3 ETH' },
  ];


  //carousel sliding
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredNFTs.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [featuredNFTs.length]);


  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };
  
  const pulse = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const navItemVariants = {
    hover: { scale: 1.1, y: -2 },
    tap: { scale: 0.95 }
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };
  
  const getSlideStyle = (index) => {
    const { length } = featuredNFTs;
    const position = (index - currentSlide + length) % length;

    if (position === 0) return { x: '0%', scale: 1.1, opacity: 1, zIndex: 3 };
    if (position === 1) return { x: '50%', scale: 0.85, opacity: 0.6, zIndex: 2 };
    if (position === length - 1) return { x: '-50%', scale: 0.85, opacity: 0.6, zIndex: 2 };
    if (position === 2) return { x: '100%', scale: 0.7, opacity: 0.3, zIndex: 1 };
    if (position === length - 2) return { x: '-100%', scale: 0.7, opacity: 0.3, zIndex: 1 };
    
    return { x: position > length / 2 ? '-150%' : '150%', scale: 0.7, opacity: 0, zIndex: 0 };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="text-2xl font-bold tracking-wider" 
              style={{ fontFamily: "'Orbitron', sans-serif" }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-white">XNFT</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {['ABOUT US', 'MARKET', 'WALLET', 'COMPANY'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className={`text-sm font-semibold tracking-wide ${item === 'MARKET' ? 'text-green-400' : 'text-gray-300 hover:text-green-400'} transition-colors relative`}
                  variants={navItemVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {item}
                  {item === 'MARKET' && <motion.div layoutId="underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400" />}
                </motion.a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <motion.button 
                className="p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Search className="w-5 h-5" />
              </motion.button>
              <motion.button 
                className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-full font-semibold"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                SUPPORT
              </motion.button>
            </div>

            <motion.button 
              className="md:hidden p-2" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }} 
                animate={{ height: "auto", opacity: 1 }} 
                exit={{ height: 0, opacity: 0 }} 
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 space-y-2">
                  {['ABOUT US', 'MARKET', 'WALLET', 'COMPANY'].map(item => (
                    <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className={`block px-4 py-2 hover:bg-gray-800 rounded ${item === 'MARKET' ? 'text-green-400' : ''}`}>{item}</a>
                  ))}
                  <button className="w-full mt-2 px-6 py-2 bg-green-500 hover:bg-green-600 rounded-full">SUPPORT</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <section id="market" className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight" 
              style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: '0.05em' }}
              variants={fadeInUp}
            >
              UNIQUE COLLECTION<br />OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">NFT ARTS</span>
            </motion.h1>
            <motion.p 
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Explore the biggest and most comprehensive collection of NFT art found across all leading marketplaces.
            </motion.p>
          </motion.div>

          
          {/* ---CAROUSEL --- */}
          <div className="relative max-w-6xl mx-auto mt-16 mb-16 h-[500px]">
            <AnimatePresence>
              {featuredNFTs.map((nft, index) => {
                const style = getSlideStyle(index);
                const isCenter = style.zIndex === 3;
                
                return (
                  <motion.div
                    key={nft.id}
                    className="absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer w-72"
                    style={{ pointerEvents: isCenter ? 'auto' : 'none' }}
                    animate={style}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    onClick={() => setCurrentSlide(index)}
                  >
                    <div className={`w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${isCenter ? 'border-green-400 shadow-2xl shadow-green-400/50' : 'border-gray-700'}`}>
                      <div className="aspect-square bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 relative overflow-hidden group">
                        <img src={nft.image} alt={nft.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <AnimatePresence>
                          {isCenter && (
                            <motion.div 
                              className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                            >
                              <p className="text-xs text-gray-300">Artist</p>
                              <p className="text-sm font-semibold">{nft.artist}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <div className="p-4 h-[132px] flex flex-col justify-center">
                        <AnimatePresence>
                          {isCenter && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.3 }}
                              className="text-center"
                            >
                              <p className="text-xs text-gray-400 mb-1">{nft.title}</p>
                              <p className="text-2xl font-bold mb-2">{nft.price}</p>
                              <motion.button 
                                className="w-full py-2 bg-green-500 hover:bg-green-600 rounded-lg font-semibold"
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                              >
                                MORE +
                              </motion.button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-12 mb-8">
            {featuredNFTs.map((_, index) => (
              <motion.button 
                key={index} 
                onClick={() => setCurrentSlide(index)} 
                className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white' : 'bg-gray-600'}`} 
                animate={{ width: index === currentSlide ? 32 : 8 }}
                whileHover={{ scale: 1.5 }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div 
                key={stat.label} 
                className="text-center p-6 bg-gradient-to-br from-gray-900 to-gray-900 rounded-xl border border-gray-700 cursor-pointer"
                variants={scaleIn}
                whileHover={{ scale: 1.05, borderColor: 'rgb(74, 222, 128)'  }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Browse by <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Category</span>
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {categories.map((category) => (
              <motion.div
                key={category.id}
                className="p-8 bg-gray-900 rounded-xl border border-gray-700 cursor-pointer text-center flex flex-col items-center justify-center"
                variants={scaleIn}
                whileHover={{ scale: 1.05, borderColor: 'rgb(74, 222, 128)', y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className={`p-4 rounded-full bg-gradient-to-br ${category.color} mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Live</span> Auctions
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {liveAuctions.map((nft) => (
              <motion.div
                key={nft.id}
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 group shadow-lg"
                variants={fadeInUp}
                whileHover={{ y: -5, borderColor: 'rgb(74, 222, 128)' }} // Red-500
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="aspect-video bg-gray-700 relative overflow-hidden">
                  <img src={nft.image} alt={nft.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-lg">
                    <Heart className="w-5 h-5 text-red-500" fill="currentColor" />
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-bold text-2xl mb-1">{nft.title}</h3>
                  <p className="text-gray-400 text-sm">by {nft.artist}</p>
                  
                  <CountdownTimer endDate={nft.endDate} />

                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <p className="text-xs text-gray-400">Current Bid</p>
                      <p className="text-xl font-bold text-green-400">{nft.currentBid}</p>
                    </div>
                    <motion.button 
                      className="px-6 py-3 bg-black border border-white rounded-full font-semibold"
                      variants={buttonVariants}
                      animate={pulse}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Place Bid
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
            <motion.h2 
              className="text-5xl font-bold mb-4 sm:mb-0"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Collections</span>
            </motion.h2>
            <motion.button 
              className="px-6 py-3 mr-62 md:mr-0 bg-black border border-white rounded-full font-semibold"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgb(74, 222, 128)" }}
              whileTap="tap"
            >
              View All
            </motion.button>
          </div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {trendingNFTs.map((nft) => (
              <motion.div 
                key={nft.id} 
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 cursor-pointer group"
                variants={fadeInUp}
                whileHover={{ y: -5, borderColor: 'rgb(74, 222, 128)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img src={nft.image} alt={nft.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{nft.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">by {nft.artist}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-semibold">{nft.price}</span>
                    <motion.button 
                      className="px-4 py-1 bg-black rounded-full text-sm"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Buy Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Creators</span>
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {topCreators.map((creator, index) => (
              <motion.div
                key={creator.id}
                className="bg-gray-900 rounded-xl border border-gray-700 p-6 text-center flex flex-col items-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, borderColor: 'rgb(74 222 128)', y: -5 }} // Green-400
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative mb-4">
                  <span 
                    className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-black font-bold text-sm"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    #{index + 1}
                  </span>
                  <img src={creator.avatar} alt={creator.name} className="w-24 h-24 rounded-full border-4 border-gray-700" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{creator.name}</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Volume: <span className="text-green-400">{creator.volume}</span>
                </p>
                <motion.button 
                  className="px-5 py-2 bg-black rounded-full text-sm font-semibold"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Follow
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="aboutus" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-green-400/20 rounded-full blur-[100px] -z-10" />
  <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-5xl font-bold mb-8 leading-tight"
                variants={fadeInUp}
              >
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Us</span>
              </motion.h2>
              
              <motion.div className="space-y-6 text-lg text-gray-400" variants={fadeInUp}>
                <p>
                  XNFT is not just a marketplace; it is a comprehensive ecosystem standing at the forefront of the <span className="text-white font-semibold">Web3 revolution</span>. As a cutting-edge platform, we are dedicated to redefining the concept of digital ownership and empowering a global network of artists, creators, and collectors.
                </p>
                <p>
                  We have engineered a seamless, intuitive environment that bridges the gap between complex blockchain technology and user-friendly design. Built upon the pillars of <span className="text-white font-semibold">uncompromising security</span> and continuous innovation, we strive to foster an inclusive space where creativity knows no bounds.
                </p>
                <p>
                  Join us on our mission to dismantle the barriers of the traditional art world and unlock a new horizon of possibilities for the digital generation.
                </p>
              </motion.div>

              <motion.div 
                className="mt-10 flex items-center gap-6"
                variants={fadeInUp}
              >
                <div className="text-sm">
                  <p className="font-bold text-white">- Trusted by 25K+ Artists</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative h-[600px] hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
      
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-green-400 rounded-2xl rotate-[-6deg] opacity-50 blur-sm" />
              <img 
                src="https://i.pinimg.com/736x/e1/59/c2/e159c2f008e34498a7384af8874d7d23.jpg" 
                alt="About Main" 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 object-cover rounded-2xl shadow-2xl z-10 border border-gray-700"
              />
              
              <motion.div 
                className="absolute top-20 right-10 w-48 h-48 bg-gray-800 rounded-xl p-2 border border-gray-700 shadow-xl z-20"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src="https://i.pinimg.com/736x/74/b8/8e/74b88e8d20b2b3bc2b6eb9c306372808.jpg" className="w-full h-full object-cover rounded-lg" alt="Detail 1" />
              </motion.div>

              <motion.div 
                className="absolute bottom-20 left-10 w-40 h-40 bg-gray-800 rounded-xl p-2 border border-gray-700 shadow-xl z-20"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <img src="https://i.pinimg.com/736x/65/aa/20/65aa2076d793da1d90c505a64de1d7ea.jpg" className="w-full h-full object-cover rounded-lg" alt="Detail 2" />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      <section id='wallet' className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Works</span>
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { num: 1, title: 'Set up your wallet', desc: 'Connect your crypto wallet to start buying and selling NFTs on our platform' },
              { num: 2, title: 'Create your collection', desc: 'Upload your artwork and create your own NFT collection with custom properties' },
              { num: 3, title: 'List them for sale', desc: 'Choose between auctions, fixed-price listings, and declining-price listings' }
            ].map((item) => (
              <motion.div 
                key={item.num} 
                className="text-center p-8 bg-gray-900 rounded-xl border border-gray-700"
                variants={fadeInUp}
                whileHover={{ scale: 1.03, borderColor: 'rgb(74, 222, 128)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  {item.num}
                </motion.div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="black rounded-3xl p-12 shadow-2xl shadow-green-500/30">
            <h2 className="text-4xl font-bold mb-6">Start Your NFT Journey Today</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of artists and collectors in the largest NFT marketplace</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-white text-black rounded-full font-bold"
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
              >
                Create NFT
              </motion.button>
              <motion.button 
                className="px-8 py-4 bg-transparent border-2 border-white rounded-full font-bold"
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
              >
                Explore Market
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="company" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
  <div className="max-w-7xl mx-auto">
    <motion.div
      className=" pt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h3 className="text-center text-gray-500 text-sm tracking-widest uppercase mb-10 font-semibold">Backed by the Best</h3>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70">
         {partners.map((partner) => (
           <motion.span 
              key={partner}
              className="text-2xl md:text-3xl font-bold text-gray-600 hover:text-white transition-colors cursor-pointer select-none"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
              whileHover={{ scale: 1.1 }}
           >
             {partner}
           </motion.span>
         ))}
      </div>
    </motion.div>
  </div>
</section>

      <footer className="bg-gray-900 border-t border-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[
              { title: 'Marketplace', links: ['All NFTs', 'Art', 'Music', 'Virtual Worlds'] },
              { title: 'My Account', links: ['Profile', 'Favorites', 'My Collections', 'Settings'] },
              { title: 'Resources', links: ['Help Center', 'Platform Status', 'Partners', 'Blog'] },
              { title: 'Company', links: ['About', 'Careers', 'Terms', 'Privacy'] }
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-bold mb-4 text-white">{col.title}</h4>
                <ul className="space-y-2 text-gray-400">
                  {col.links.map((link) => (
                    <motion.li 
                      key={link}
                      whileHover={{ x: 5, color: '#ffffff' }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <a href="#">{link}</a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 XNFT Marketplace. All rights reserved.</p>
            <p className="mt-2">Developed by Akinremi Daniel</p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}