import Image from "next/image";
import prjred from "@/public/prjred.png";
import tlf from "@/public/tlf.png"
import xyz from "@/public/xyz.png"
import swoc from "@/public/swoc.png"



export default function Sponsors() {
  // Function to generate cards
  const renderCards = () => {
    const cardData = [tlf, tlf, tlf]; 
    return cardData.map((image, index) => (
      <div
        key={index}
        className="bg-[#AA2490] w-[100px] h-[70px] lg:w-[245px] lg:h-[140px] md:w-[185px] md:h-[120px] rounded-2xl flex items-center justify-center"
      >
        <Image
          src={image} 
          className="w-[80px] lg:w-[207px] md:w-[147px]  object-contain"
          alt={`Card ${index + 1}`}
        />
      </div>
    ));
  };


  const renderCards2 = () => {
    const cardData = [xyz, xyz, xyz, xyz, xyz]; 
    return cardData.map((image, index) => (
      <div
        key={index}
        className="bg-[#AA2490] w-[70px] h-[50px] lg:w-[245px] lg:h-[140px] md:w-[140px] md:h-[110px] rounded-xl md:rounded-2xl lg:rounded-2xl flex items-center justify-center"
      >
        <Image
          src={image}
          className="lg:w-[133px] md:w-[90px] w-[40px] object-contain"
          alt={`Card ${index + 1}`}
        />
      </div>
    ));
  };

  const renderCards3 = () => {
    const cardData = [swoc, swoc, swoc, swoc]; 
    return cardData.map((image, index) => (
      <div
        key={index}
        className="bg-[#AA2490] w-[60px] h-[40px] lg:w-[170px] lg:h-[95px] md:w-[130px] md:h-[90px]   rounded-xl md:rounded-2xl lg:rounded-2xl flex items-center justify-center"
      >
        <Image
          src={image}
          className="lg:w-[207px] md:w-[110px] w-[50px] mt-1 md:mt-2 lg:mt-2 object-contain"
          alt={`Card ${index + 1}`}
        />
      </div>
    ));
  };



  const renderCards4 = () => {
    const cardData = [swoc, swoc]; 
    return cardData.map((image, index) => (
      <div
        key={index}
        className="bg-[#AA2490] w-[60px] h-[40px] lg:w-[170px] lg:h-[95px] md:w-[130px]  md:h-[90px] rounded-xl md:rounded-2xl lg:rounded-2xl flex items-center justify-center"
      >
        <Image
          src={image}
          className="lg:w-[207px] md:w-[110px] w-[50px] mt-1  md:mt-2 lg:mt-2 object-contain"
          alt={`Card ${index + 1}`}
        />
      </div>
    ));
  };

  return (
    <>
      <div className="bg-[#1E002E]  w-full">
        <div>
          <p className="text-[#6B5E77] text-center lg:text-[280px] md:text-[170px] text-[85px] -ml-2 font-raleway font-bold -tracking-widest">
            PARTNERS
          </p>
          <div className="flex items-start justify-center">
            <p className="text-[#FCF961] text-center lg:text-[140px] md:text-[82px] text-[42px] font-raleway font-bold -tracking-widest lg:ml-5 lg:-mt-[15%] -mt-[16%]">
              PARTNERS
            </p>
          </div>
        </div>

        <div>
          <p className="text-center lg:text-[24px] font-semibold text-white">
            PLATINUM SPONSORS
          </p>

         
          <div className="flex items-center justify-center pt-7">
            <div className="bg-[#AA2490] w-[140px] h-[90px] md:w-[246px] md:h-[146px] lg:w-[316px] lg:h-[176px] rounded-2xl flex items-center justify-center">
              <Image
                src={prjred}
                className=" w-[110px] md:w-[200px] lg:w-[280px]  object-contain"
              />
            </div>
          </div>

          <p className="text-center lg:text-[24px] font-semibold pt-8 text-white">
            GOLD SPONSORS
          </p>
          
          <div className="flex items-center justify-center gap-2 md:gap-5  lg:gap-6 pt-4">
            {renderCards()}
          </div>

          <p className="text-center lg:text-[24px] font-semibold pt-8 text-white">
            SILVER SPONSORS
          </p>

          <div className="flex items-center justify-center gap-1 md:gap-2 lg:gap-6 pt-4">
            {renderCards2()}
          </div>


          <p className="text-center lg:text-[24px] font-semibold pt-8 text-white">
            BRONZE SPONSORS
          </p>

          <div className="flex items-center justify-center gap-2 md:gap-5 lg:gap-6 pt-4">
            {renderCards3()}
          </div>


          <div className="flex items-center justify-center gap-2 md:gap-5 lg:gap-6 pt-5">
            {renderCards3()}
          </div>
          

          <div className="flex items-center justify-center gap-2 md:gap-5 lg:gap-6 pt-5">
            {renderCards4()}
          </div>
        </div>
      </div>
    </>
  );
}
