import { CarSpecs } from './types';

export interface ICarDetailCard {
  headerText: string;
  specs: CarSpecs;
}

const CarDetailCard: React.FC<ICarDetailCard> = ({
  headerText,
  specs: { cylinders, cityMPG, highwayMPG, engine },
}) => {
  return (
    <div className="xs:mt-4 md:mt-0 w-full max-w-3xl bg-white rounded-sm border shadow-md xs:p-10 sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-2">
        <h5 className="text-lg font-bold leading-none text-[#9B9B9B] dark:text-white">
          {headerText}
        </h5>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#343434] truncate dark:text-white">
                  Cylinders
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-[#343434] dark:text-white">
                {cylinders}
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#343434] truncate dark:text-white">
                  City MPG
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-[#343434] dark:text-white">
                {cityMPG}
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#343434] truncate dark:text-white">
                  Highway MPG
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-[#343434] dark:text-white">
                {highwayMPG}
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#343434] truncate dark:text-white">
                  Engine
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-[#343434] dark:text-white">
                {engine}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CarDetailCard;
