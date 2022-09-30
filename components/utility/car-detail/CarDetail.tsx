import Image, { ImageProps } from 'next/image';
import { FaEnvelope } from 'react-icons/fa';

export interface ICarDetail extends ImageProps {
  carSpecs: {
    item_number: string;
    vin: string;
    name: string;
    year: number;
    startingPrice: number;
    endingPrice: number;
    mileage: number;
    views: number;
    saves: number;
    shares: number;
  };
  src: string;
}

const CarDetail: React.FC<ICarDetail> = ({
  carSpecs: {
    name,
    item_number,
    vin,
    year,
    startingPrice,
    endingPrice,
    mileage,
    views,
    saves,
    shares,
  },
  src,
  alt,
}) => {
  return (
    <div className="flex xs:flex-col md:flex-row w-full h-full bg-white xs:mb-3 md:mb-0">
      <div className="md:w-3/4 xs:w-full xs:h-64 md:h-[45rem] relative">
        <Image src={src} alt={alt} layout="fill" />
      </div>
      <div className="xs:w-full md:w-1/4 md:mt-12 xs:mt-8 xs:pl-5 md:pl-0 md:ml-10">
        <h1 className="md:mb-8 xs:mb-4 text-4xl font-bold text-[#343434]">
          {name}
        </h1>
        <div className="xs:columns-2 md:columns-1">
          <div>
            <h4 className="text-base text-[#9B9B9B]">Year</h4>
            <p className="mb-2 text-2xl font-bold text-[#343434]">{year}</p>
            <h4 className="text-base text-[#9B9B9B]">Price Range</h4>
            <p className="mb-2 text-2xl font-bold text-[#343434]">
              ${startingPrice} - ${endingPrice}
            </p>
            <h4 className="text-base text-[#9B9B9B]">Mileage</h4>
            <p className="mb-2 text-2xl font-bold text-[#343434]">
              {mileage} miles
            </p>
          </div>
          <div className="xs:pt-6 md:pt-0">
            <h4 className="mb-2 text-base text-[#9B9B9B]">
              Item number: {item_number}
            </h4>
            <h4 className="xs:mb-4 md:mb-8 text-base text-[#9B9B9B]">
              VIN:
              <span className="xs:text-sm md:text-base">{vin}</span>
            </h4>
            <h4 className="flex items-center xs:mb-4 md:mb-8 text-base text-[#343434]">
              Share this car <FaEnvelope className="ml-2" />
            </h4>
            <div className="flex md:mb-8 xs:mb-20">
              <div className="flex items-center flex-col mr-8">
                <h4 className="text-base text-[#9B9B9B]">Views</h4>
                <p className="text-[#3FB34A] font-bold text-2xl">{views}</p>
              </div>
              <div className="xs:hidden md:block flex items-center flex-col mr-8">
                <h4 className="text-base text-[#9B9B9B]">Saves</h4>
                <p className="text-[#3FB34A] font-bold text-2xl">{saves}</p>
              </div>
              <div className="xs:hidden md:block flex items-center flex-col mr-8">
                <h4 className="text-base text-[#9B9B9B]">Shares</h4>
                <p className="text-[#3FB34A] font-bold text-2xl">{shares}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
