/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Home, 
  Menu, 
  Share2, 
  BedDouble, 
  ShowerHead, 
  Maximize2, 
  Ruler, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MessageCircle, 
  Globe, 
  MapPin, 
  Compass,
  X,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Calculator,
  Wallet,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [showCopiedToast, setShowCopiedToast] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowCopiedToast(true);
    setTimeout(() => setShowCopiedToast(false), 2000);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex]);

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev === null ? null : (prev + 1) % thumbnails.length));
  };

  const handlePrev = () => {
    setSelectedImageIndex((prev) => (prev === null ? null : (prev - 1 + thumbnails.length) % thumbnails.length));
  };

  const getHighResUrl = (url: string) => url.replace('s.jpg', '.jpg');

  const contactInfo = {
    whatsapp: "34635475213",
    email: "magdalena@suhogarsevilla.com",
    phone: "+34 635 475 213",
    address: "Calle Chile 104, Bormujos 41930, Sevilla"
  };

  const images = [
    "https://fotos15.apinmo.com/3503/27731492/37-1.jpg"
  ];

  const thumbnails = [
    "https://fotos15.apinmo.com/3503/27731492/37-1s.jpg",
    "https://fotos15.apinmo.com/3503/27731492/37-15s.jpg",
    "https://fotos15.apinmo.com/3503/27731492/37-12s.jpg",
    "https://fotos15.apinmo.com/3503/27731492/37-22s.jpg",
    "https://fotos15.apinmo.com/3503/27731492/37-2s.jpg",
    "https://fotos15.apinmo.com/3503/27731492/37-7s.jpg",
    "https://fotos15.apinmo.com/3503/27731492/37-9s.jpg",
    "https://fotos15.apinmo.com/3503/27731492/37-23s.jpg",
    "https://fotos15.apinmo.com/3503/27731492/37-3s.jpg",
    "https://fotos15.apinmo.com/3503/27731492/37-4s.jpg",
    "https://fotos15.apinmo.com/3503/27731492/37-5s.jpg",
    "https://fotos15.apinmo.com/3503/27731492/37-6s.jpg",
    "https://fotos15.apinmo.com/3503/27731492/37-8s.jpg",
    "https://fotos15.apinmo.com/3503/27731492/37-10s.jpg",
    "https://fotos15.apinmo.com/3503/27731492/37-11s.jpg",
    "https://fotos15.apinmo.com/3503/27731492/37-13s.jpg",
    "https://fotos15.apinmo.com/3503/27731492/37-16s.jpg",
    "https://fotos15.apinmo.com/3503/27731492/37-19s.jpg",
    "https://fotos15.apinmo.com/3503/27731492/37-21s.jpg",
    "https://fotos15.apinmo.com/3503/27731492/37-24s.jpg"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-4'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <img 
                src="https://www.comprarcasasevilla.com/img/header/logo.png" 
                alt="ComprarCasa Sevilla" 
                className="h-8 md:h-10 object-contain"
              />
            </div>
            <nav className="hidden lg:flex items-center gap-6 text-[11px] font-bold text-slate-500 uppercase tracking-tight">
              {['Valora tu casa', 'Oficinas', 'DCredit', 'Trabaja con nosotros', 'Abre tu franquicia', 'News'].map((item) => (
                <a key={item} href="#" className="hover:text-primary transition-colors">{item}</a>
              ))}
            </nav>
          </div>
          {/* Button removed as per request */}
        </div>
      </header>

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Title and Price */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Casa en venta en ESPARTINAS, Sevilla</h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex items-center justify-between md:justify-start gap-4">
                <span className="text-4xl md:text-5xl font-black text-primary">395.000 €</span>
                <button 
                  onClick={handleShare}
                  className="relative flex items-center gap-1.5 text-slate-400 hover:text-primary transition-colors border border-slate-200 px-4 py-1.5 rounded text-[10px] font-bold uppercase"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  Comparte
                  <AnimatePresence>
                    {showCopiedToast && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: -35, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute left-1/2 -translate-x-1/2 bg-slate-900 text-white px-3 py-1 rounded text-[9px] whitespace-nowrap pointer-events-none"
                      >
                        Enlace copiado
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 md:gap-8">
                {[
                  { icon: <BedDouble />, value: "4", label: "Dormitorios" },
                  { icon: <ShowerHead />, value: "2", label: "Baños" },
                  { icon: <Maximize2 />, value: "171 m²", label: "Construidos" },
                  { icon: <Ruler />, value: "145 m²", label: "Útiles" },
                  { icon: <CheckCircle2 />, value: "Excelente", label: "Estado" },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="text-slate-300 mb-1 scale-90 md:scale-100">{item.icon}</div>
                    <span className="text-xs md:text-sm font-black text-slate-800">{item.value}</span>
                    <span className="text-[8px] md:text-[9px] font-bold uppercase text-slate-400 tracking-tighter text-center">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-[300px] md:h-[550px] mb-4 md:mb-6 overflow-hidden rounded-lg">
            <div 
              className="md:col-span-4 md:row-span-2 relative group overflow-hidden cursor-pointer"
              onClick={() => setSelectedImageIndex(0)}
            >
              <img src={images[0]} alt="Main" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-4 md:gap-8 mb-6 md:mb-8">
              <div className="h-px bg-slate-100 flex-grow max-w-[200px]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Galería de fotos</span>
              <div className="h-px bg-slate-100 flex-grow max-w-[200px]" />
            </div>
            <div className="flex gap-3 overflow-x-auto pb-4 hide-scrollbar justify-start md:justify-center px-2">
              {thumbnails.map((thumb, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`flex-none w-32 md:w-40 h-24 md:h-28 rounded overflow-hidden cursor-pointer transition-all ${idx === 4 ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                >
                  <img src={thumb} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Content and Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8">
              <div className="prose prose-slate max-w-none text-slate-600 leading-loose">
                <p className="text-lg font-medium text-slate-800 mb-6">
                  Imagina despertar cada mañana con el sol bañando tu jardín, rodeado de tranquilidad, naturaleza y el espacio que siempre soñaste. En la Urbanización Montaraz, en Espartinas, te espera esta vivienda única: un chalet independiente de dos plantas sobre una amplia parcela de casi 1.000 m², donde la privacidad y la comodidad se combinan a la perfección.
                </p>
                <p className="mb-6">
                  Con casi 200 m² construidos, esta casa destaca por su luminosidad, amplitud y diseño funcional. La planta baja, totalmente reformada, ofrece estancias amplias y acogedoras, que invitan a disfrutar del día a día con tu familia. Dispone de armarios empotrados y un vestidor que añaden comodidad y espacio de almacenamiento. La cocina cuenta con salida directa al jardín, donde un magnífico porche cubierto invita a disfrutar de comidas al aire libre y momentos de relax compartidos. Ya en el exterior, el auténtico paraíso: una piscina privada rodeada de zona ajardinada y una gran pista de tenis, ideal para mantener un estilo de vida activo sin salir de casa.
                </p>
                <p className="mb-6">
                  No podemos olvidarnos de la zona de aparcamiento con capacidad para varios vehículos, pozo propio que alimenta el riego del césped y el llenado de la piscina.
                </p>
                <p className="mb-6">
                  Vivir en Espartinas significa disfrutar de un entorno residencial tranquilo, con todos los servicios a mano, excelente conexión con Sevilla y un ambiente familiar que convierte cada día en un placer.
                </p>
                <p className="mb-10">
                  Este chalet no es solo una vivienda, es el hogar donde los momentos se vuelven recuerdos. Ven a descubrirlo y siéntelo como tuyo.
                </p>
              </div>
              
              {/* Info row removed as per request */}
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden shadow-sm">
                <div className="bg-primary px-6 py-4 text-center">
                  <h4 className="text-white font-bold tracking-[0.15em] uppercase text-[11px]">RED COMPOSTELA - MAGDALENA</h4>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-col items-center mb-8">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white shadow-md mb-3">
                      <img 
                        src="https://i.ibb.co/3yvvt76w/imagen.jpg" 
                        alt="Magdalena" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tu Agente Inmobiliario</p>
                  </div>
                   <div className="grid grid-cols-4 gap-2 md:gap-4 mb-10">
                    {[
                      { icon: <Phone className="w-5 h-5 md:w-6 md:h-6" />, label: "Llamada", href: `tel:${contactInfo.phone.replace(/\s/g, '')}` },
                      { icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />, label: "Email", href: `mailto:${contactInfo.email}` },
                      { 
                        icon: <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />, 
                        label: "Whatsapp", 
                        href: `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent("Hola, estoy interesado/a en la vivienda de Espartinas. ¿Podemos hablar?")}` 
                      },
                      { 
                        icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />, 
                        label: "Web", 
                        href: "https://www.comprarcasasevilla.com/ficha/chalet/espartinas/ramal-de-villanueva/3503/27731492/es/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      },
                    ].map((item, idx) => (
                      <a 
                        key={idx} 
                        href={item.href} 
                        target={item.target}
                        rel={item.rel}
                        className="flex flex-col items-center gap-2 md:gap-3 group"
                      >
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                          <div className="text-slate-400 group-hover:text-primary transition-colors">{item.icon}</div>
                        </div>
                        <span className="text-[7px] md:text-[8px] text-slate-400 font-bold uppercase tracking-tighter text-center group-hover:text-slate-600">{item.label}</span>
                      </a>
                    ))}
                  </div>
                  
                  <div className="space-y-5 border-t border-slate-200/60 pt-8">
                    <a 
                      href="https://maps.app.goo.gl/8Tya8cJZSxExWdFs9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 text-[11px] text-slate-500 font-medium hover:text-primary transition-colors group"
                    >
                      <MapPin className="w-5 h-5 text-slate-300 shrink-0 group-hover:text-primary transition-colors" />
                      <span>{contactInfo.address}</span>
                    </a>
                    <div className="flex items-center gap-4 text-[11px] text-slate-500">
                      <Phone className="w-5 h-5 text-slate-300 shrink-0" />
                      <span className="font-bold text-slate-900 text-sm md:text-base">{contactInfo.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12 md:mt-20">
            <div className="relative rounded-xl overflow-hidden h-[300px] md:h-[400px] border border-slate-100 bg-slate-50 group">
              <img 
                src="https://i.ibb.co/KcWNQ60k/10028.jpg" 
                alt="Explorar zona" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <a 
                  href="https://maps.app.goo.gl/mGPtzLbeTTxw5qE98" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-red-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-bold flex items-center gap-3 shadow-2xl shadow-primary/30 transform transition hover:scale-105 active:scale-95 text-xs md:text-base text-center"
                >
                  <Compass className="w-5 h-5" />
                  Explorar zona y servicios
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <img 
                  src="https://www.comprarcasasevilla.com/img/header/logo.png" 
                  alt="ComprarCasa Sevilla" 
                  className="h-12 object-contain brightness-0 invert"
                />
              </div>
              <p className="text-xs leading-relaxed max-w-xs font-medium opacity-70">
                Soluciones inmobiliarias al alcance de todos. Confía en ComprarCasa para encontrar tu hogar ideal con la mayor garantía y profesionalidad del sector.
              </p>
            </div>

            <div className="space-y-6">
              <h5 className="text-[11px] font-black uppercase tracking-[0.2em] text-white">Contacto Central</h5>
              <ul className="space-y-4 text-[11px] font-medium">
                <li>
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 hover:text-primary transition-colors group">
                    <Mail className="w-4 h-4 text-slate-600 group-hover:text-primary transition-colors" />
                    {contactInfo.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 hover:text-primary transition-colors group">
                    <Phone className="w-4 h-4 text-slate-600 group-hover:text-primary transition-colors" />
                    {contactInfo.phone}
                  </a>
                </li>
                <li>
                  <a 
                    href="https://maps.app.goo.gl/GVrz482QrSKJrNXn9" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-start gap-4 hover:text-primary transition-colors group"
                  >
                    <MapPin className="w-4 h-4 text-slate-600 shrink-0 group-hover:text-primary transition-colors" />
                    {contactInfo.address}
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-10">
              <div>
                <h5 className="text-[11px] font-black uppercase tracking-[0.2em] text-white mb-6">Social Media</h5>
                <div className="flex gap-4">
                  {[
                    { Icon: Facebook, url: "https://www.facebook.com/ComprarCasaSuHogarSevilla/?locale=es_ES" },
                    { Icon: Instagram, url: "https://www.instagram.com/comprarcasasuhogarsevilla/?hl=es" },
                    { Icon: Youtube, url: "https://www.youtube.com/@comprarcasasuhogarsevilla803" }
                  ].map((item, idx) => (
                    <a 
                      key={idx} 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-slate-800 flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                    >
                      <item.Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-[11px] font-black uppercase tracking-[0.2em] text-white mb-4">Simuladores</h5>
                <ul className="text-[11px] space-y-2 font-medium">
                  <li><a href="https://suhogar.comprarcasa.com/landing/valorador" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Valora tu vivienda</a></li>
                  <li><a href="https://suhogar.comprarcasa.com/landing/calculadora-hipoteca" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Calculadora hipoteca</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-black tracking-[0.2em] opacity-40">
            <div>© 2024 COMPRARCASA. TODOS LOS DERECHOS RESERVADOS.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Aviso legal</a>
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImageIndex(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
              onClick={() => setSelectedImageIndex(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <button 
              className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <motion.div 
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={getHighResUrl(thumbnails[selectedImageIndex])} 
                alt={`Gallery ${selectedImageIndex}`} 
                className="max-w-full max-h-full object-contain shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 py-6 text-center">
                <span className="text-white/60 text-sm font-medium">
                  {selectedImageIndex + 1} / {thumbnails.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Widget */}
      <AnimatePresence>
        {isWidgetOpen && (
          <>
            {/* Desktop Widget */}
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed bottom-8 right-8 z-[100] w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden hidden md:block"
            >
              <div className="p-4 bg-white border-b border-slate-50 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                      <Home className="w-5 h-5 text-primary" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white animate-pulse" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-900">¡Hola! 👋</p>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">Bienvenido a ComprarCasa</p>
                  </div>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsWidgetOpen(false);
                  }} 
                  className="text-slate-300 hover:text-slate-500 transition-colors p-1 cursor-pointer z-50 relative"
                  aria-label="Cerrar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  ¿Estás interesado en esta villa en Espartinas? Estamos aquí para ayudarte.
                </p>
                <div className="space-y-2">
                  <a 
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent("Hola Magdalena, estoy interesado/a en la vivienda de Espartinas. ¿Podemos agendar una visita?")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-primary text-white rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-all shadow-lg shadow-primary/20 flex items-center justify-center"
                  >
                    ¡Sí, me interesa!
                  </a>
                  <button className="w-full py-3 bg-slate-50 text-slate-600 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all border border-slate-100">
                    Tengo una pregunta
                  </button>
                  <a 
                    href={`https://wa.me/${contactInfo.whatsapp}`}
                    className="w-full py-3 bg-green-500 text-white rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-green-600 transition-all flex items-center justify-center gap-2 mt-2 shadow-lg shadow-green-500/20"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Contactar por WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Mobile Floating Button */}
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              href={`https://wa.me/${contactInfo.whatsapp}`}
              className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center md:hidden"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-7 h-7" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-bounce" />
            </motion.a>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
