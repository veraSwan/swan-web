import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Mail, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Proszę wypełnić wszystkie pola",
        variant: "destructive",
        duration: 3000
      });
      return;
    }

    toast({
      title: "🚧 Formularz w trakcie konfiguracji",
      description: "Dziękujemy za chęć kontaktu! Możesz poprosić o pełną integrację w kolejnym kroku.",
      duration: 4000
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Kontakt - Swan Web Studio</title>
        <meta name="description" content="Skontaktuj się z nami. Porozmawiajmy o Twoim projekcie i wspólnie znajdźmy najlepsze rozwiązanie dla Twojego biznesu." />
      </Helmet>

      <main className="bg-[#0E0F12] overflow-x-hidden">
        {/* Hero Section */}
        <section className="layout-container section-spacing relative overflow-hidden bg-gradient-to-b from-[#0E0F12] via-[#131418] to-[#0E0F12]">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#5A4B81] opacity-[0.08] blur-[180px] rounded-full pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C05775] opacity-[0.05] blur-[180px] rounded-full pointer-events-none" />
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center mb-24 relative z-10 flex flex-col items-center"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-xl leading-tight tracking-[-0.02em]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Porozmawiajmy o Twoim projekcie
            </motion.h1>
            <div className="text-block mx-auto">
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-[#E5E7EB] opacity-90 font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Masz dodatkowe pytania? Chcesz spokojnie wycenić stronę?
              </motion.p>
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-[#E5E7EB] opacity-90 font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Jesteśmy w pełni do Twojej dyspozycji na każdym etapie.
              </motion.p>
            </div>
          </motion.div>

          <div className="relative z-10 w-full flex flex-col items-center">
            <div className="grid md:grid-cols-2 grid-spacing mb-16 w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-[#131418] rounded-[2rem] p-10 shadow-xl border border-white/5 flex items-center gap-6 group hover:border-[#C05775]/40 transition-colors backdrop-blur-sm w-full"
              >
                <div className="bg-[#1A1C20] rounded-2xl p-4 border border-[#ffffff]/5 group-hover:scale-110 transition-transform shadow-inner">
                  <Mail className="w-7 h-7 text-[#C05775] stroke-[1.5]" />
                </div>
                <div className="text-block">
                  <h3 className="font-bold text-white mb-2 text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Napisz do nas
                  </h3>
                  <p className="text-[#E5E7EB] opacity-70 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    hello@swanwebstudio.com
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="bg-[#131418] rounded-[2rem] p-10 shadow-xl border border-white/5 flex items-center gap-6 group hover:border-[#C05775]/40 transition-colors backdrop-blur-sm w-full"
              >
                <div className="bg-[#1A1C20] rounded-2xl p-4 border border-[#ffffff]/5 group-hover:scale-110 transition-transform shadow-inner">
                  <MessageCircle className="w-7 h-7 text-[#C05775] stroke-[1.5]" />
                </div>
                <div className="text-block">
                  <h3 className="font-bold text-white mb-2 text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Szybki kontakt
                  </h3>
                  <p className="text-[#E5E7EB] opacity-70 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Odpowiadamy w 24h
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#131418] rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-white/5 relative overflow-hidden backdrop-blur-sm w-full"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#C05775]/5 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#C05775]/[0.02] to-transparent pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-[#E5E7EB] mb-4 ml-1 transition-colors group-focus-within:text-[#C05775] uppercase tracking-wide opacity-80" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Twoje imię
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-5 rounded-2xl bg-[#1A1C20] border border-[#2A2C32] text-white focus:outline-none focus:border-[#C05775] focus:ring-4 focus:ring-[#C05775]/10 focus:shadow-[0_0_20px_rgba(192,87,117,0.15)] transition-all duration-300 placeholder-[#4B5563] font-light shadow-inner text-lg"
                    placeholder="Wpisz swoje imię"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    aria-label="Twoje imię"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-[#E5E7EB] mb-4 ml-1 transition-colors group-focus-within:text-[#C05775] uppercase tracking-wide opacity-80" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Adres email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-5 rounded-2xl bg-[#1A1C20] border border-[#2A2C32] text-white focus:outline-none focus:border-[#C05775] focus:ring-4 focus:ring-[#C05775]/10 focus:shadow-[0_0_20px_rgba(192,87,117,0.15)] transition-all duration-300 placeholder-[#4B5563] font-light shadow-inner text-lg"
                    placeholder="twoj@email.com"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    aria-label="Adres email"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-[#E5E7EB] mb-4 ml-1 transition-colors group-focus-within:text-[#C05775] uppercase tracking-wide opacity-80" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-6 py-5 rounded-2xl bg-[#1A1C20] border border-[#2A2C32] text-white focus:outline-none focus:border-[#C05775] focus:ring-4 focus:ring-[#C05775]/10 focus:shadow-[0_0_20px_rgba(192,87,117,0.15)] transition-all duration-300 resize-none placeholder-[#4B5563] font-light shadow-inner text-lg"
                    placeholder="Opisz krótko swój projekt lub pytanie..."
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    aria-label="Treść wiadomości"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary-cta"
                  className="w-full flex items-center justify-center gap-2 text-lg py-7 shadow-lg hover:shadow-[#C05775]/30 transition-shadow"
                  size="xl"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Wyślij wiadomość
                  <Send className="w-5 h-5" />
                </Button>
              </form>
              <p className="text-center text-[#E5E7EB] opacity-50 text-sm mt-8 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                Skontaktujemy się z Tobą najszybciej jak to możliwe.
              </p>
            </motion.div>
          </div>
        </section>

         {/* Footer */}
         <footer className="bg-[#0E0F12] pt-24 pb-12 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-[#0E0F12] to-[#0E0F12] opacity-100 -z-10" />
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#C05775]/50 to-transparent opacity-50" />
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-[#C05775]/10 blur-[60px] rounded-full pointer-events-none" />

            <div className="layout-container text-center relative z-10">
              <h3 className="text-2xl font-bold text-white mb-10" style={{ fontFamily: 'DM Sans, sans-serif' }}>Swan Web Studio</h3>
              
              <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-14">
                 {['Start', 'O nas', 'Usługi', 'Portfolio', 'Kontakt'].map((item, idx) => {
                   const paths = ['/', '/about', '/services', '/portfolio', '/contact'];
                   return (
                     <a key={item} href={paths[idx]} className="text-[#E5E7EB] hover:text-[#C05775] transition-colors text-sm font-medium tracking-wide px-2 py-1">
                       {item}
                     </a>
                   );
                 })}
              </div>

              <div className="text-[#E5E7EB] opacity-50 text-sm font-light border-t border-white/5 pt-8 max-w-2xl mx-auto">
                © {new Date().getFullYear()} Swan Web Studio. Wszelkie prawa zastrzeżone.
              </div>
            </div>
         </footer>
      </main>
    </>
  );
};

export default Contact;