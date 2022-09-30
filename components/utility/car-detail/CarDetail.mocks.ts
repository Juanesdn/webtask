import { ICarDetail } from './CarDetail';

const base: ICarDetail = {
  carSpecs: {
    item_number: 'string',
    vin: 'string',
    name: 'string',
    year: 15,
    startingPrice: 15,
    endingPrice: 15,
    mileage: 15,
    views: 15,
    saves: 15,
    shares: 15,
  },
  src: 'string',
  photos: [''],
};

export const mockCarDetailProps = {
  base,
};
