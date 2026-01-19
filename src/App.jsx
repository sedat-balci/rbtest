import React from 'react'
import 'leaflet/dist/leaflet.css'
import { motion } from 'framer-motion'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

// Leaflet marker icon düzeltmesi
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
})
L.Marker.prototype.options.icon = DefaultIcon

// Navbar Component
const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { label: 'Ana Sayfa', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: 'Ürünümüz', action: () => scrollToSection('features') },
    { label: 'Hizmet Alanları', action: () => scrollToSection('target-audience') },
    { label: 'Bayilik', action: () => scrollToSection('franchises') },
    { label: 'İletişim', action: () => scrollToSection('contact') },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-orange-600 uppercase tracking-wider cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            ROMA BURGER
          </h1>
        </motion.div>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={link.action}
              className="text-gray-600 hover:text-orange-600 transition-colors duration-300 font-medium"
            >
              {link.label}
            </motion.button>
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contact')}
          className="px-6 py-2 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-lg shadow-orange-200"
        >
          İletişim
        </motion.button>
      </div>
    </nav>
  )
}

// Hero Component
const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-between px-6 pt-24 pb-12 overflow-hidden bg-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Sol taraf - Slogan */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold uppercase leading-tight text-gray-900">
            YENİ NESİL
            <br />
            <span className="text-orange-500">ISLAK BURGER</span>
            <br />
            TEDARİĞİ
          </h1>
          <p className="text-xl text-gray-600 max-w-md">
            Üniversite kantinleri, yemekhaneler ve kafeler için pratik, donmuş ve ısıtmaya hazır efsane lezzet.
          </p>
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-orange-600 text-white font-bold text-lg rounded-full hover:bg-orange-700 transition-colors duration-300 shadow-xl shadow-orange-200"
          >
            Bayilik Başvurusu
          </motion.button>
        </motion.div>

        {/* Sağ taraf - Burger görseli */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex items-center justify-center"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10"
          >
            {/* Placeholder burger görseli */}
            <div className="w-96 h-96 bg-orange-100 rounded-full flex items-center justify-center border-4 border-orange-200 shadow-2xl">
              <div className="text-8xl">🍔</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Marquee Component
const Marquee = () => {
  const marqueeText = "TOPTAN SATIŞ • GÜNLÜK ÜRETİM • HİJYENİK TESİS • TAZE MALZEME • KALİTELİ HİZMET"
  
  return (
    <div className="py-6 bg-orange-500 border-y border-orange-400 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        <div className="flex space-x-8">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className="text-2xl font-bold text-white uppercase tracking-wider"
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

// Features Component
const Features = () => {
  const features = [
    {
      title: "Hazır & Pratik",
      description: "Tamamen hazırlanmış olarak gelir, sadece ısıtıp servis edersiniz.",
      icon: "🍔",
    },
    {
      title: "Donmuş Lojistik",
      description: "-18 derecede tazeliğini koruyan özel şoklama teknolojisi.",
      icon: "📦",
    },
    {
      title: "Standart Lezzet",
      description: "Her sevkiyatta değişmeyen, garantili sos ve köfte standardı.",
      icon: "✨",
    },
  ]

  return (
    <section id="features" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold uppercase text-center mb-16 text-gray-900"
        >
          Neden <span className="text-orange-500">Roma Burger?</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold uppercase mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Target Audience Component (SARI TEMA)
const TargetAudience = () => {
  const audiences = [
    { title: "Üniversite Kantinleri", icon: "🎓" },
    { title: "Okul Yemekhaneleri", icon: "🏫" },
    { title: "Restoran ve Kafeler", icon: "☕" },
    { title: "Kurumsal Yemek Firmaları", icon: "🏢" },
  ]

  return (
    <section id="target-audience" className="py-24 px-6 bg-yellow-400">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold uppercase text-center mb-16 text-white drop-shadow-md"
        >
          Kimler İçin <span className="text-gray-900">Uygunuz?</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="text-6xl mb-4">{audience.icon}</div>
              <h3 className="text-xl font-bold uppercase text-gray-900">
                {audience.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Franchises Component
const Franchises = () => {
  const franchises = [
    {
      title: "ANTALYA ANA BAYİ",
      address: "Bahçeyaka, 643. Sk. No:3, 07190 Döşemealtı/Antalya",
      phone: "+90 544 737 88 07",
      email: "romaburgerr@gmail.com",
      coordinates: [37.017, 30.605],
      mapLabel: "Antalya Ana Bayi",
    },
    {
      title: "ISPARTA & BURDUR BAYİSİ",
      address: "1006 sokak No: 43/B Kutlubey mah. Isparta Merkez",
      phone: "+90 535 501 59 90",
      email: "romaburgerr@gmail.com",
      coordinates: [37.766, 30.556],
      mapLabel: "Isparta & Burdur Dağıtım",
    },
    {
      title: "DENİZLİ & MUĞLA BAYİSİ",
      address: "Atalar mahallesi 1342 sokak No: 7B Pamukkale/Denizli",
      phone: "+90 544 154 14 51",
      email: "romaburgerr@gmail.com",
      coordinates: [37.783, 29.095],
      mapLabel: "Denizli & Muğla Dağıtım",
    },
  ]

  const serviceAreas = ["Antalya", "Isparta", "Burdur", "Denizli", "Muğla"]

  return (
    <section id="franchises" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        {/* Giriş Metni */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Roma Burger olarak, Antalya'daki ana bayimiz üzerinden yürüttüğümüz güçlü dağıtım ağımızla, Roma Burger'in benzersiz lezzetini Türkiye'nin dört bir yanına ulaştırıyoruz.
          </p>
        </motion.div>

        {/* Hizmet Verilen İller Badge Bulutu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          <span className="text-sm font-bold uppercase text-gray-400 mb-2 w-full text-center">
            Hizmet Verilen İller:
          </span>
          {serviceAreas.map((area, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="px-6 py-2 bg-orange-50 border border-orange-200 rounded-full text-orange-600 font-bold uppercase text-sm hover:bg-orange-100 transition-colors duration-300"
            >
              {area}
            </motion.span>
          ))}
        </motion.div>

        {/* Harita */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-xl border-2 border-gray-100 shadow-2xl overflow-hidden h-[400px]">
            <MapContainer
              center={[37.5, 30.4]}
              zoom={7}
              className="h-full w-full z-0"
            >
              {/* Aydınlık Harita Katmanı (Voyager) */}
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://carto.com/">CARTO</a>'
              />
              {franchises.map((franchise, index) => (
                <Marker key={index} position={franchise.coordinates}>
                  <Popup>
                    <div className="text-center p-2">
                      <strong className="text-orange-600 uppercase text-sm block">{franchise.mapLabel}</strong>
                      <span className="text-gray-600 text-xs block mt-1">{franchise.title}</span>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </motion.div>

        {/* Bayi Kartları */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {franchises.map((franchise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-3xl p-8 border-l-4 border-orange-500 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl md:text-2xl font-bold uppercase text-gray-900 mb-6">
                {franchise.title}
              </h3>
              
              <div className="space-y-4">
                {/* Adres */}
                <div className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl mt-1">📍</span>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {franchise.address}
                  </p>
                </div>

                {/* Telefon */}
                <div className="flex items-center gap-3">
                  <span className="text-orange-500 text-xl">📞</span>
                  <a
                    href={`tel:${franchise.phone.replace(/\s/g, '')}`}
                    className="text-gray-700 hover:text-orange-600 transition-colors duration-300 text-sm font-bold"
                  >
                    {franchise.phone}
                  </a>
                </div>

                {/* E-posta */}
                <div className="flex items-center gap-3">
                  <span className="text-orange-500 text-xl">✉️</span>
                  <a
                    href={`mailto:${franchise.email}`}
                    className="text-gray-700 hover:text-orange-600 transition-colors duration-300 text-sm break-all"
                  >
                    {franchise.email}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Alt Bayilik CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-200 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold uppercase text-orange-800 mb-4">
            Alt Bayilik Başvurusu
          </h3>
          <p className="text-gray-600 text-lg mb-6">
            Alt bayilik veya toptan talepleriniz için iletişime geçiniz:
          </p>
          <motion.a
            href="tel:+905447378807"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-orange-600 text-white font-bold text-xl rounded-full hover:bg-orange-700 transition-colors duration-300 shadow-lg shadow-orange-300"
          >
            📞 +90 544 737 88 07
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

// Franchise CTA Component
const FranchiseCTA = () => {
  return (
    <section id="franchise-cta" className="py-20 px-6 bg-gradient-to-r from-orange-600 to-orange-500">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-white mb-6">
            İşletmenize Lezzet Katın!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Alt bayilik veya toptan alım talepleriniz için hemen görüşelim.
          </p>
          <motion.a
            href="tel:+905447378807"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-white text-orange-600 font-bold text-xl rounded-full hover:bg-gray-100 transition-colors duration-300"
          >
            📞 +90 544 737 88 07
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

// Footer Component
const Footer = () => {
  return (
    <footer id="contact" className="py-12 px-6 bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold uppercase text-orange-500 mb-4">
              ROMA BURGER
            </h3>
            <p className="text-gray-400 text-lg font-medium">
              Damaklarda İz Bırakan Lezzet
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold uppercase mb-4">İletişim</h4>
            <a 
              href="tel:+905447378807" 
              className="text-gray-300 hover:text-orange-500 transition-colors duration-300 block mb-3 text-lg font-medium"
            >
              📞 +90 544 737 88 07
            </a>
            <a 
              href="mailto:romaburgerr@gmail.com" 
              className="text-gray-300 hover:text-orange-500 transition-colors duration-300 block mb-3 text-lg font-medium"
            >
              ✉️ romaburgerr@gmail.com
            </a>
            <p className="text-gray-400 text-sm">
              📍 Bahçeyaka, 643. Sk. No:3, 07190 Döşemealtı/Antalya
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold uppercase mb-4">Çalışma Saatleri</h4>
            <p className="text-gray-400 mb-2">Pazartesi - Cuma</p>
            <p className="text-gray-400">09:00 - 18:00</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; 2024 Roma Burger - Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <Marquee />
      <TargetAudience />
      <Franchises />
      <FranchiseCTA />
      <Footer />
    </div>
  )
}

export default App