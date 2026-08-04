'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaFacebook, FaInstagram, FaTripadvisor, FaStar, FaTimes, FaBars, FaExpand } from 'react-icons/fa';

const navLinks = [
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'Chi Siamo' },
  { href: '#gallery', label: 'Galleria' }
];

const featuredDishes = [
  {
    id: 1,
    name: 'Lasagna Tradizionale',
    description: 'Un classico senza tempo, preparato con ragù fatto in casa.',
    price: '15,00€',
    image: '/images/lasagna.jpg',
    category: 'Primi',
  },
  {
    id: 2,
    name: 'Risotto ai Funghi',
    description: 'Cremoso risotto con funghi porcini freschi e tartufo.',
    price: '18,00€',
    image: '/images/funghi.jpg',
    category: 'Primi',
  },
  {
    id: 3,
    name: 'Filetto di Manzo',
    description: 'Tenero filetto, cotto alla perfezione con salsa al pepe verde.',
    price: '24,00€',
    image: '/images/manzo.jpg',
    category: 'Secondi',
  },
  {
    id: 4,
    name: 'Polenta al Pesto',
    description: 'Una polenta delicata con pesto di basilico.',
    price: '12,00€',
    image: '/images/polenta.jpg',
    category: 'Primi',
  },
  {
    id: 5,
    name: 'Tiramisù della Casa',
    description: 'Un dolce tradizionale con mascarpone e caffè.',
    price: '7,00€',
    image: '/images/tiramisu.jpg',
    category: 'Dolci',
  },
  {
    id: 6,
    name: 'Insalata di Stagione',
    description: 'Verdure fresche con vinaigrette all\'aceto balsamico.',
    price: '10,00€',
    image: '/images/insalata.jpg',
    category: 'Antipasti',
  },
];

const galleryImages = [
  { id: 1, src: '/images/interni.jpg', alt: 'Interno elegante' },
  { id: 2, src: '/images/piatto.jpg', alt: 'Piatto gourmet' },
  { id: 3, src: '/images/dettagli.jpg', alt: 'Dettagli della cucina' },
  { id: 4, src: '/images/cocktail.jpg', alt: 'Cocktail' },
  { id: 5, src: '/images/tavoli.jpg', alt: 'Tavoli all\'aperto' },
  { id: 6, src: '/images/vini.jpg', alt: 'Vini pregiati' },
];

const testimonials = [
  {
    id: 1,
    quote: "Un'esperienza sublime, sapori autentici e servizio impeccabile. Torneremo sicuramente!",
    author: 'Mario Rossi',
  },
  {
    id: 2,
    quote: "La migliore cena che abbiamo avuto da anni. Ogni piatto è un capolavoro.",
    author: 'Chiara Bianchi',
  },
  {
    id: 3,
    quote: "Atmosfera accogliente e cibo delizioso. Un vero gioiello nascosto.",
    author: 'Luca Verdi',
  },
];

const ImageGalleryModal = ({ images, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black bg-opacity-95 backdrop-blur-sm overflow-y-auto p-4 md:p-12"
    >
      <div className="container mx-auto">
        <div className="flex justify-end mb-4">
          <button onClick={onClose} className="text-white hover:text-gray-300 transition-colors">
            <FaTimes size={32} />
          </button>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-8">
          {images.map(image => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              className="relative w-full mb-4 md:mb-8 break-inside-avoid-column cursor-pointer"
            >
              <Image src={image.src} alt={image.alt} width={600} height={400} className="rounded-lg shadow-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const WaveBackground = () => (
  <svg
    className="absolute inset-0 z-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 24 150 28"
    preserveAspectRatio="none"
    shapeRendering="auto"
  >
    <defs>
      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v24h-352z" />
    </defs>
    <g className="animate-wave opacity-50">
      <use xlinkHref="#gentle-wave" x="48" y="0" fill="#E67E22" />
    </g>
    <g className="animate-wave-reverse opacity-40">
      <use xlinkHref="#gentle-wave" x="48" y="3" fill="#D35400" />
    </g>
    <g className="animate-wave opacity-30">
      <use xlinkHref="#gentle-wave" x="48" y="5" fill="#C0392B" />
    </g>
  </svg>
);

const RestaurantHomePage = () => {
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = ['All', ...new Set(featuredDishes.map(dish => dish.category))];
  const filteredDishes = activeCategory === 'All' ? featuredDishes : featuredDishes.filter(dish => dish.category === activeCategory);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeModal(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-50 font-sans text-gray-800 overflow-x-hidden">

      <AnimatePresence>
        {showWelcomeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative p-6 md:p-10 flex items-center justify-center"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full border-2 md:border-4 border-blue-600"
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full flex items-start justify-center"
                style={{
                  top: '-10%',
                  left: '-10%',
                  width: '120%',
                  height: '120%',
                }}
              >
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: [1, 0.5, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  }}
                  className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full shadow-lg"
                />
              </motion.div>

              <div className="relative p-4 md:p-6 bg-white rounded-xl shadow-2xl text-center z-10">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-800 mb-1 md:mb-2">Benvenuto</h2>
                <p className="text-xs md:text-sm text-gray-600">Preparati per un'esperienza indimenticabile!</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <header className="fixed w-full z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold font-serif text-gray-800">
            Il Ristorante Fittizio
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                {link.label}
              </a>
            ))}
            <a href="#booking" className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300">
              Prenota
            </a>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-gray-800">
            <FaBars size={24} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 w-full z-40 bg-white shadow-lg md:hidden"
          >
            <div className="flex flex-col items-center py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-2 px-4 text-gray-800 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#booking"
                className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Prenota
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden" style={{ backgroundImage: "url('/images/sfondo_risto.jpg')", backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className="absolute inset-0 z-0 bg-gray-600 bg-opacity-50"></div>
        <WaveBackground />
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="relative z-10 px-4 max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-serif font-extrabold mb-4 drop-shadow-2xl">
            Il Gusto della Tradizione
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto">
            Un'esperienza culinaria indimenticabile, dove ogni piatto racconta una storia di passione e ingredienti freschi.
          </p>
          <div className="flex justify-center gap-4">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#menu" className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300">
              Scopri il Menu
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#booking" className="bg-transparent text-white border-2 border-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-gray-800 transition-colors duration-300">
              Prenota Ora
            </motion.a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-12">
          <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="md:w-1/2">
            <Image
              src="/images/chef_.jpg"
              alt="Il nostro Chef"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </motion.div>
          <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="md:w-1/2">
            <h2 className="text-4xl font-bold font-serif mb-4">La Nostra Storia</h2>
            <p className="text-lg text-gray-600 mb-4">
              Il Ristorante fittizio nasce nel cuore della città, con la passione per la cucina mediterranea e l'arte di selezionare ingredienti freschi e di qualità. Ogni piatto è creato per offrire un'esperienza unica ai nostri ospiti, combinando tradizione e innovazione.
              Da oltre dieci anni accogliamo i nostri clienti in un ambiente familiare e raffinato, dove il gusto incontra la convivialità. Ogni ricetta racconta una storia, ogni ingrediente viene scelto con cura per garantire freschezza e autenticità, regalando momenti indimenticabili a chi ci sceglie.           </p>
            <p className="text-lg text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="menu" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-serif mb-4">I Nostri Piatti</h2>
          <p className="text-lg text-gray-600 mb-8">
            Scopri le nostre specialità, preparate con ingredienti freschi e di stagione.
          </p>

          <div className="mb-12 flex justify-center gap-4 flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${activeCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image src={dish.image} alt={dish.name} width={400} height={300} className="rounded-lg mb-4" />
                <h3 className="text-2xl font-semibold mb-1">{dish.name}</h3>
                <p className="text-gray-500 mb-2">{dish.description}</p>
                <span className="text-xl font-bold text-blue-600">{dish.price}</span>
              </motion.div>
            ))}
          </div>
          <a href="#menu" className="mt-12 inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300">
            Vedi il Menu Completo
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-serif mb-12">Dicono di Noi</h2>
          <Slider {...carouselSettings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-8">
                <div className="p-8 bg-gray-100 rounded-lg shadow-md max-w-3xl mx-auto">
                  <div className="flex justify-center text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => <FaStar key={i} className="w-5 h-5 mx-1" />)}
                  </div>
                  <p className="text-lg italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-gray-800">- {testimonial.author}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-serif mb-12">La Nostra Galleria</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.slice(0, 4).map((image) => (
              <motion.div
                key={image.id}
                className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowGalleryModal(true)}
            className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <FaExpand />
            Vedi Galleria Completa
          </motion.button>
        </div>
      </section>

      <AnimatePresence>
        {showGalleryModal && (
          <ImageGalleryModal
            images={galleryImages}
            onClose={() => setShowGalleryModal(false)}
          />
        )}
      </AnimatePresence>

      <section id="booking" className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-serif mb-4">Prenota un Tavolo</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Siamo aperti tutti i giorni, dalle 19:00 alle 23:00. <br />
            Per prenotazioni o per qualsiasi informazione, non esitare a contattarci.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto text-gray-800">
            <form className="space-y-4">
              <input type="text" placeholder="Nome Completo" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
              <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
              <input type="tel" placeholder="Numero di Telefono" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
              <div className="grid grid-cols-2 gap-4">
                <input type="date" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                <input type="time" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
              </div>
              <textarea placeholder="Note o richieste speciali" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300">
                Invia Prenotazione
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold mb-2">Contatti</h4>
              <p className="text-gray-400">Via Fittizia, 123</p>
              <p className="text-gray-400">12345, Città Immaginaria</p>
              <p className="text-gray-400">info@ristorantefittizio.it</p>
              <p className="text-gray-400">+39 012 3456789</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Orari</h4>
              <p className="text-gray-400">Lunedì - Venerdì: 19:00 - 23:00</p>
              <p className="text-gray-400">Sabato e Domenica: 12:30 - 15:00 / 19:00 - 23:30</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Social Media</h4>
              <div className="flex justify-center gap-4 text-gray-400">
                <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                  <FaFacebook size={24} />
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="#" aria-label="Tripadvisor" className="hover:text-white transition-colors">
                  <FaTripadvisor size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 mt-8">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Ristorante Fittizio. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantHomePage;