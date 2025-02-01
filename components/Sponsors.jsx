import { useEffect, useState } from "react";
import Image from "next/image";

const SponsorCard = ({ logo, alt }) => (
  <div className="bg-[#AA2490] w-[150px] h-[150px] md:w-[200px] md:h-[140px] lg:w-[250px] lg:h-[160px] rounded-xl md:rounded-2xl flex items-center justify-center">
    <Image
      src={logo}
      alt={alt}
      width={100}
      height={100}
      className="object-contain md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]"
    />
  </div>
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
        const response = await fetch("/api/sponsors");
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
      <SponsorCard key={sponsor._id} logo={sponsor.logo} alt={sponsor.alt} />
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