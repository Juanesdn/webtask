import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';
import { ICarData } from '../../lib/types';
import Home from '../../pages';

describe('Home page', () => {
  const TEST_CAR: ICarData = {
    photos: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=721&q=80',
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    ],
    exterior: {
      cylinders: 'L4',
      cityMPG: 20,
      highwayMPG: 25,
      engine: 1.3,
    },
    performance: {
      cylinders: 'L4',
      cityMPG: 20,
      highwayMPG: 25,
      engine: 1.3,
    },
    carSpecs: {
      item_number: '#1395P',
      vin: '3GNDA13D96S631406',
      name: 'Ford Focus',
      year: 2012,
      startingPrice: 8500,
      endingPrice: 9000,
      mileage: 2000000,
      saves: 20,
      shares: 15,
      views: 37,
    },
  };

  it('Should render car details', async () => {
    const { getByText } = render(<Home carResults={TEST_CAR} />);

    const carName = getByText(TEST_CAR.carSpecs.name);
    expect(carName.textContent).toContain(TEST_CAR.carSpecs.name);

    const carYear = getByText(TEST_CAR.carSpecs.year);
    expect(carYear.textContent).toContain(TEST_CAR.carSpecs.year.toString());

    const carNumber = getByText(TEST_CAR.carSpecs.item_number, {
      exact: false,
    });
    expect(carNumber.textContent).toContain(TEST_CAR.carSpecs.item_number);

    const carVIN = getByText(TEST_CAR.carSpecs.vin);
    expect(carVIN.textContent).toContain(TEST_CAR.carSpecs.vin);
  });
});
