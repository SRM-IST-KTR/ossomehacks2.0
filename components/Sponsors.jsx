import { useEffect, useState } from "react";
import Image from "next/image";

const SponsorCard = ({ logo, alt, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="relative bg-[#AA2490] w-[150px] h-[150px] md:w-[200px] md:h-[140px] lg:w-[250px] lg:h-[160px] rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-500 hover:bg-[#FF36DD] hover:rotate-2 hover:scale-110 group overflow-hidden before:absolute before:inset-0 before:z-0 before:bg-gradient-to-r before:from-purple-500 before:via-pink-500 before:to-yellow-500 before:opacity-0 before:blur-xl before:transition-all before:duration-700 hover:before:opacity-70 hover:shadow-xl hover:shadow-pink-500/50 cursor-pointer"
  >
    <div className="absolute inset-0 bg-[#AA2490] rounded-xl md:rounded-2xl z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-pulse"></div>
    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 rounded-xl md:rounded-2xl blur opacity-0 group-hover:opacity-70 transition-all duration-1000 group-hover:duration-500 animate-gradient-xy z-0"></div>
    <div className="absolute inset-0.5 bg-[#AA2490] rounded-lg md:rounded-xl z-10 transition-colors duration-500 group-hover:bg-[#AA2490]/90"></div>
    <div className="relative z-20 flex items-center justify-center w-full h-full">
      <Image
        src={logo}
        alt={alt}
        width={100}
        height={100}
        className="object-contain md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 select-none"
      />
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
        <span className="text-white text-xs font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
          VISIT SPONSOR
        </span>
      </div>
    </div>
  </a>
);

const SectionTitle = ({ title }) => (
  <p className="text-center lg:text-[24px] md:text-[20px] text-[18px] font-semibold pt-8 text-white">
    {title.toUpperCase()} SPONSORS
  </p>
);

export default function Sponsors() {
  const [sponsors, setSponsors] = useState({
    platinum: [],
    gold: [],
    silver: [],
    bronze: [],
  });

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await fetch("https://octacore.githubsrmist.in/api/sponsors");
        const data = await response.json();
        if (data.success) {
          const organizedSponsors = {
            platinum: [],
            gold: [],
            silver: [],
            bronze: [],
          };

          data.data.forEach((sponsor) => {
            if (organizedSponsors[sponsor.tier]) {
              organizedSponsors[sponsor.tier].push(sponsor);
            }
          });

          setSponsors(organizedSponsors);
        }
      } catch (error) {
        console.error("Failed to fetch sponsors:", error);
      }
    };

    fetchSponsors();
  }, []);

  const renderSponsorCards = (tier) => (
    sponsors[tier].map((sponsor) => (
      <SponsorCard key={sponsor._id} logo={sponsor.logo} alt={sponsor.alt} link={sponsor.link} />
    ))
  );

  return (
    <div
      id="sponsors"
      className="bg-[#1E002E] w-full px-4 py-10">
      <div className='flex justify-center relative text-[60px] sm:text-[120px] md:text-[180px] xl:text-[280px] tracking-tight font-extrabold text-[#6B5E77] mb-[80px]'>
        PARTNERS
        <div className='flex justify-center absolute text-[30px] sm:text-[60px] md:text-[100px] xl:text-[140px] bottom-0 font-extrabold text-[#FCF961]'>PARTNERS
        </div>
      </div>

      <div className="p-10">
        {/* Platinum sponsors */}
        <SectionTitle title="platinum" />
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 pt-4">
          {renderSponsorCards("platinum")}
        </div>

        {/* Gold sponsors */}
        <SectionTitle title="gold" />
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 pt-4">
          {renderSponsorCards("gold")}
        </div>

        {/* Silver sponsors */}
        <SectionTitle title="silver" />
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 pt-4">
          {renderSponsorCards("silver")}
        </div>

        {/* Bronze sponsors */}
        <SectionTitle title="bronze" />
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 pt-4">
          {renderSponsorCards("bronze")}
        </div>
      </div>
    </div>
  );
}