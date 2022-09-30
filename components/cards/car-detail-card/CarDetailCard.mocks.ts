import { ICarDetailCard } from './CarDetailCard';

const base: ICarDetailCard = {
  headerText: 'EXTERIOR',
  specs: { cylinders: 'L4', cityMPG: 23, highwayMPG: 25, engine: 1.3 },
};

export const mockCarDetailCardProps = {
  base,
};
