import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.particlesJS('particles-js', {
        "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
      });
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
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#1E002E] px-4 md:px-0">
      <div id="particles-js" className="absolute inset-0" />

      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap" rel="stylesheet" />
      </Head>

      <div className="relative z-10">
        <div className="relative w-full overflow-hidden">
          <div className="flex whitespace-nowrap animate-infinite-scroll font-sans text-[16px] font-extrabold text-[#FCF961]">
            {Array(7).fill(
              <div className="flex shrink-0">
                REGISTRATION IS NOW OPEN · REGISTRATION IS NOW OPEN · REGISTRATION IS NOW OPEN ·
              </div>
            )}
          </div>
        </div>

        <div className="pt-[212px] flex justify-center px-4 md:px-0">
          <Image src="/hero/ossome-hacks-heading.svg" width={1120} height={168} alt="Heading" />
        </div>

        <div className="pt-[30px] flex justify-center ml-[-90px] mt-[-35px] px-4 md:px-0">
          <Image src="/hero/s1.svg" width={1440} height={32} alt="Subheading" />
        </div>

        <div className="flex justify-center pt-[70px] gap-[20px] flex-wrap sm:flex-nowrap px-4 md:px-0">
          <button className="text-white font-semibold w-[250px] sm:w-[250px] h-[50px] rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-200">
            <Image src="/hero/b1.svg" layout="intrinsic" width={250} height={50} alt="Register" />
          </button>

          <button className="border-4 border-[#FCF961] text-white font-semibold w-[250px] sm:w-[250px] h-[50px] rounded-[10px] hover:bg-[#FCF961] hover:text-black text-[16px] font-Uni Sans Heavy flex items-center justify-center transition duration-300">
            <div style={{ marginRight: "8px", marginTop: "2.7px" }}>
              <Image src="/hero/discord_icon.svg" width={18} height={15} alt="Discord Icon" />
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
              <div style={{ marginTop: '5px' }} className="text-sm uppercase tracking-widest font-sans">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
