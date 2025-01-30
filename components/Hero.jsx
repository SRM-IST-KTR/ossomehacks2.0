import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  const devfolioButtonRef = useRef(null);

  useEffect(() => {
    const particlesScript = document.createElement('script');
    particlesScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    particlesScript.async = true;
    document.body.appendChild(particlesScript);

    particlesScript.onload = () => {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 160, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 1,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0 }
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false }
          },
          line_linked: { enable: false },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            out_mode: "out"
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "bubble" },
            onclick: { enable: true, mode: "repulse" }
          },
          modes: {
            bubble: { distance: 250, size: 0, duration: 2 },
            repulse: { distance: 400, duration: 0.4 }
          }
        },
        retina_detect: true
      });
    };

    const devfolioScript = document.createElement('script');
    devfolioScript.src = 'https://apply.devfolio.co/v2/sdk.js';
    devfolioScript.async = true;
    devfolioScript.defer = true;
    document.body.appendChild(devfolioScript);

    devfolioScript.onload = () => {
      if (window.Devfolio) {
        window.Devfolio.createButton({
          container: '#devfolio-hidden-container',
          buttonText: 'Apply with Devfolio',
          buttonColor: '#000000',
          buttonTextColor: '#ffffff',
        });
      }
    };

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 25);

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      });
    };

    const interval = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(interval);
      document.body.removeChild(particlesScript);
      document.body.removeChild(devfolioScript);
    };
  }, []);

  const handleRegisterClick = () => {
    if (devfolioButtonRef.current) {
      devfolioButtonRef.current.click();
    }
  };

  return (
    <div className="relative min-h-screen bg-[#1E002E] px-4 md:px-0">
      <div id="particles-js" className="absolute inset-0 pointer-events-none" />

      <div 
        id="devfolio-hidden-container" 
        ref={devfolioButtonRef}
        className="hidden"
        data-hackathon-slug="YOUR-HACKATHON-SLUG"
      />

      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap" rel="stylesheet" />
      </Head>

      <div className="relative z-10">
        <div className="relative w-full overflow-hidden">
          <div className="flex whitespace-nowrap animate-infinite-scroll font-sans text-[16px] font-extrabold text-[#FCF961]">
            {Array(7).fill(
              <div key={Math.random()} className="flex shrink-0">
                REGISTRATION IS NOW OPEN · REGISTRATION IS NOW OPEN · REGISTRATION IS NOW OPEN ·
              </div>
            )}
          </div>
        </div>

        <div className="pt-[212px] flex justify-center px-4 md:px-0">
          <Image 
            src="/hero/ossome-hacks-heading.svg" 
            width={1120} 
            height={168} 
            alt="Heading" 
            priority
          />
        </div>

        <div className="pt-[30px] flex justify-center ml-[-90px] mt-[-35px] px-4 md:px-0">
          <Image 
            src="/hero/s1.svg" 
            width={1440} 
            height={32} 
            alt="Subheading" 
            className="max-w-full"
          />
        </div>

        <div className="flex justify-center pt-[70px] gap-[20px] flex-wrap sm:flex-nowrap px-4 md:px-0">
          <button 
            onClick={handleRegisterClick}
            className="relative w-[250px] h-[50px] cursor-pointer border-none bg-transparent hover:opacity-75 transition-opacity"
          >
            <Image
              src="/hero/b1.svg"
              layout="fill"
              objectFit="contain"
              alt="Register"
              className="pointer-events-none"
            />
          </button>

          <button className="border-4 border-[#FCF961] text-white font-semibold w-[250px] h-[50px] rounded-[10px] hover:bg-[#FCF961] hover:text-black flex items-center justify-center transition duration-300">
            <div className="mr-2 mt-0.5">
              <Image 
                src="/hero/discord_icon.svg" 
                width={18} 
                height={15} 
                alt="Discord Icon" 
              />
            </div>
            Discord Server
          </button>
        </div>

        <div className="flex justify-center pt-[68px] space-x-[20px] px-4 md:px-0">
          {[
            { value: timeLeft.days, label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Minutes' },
            { value: timeLeft.seconds, label: 'Seconds' }
          ].map((item, index) => (
            <div key={index} className="text-center text-white font-semibold text-3xl font-sans">
              <div style={{ fontSize: '1.5rem' }}>
                <span className="font-inter">{item.value}</span>
              </div>
              <div style={{ marginTop: '5px' }} className="text-sm uppercase tracking-widest font-sans">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        #devfolio-hidden-container {
          all: initial !important;
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        
        #devfolio-hidden-container * {
          all: unset !important;
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        
        #devfolio-hidden-container iframe {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `}</style>
    </div>
  );
}
