import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Star, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-[#C05775]" />,
      title: 'Szczerość',
      description: 'Mówimy wprost, co zadziała, a co jest tylko zbędnym dodatkiem. Budujemy fundamenty oparte na wzajemnym zaufaniu.'
    },
    {
      icon: <Star className="w-8 h-8 text-[#C05775]" />,
      title: 'Rzemiosło',
      description: 'Dla nas nowa strona to prawdziwe dzieło rąk i umysłu. Każdy użyty piksel i linia kodu ma swoje uzasadnienie.'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-[#C05775]" />,
      title: 'Cel',
      description: 'Nigdy nie projektujemy dla samej sztuki. Wszystko, co robimy w projektach, musi bezpośrednio wspierać Twoją wizję.'
    }
  ];

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
        <title>O nas - Swan Web Studio</title>
        <meta name="description" content="Poznaj Swan Web Studio. Jesteśmy kameralnym zespołem, który wierzy w sensowne projekty i szczere rzemiosło." />
      </Helmet>

      <main className="bg-[#0E0F12] overflow-x-hidden">
        <section className="layout-container section-spacing relative overflow-hidden bg-gradient-to-b from-[#0E0F12] to-[#131418]">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5A4B81] opacity-10 blur-[150px] rounded-full pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C05775] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-white mb-10 drop-shadow-xl leading-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Za kulisami SWAN
            </motion.h1>
            
            <motion.div 
              variants={fadeInUp}
              className="bg-[#131418] rounded-[2.5rem] p-12 md:p-16 shadow-xl border border-white/5 relative overflow-hidden backdrop-blur-sm w-full"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-[#C05775] to-[#5A4B81] opacity-[0.03] pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C05775]/50 to-transparent" />
              
              <div className="text-block mx-auto text-left md:text-center">
                <p className="text-xl md:text-2xl text-[#E5E7EB] leading-relaxed font-light relative z-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Swan Web Studio powstało z silnej potrzeby tworzenia rzeczy, które mają dla nas <span className="text-white font-medium">znaczenie</span>.
                </p>
                <p className="text-xl md:text-2xl text-[#E5E7EB] leading-relaxed font-light relative z-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Omijamy sztuczne i korporacyjne schematy, po to by być o wiele bliżej Twojej prawdziwej wizji biznesu.
                </p>
                <p className="text-xl text-[#E5E7EB] leading-relaxed font-light relative z-10 opacity-90" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Wierzymy głęboko, że najlepsze i najtrwalsze projekty rodzą się zazwyczaj w ciszy i mocnym skupieniu.
                </p>
                <p className="text-xl text-[#E5E7EB] leading-relaxed font-light relative z-10 opacity-90" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Nie ganiamy ślepo za każdym możliwym zleceniem – wybieramy z rozmysłem te, w które możemy włożyć serce i pełne zaangażowanie. Twoja unikalna marka zasługuje na naszą <span className="text-white font-medium">niepodzielną uwagę</span>.
                </p>
                <p className="text-xl text-[#E5E7EB] leading-relaxed font-light relative z-10 opacity-90" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Nasza codzienna praca to nie tylko sam kod i sucha grafika.
                </p>
                <p className="text-xl text-[#E5E7EB] leading-relaxed font-light relative z-10 opacity-90" style={{ fontFamily: 'Inter, sans-serif' }}>
                  To przede wszystkim ciągłe poszukiwanie odpowiedzi na nurtujące pytanie: jak ostatecznie sprawić, by Twoja biznesowa obecność w sieci była zarówno w pełni autentyczna, jak i mierzalnie skuteczna?
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="section-spacing relative overflow-hidden bg-gradient-to-b from-[#131418] to-[#131418]">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-[#5A4B81]/20 to-transparent" />
          
          <div className="layout-container relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 drop-shadow-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Nasza dewiza
              </h2>
              <div className="text-block mx-auto">
                <p className="text-2xl md:text-3xl text-[#E5E7EB] leading-relaxed font-light opacity-90" style={{ fontFamily: 'Inter, sans-serif' }}>
                  "Dobry projekt to taki, którego nie da się już uprościć, nie tracąc przy tym jego duszy."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="layout-container section-spacing relative bg-gradient-to-b from-[#131418] to-[#131418]">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-[#C05775]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[#C05775] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="relative z-10"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white text-center mb-20 drop-shadow-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              To, co dla nas ważne
            </motion.h2>
            <div className="grid md:grid-cols-3 grid-spacing">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="bg-[#1A1C20] rounded-[2rem] p-10 shadow-xl border border-white/5 hover:border-[#C05775]/40 transition-all duration-300 text-center group relative overflow-hidden backdrop-blur-sm flex flex-col items-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C05775] to-[#5A4B81] opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-300" />

                  <div className="inline-flex mb-8 bg-gradient-to-br from-[#C05775]/10 to-[#5A4B81]/10 rounded-2xl p-5 border border-[#C05775]/10 group-hover:scale-110 transition-transform duration-300 relative z-10">
                    {React.cloneElement(value.icon, { className: "w-8 h-8 text-[#C05775] stroke-[1.5]" })}
                  </div>
                  <div className="text-block">
                    <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-[#C05775] transition-colors relative z-10" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {value.title}
                    </h3>
                    <p className="text-[#E5E7EB] opacity-70 leading-loose font-light relative z-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="bg-gradient-to-b from-[#131418] to-[#0E0F12] section-spacing relative">
           <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-[#5A4B81]/20 to-transparent" />

          <div className="layout-container relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#1A1C20]/50 rounded-[2.5rem] p-14 shadow-2xl border border-white/5 relative overflow-hidden w-full"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-[#C05775] to-[#5A4B81] opacity-[0.03] pointer-events-none" />

              <h2 className="text-3xl font-bold text-white mb-10 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Współpraca, nie usługa
              </h2>
              <div className="text-block mx-auto text-lg text-[#E5E7EB] font-light opacity-90 leading-loose text-center relative z-10">
                <p>
                  Traktujemy każdy jeden powierzony projekt jako wartościowe wspólne przedsięwzięcie.
                </p>
                <p>
                  Jesteśmy tu, by doradzać, śmiało kwestionować dotychczasowe rozwiązania i wspólnie szukać najlepszej drogi dla rozwoju Twojego biznesu.
                </p>
                <p>
                  Niezależnie od finalnej skali, dostaniesz od nas pełne wsparcie technologiczne i strategiczne.
                </p>
                <p>
                  Oferujemy spokój ducha, którego niezaprzeczalnie potrzebujesz, by w pełni skupić się na tym, co Ty robisz najlepiej.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="layout-container section-spacing bg-[#0E0F12] relative overflow-hidden">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-[#C05775]/20 to-transparent" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full bg-[#131418] rounded-[3rem] p-16 text-center shadow-[0_20px_80px_-20px_rgba(90,75,129,0.3)] relative overflow-hidden border border-[#5A4B81]/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#C05775] via-[#5A4B81] to-[#1A1C20] opacity-[0.08] pointer-events-none" />
            
            <div className="relative z-10 text-block mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Masz pomysł?
              </h2>
              <p className="text-[#E5E7EB] text-xl mb-6 opacity-95 font-light leading-loose" style={{ fontFamily: 'Inter, sans-serif' }}>
                Napisz do nas bez zobowiązań.
              </p>
              <p className="text-[#E5E7EB] text-xl mb-12 opacity-95 font-light leading-loose" style={{ fontFamily: 'Inter, sans-serif' }}>
                Porozmawiajmy spokojnie o tym, co możemy dla Ciebie razem zbudować.
              </p>
              <Button
                onClick={() => navigate('/contact')}
                variant="primary-cta"
                size="xl"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Porozmawiajmy o Twojej stronie
              </Button>
            </div>
          </motion.div>
        </section>

         <footer className="bg-[#0E0F12] pt-20 pb-10 relative overflow-hidden">
            <div className="layout-container text-center relative z-10">
              <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>Swan Web Studio</h3>
              <div className="text-[#E5E7EB] opacity-50 text-sm font-light">
                © {new Date().getFullYear()} Swan Web Studio.
              </div>
            </div>
         </footer>
      </main>
    </>
  );
};

export default About;