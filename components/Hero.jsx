import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: { value: 160, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: 1,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0 },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false },
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: true, mode: "repulse" },
      },
      modes: {
        bubble: { distance: 250, size: 0, duration: 2 },
        repulse: { distance: 400, duration: 0.4 },
      },
    },
    retina_detect: true,
  };

  useEffect(() => {
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
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#1E002E]">
      {/* Particles Background */}
      <div className="absolute inset-0">
        <Particles id="particles-js" init={particlesInit} options={particlesConfig} />
      </div>

      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap" rel="stylesheet" />
      </Head>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Scrolling Registration Text */}
        <div className="relative w-full overflow-hidden">
          <div className="flex whitespace-nowrap animate-infinite-scroll font-sans text-[16px] font-extrabold text-[#FCF961]">
            <div className="flex shrink-0">
              REGISTRATION IS NOW OPEN · REGISTRATION IS NOW OPEN · REGISTRATION IS NOW OPEN ·
            </div>
            <div className="flex shrink-0">
              REGISTRATION IS NOW OPEN · REGISTRATION IS NOW OPEN · REGISTRATION IS NOW OPEN ·
            </div>
            <div className="flex shrink-0">
              REGISTRATION IS NOW OPEN · REGISTRATION IS NOW OPEN · REGISTRATION IS NOW OPEN ·
            </div>
            <div className="flex shrink-0">
              REGISTRATION IS NOW OPEN · REGISTRATION IS NOW OPEN · REGISTRATION IS NOW OPEN ·
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="pt-[212px] flex justify-center">
          <Image src="/hero/ossome-hacks-heading.svg" width={1120} height={168} alt="Heading" />
        </div>

        {/* Subheading */}
        <div className="pt-[30px] flex justify-center ml-[-90px] mt-[-35px]">
          <Image src="/hero/s1.svg" width={1440} height={32} alt="Subheading" />
        </div>

        {/* Buttons */}
        <div className="flex justify-center pt-[70px] gap-[20px] flex-wrap sm:flex-nowrap">
          <button className="text-white font-semibold w-[250px] sm:w-[250px] h-[50px] rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-200">
            <Image src="/hero/b1.svg" layout="intrinsic" width={250} height={50} alt="Register" />
          </button>

          <button className="border-4 border-[#FCF961] text-white font-semibold w-[250px] sm:w-[250px] h-[50px] rounded-[10px] hover:bg-[#FCF961] hover:text-white text-[16px] font-Uni Sans Heavy flex items-center justify-center">
            <div style={{ marginRight: "8px", marginTop: "2.7px" }}>
              <Image src="/hero/discord_icon.svg" width={18} height={15} alt="Discord Icon" />
            </div>
            Discord Server
          </button>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center pt-[68px] space-x-[20px]">
          <div className="text-center text-white font-semibold text-3xl font-sans">
            <div style={{ fontSize: '1.5rem' }}>
              <span className="font-inter">{timeLeft.days}</span>
            </div>
            <div style={{ marginTop: '5px' }} className="text-sm uppercase tracking-widest font-sans">Days</div>
          </div>
          <div className="text-center text-white font-semibold text-3xl font-sans">
            <div style={{ fontSize: '1.5rem' }}>
              <span className="font-inter">{timeLeft.hours}</span>
            </div>
            <div style={{ marginTop: '5px' }} className="text-sm uppercase tracking-widest font-sans">Hours</div>
          </div>
          <div className="text-center text-white font-semibold text-3xl font-sans">
            <div style={{ fontSize: '1.5rem' }}>
              <span className="font-inter">{timeLeft.minutes}</span>
            </div>
            <div style={{ marginTop: '5px' }} className="text-sm uppercase tracking-widest font-sans">Minutes</div>
          </div>
          <div className="text-center text-white font-semibold text-3xl font-sans">
            <div style={{ fontSize: '1.5rem' }}>
              <span className="font-inter">{timeLeft.seconds}</span>
            </div>
            <div style={{ marginTop: '5px' }} className="text-sm uppercase tracking-widest font-sans">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
}
