import { ICarDetailCard } from './CarDetailCard';

const base: ICarDetailCard = {
  headerText: 'EXTERIOR',
  specs: [
    {
      name: 'Cylinders',
      value: 'L4',
    },
    {
      name: 'City MPG',
      value: '20 MPG',
    },
    {
      name: 'Highway MPG',
      value: '25 MPG',
    },
    {
      name: 'Engine',
      value: '1.3',
    },
  ],
};

export const mockCarDetailCardProps = {
  base,
};
