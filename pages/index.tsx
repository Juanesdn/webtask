import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { CTAButton } from '../components/buttons/call-to-action';
import { CarDetailCard } from '../components/cards/car-detail-card';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { CarDetail } from '../components/utility/car-detail';
import { Photos } from '../components/utility/photos';
import { ICarData } from '../lib/types';
import { NextPageWithLayout } from './pages';

export interface ICarResults {
  carResults: ICarData;
}

export const getServerSideProps: GetServerSideProps<ICarResults> = async () => {
  const response = await fetch('http://localhost:3000/api/car', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });

  const carResults: ICarData[] = await response.json();

  return {
    props: {
      carResults: carResults[0],
    },
  };
};

const Home: NextPageWithLayout<ICarResults> = ({
  carResults: { carSpecs, photos, exterior, performance },
}) => {
  const [currPhoto, setCurrPhoto] = useState<string>(photos[0]);

  return (
    <>
      <Head>
        <title>Car Detail</title>
        <meta name="description" content="Car Detail" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {carSpecs ? (
        <>
          <CarDetail src={currPhoto} carSpecs={carSpecs} photos={photos} />
          <CTAButton text="CALL US" />
          <Photos photos={photos} setPhoto={setCurrPhoto} />
          <div className="mb-10 xs:mx-0 md:mx-8 xs:flex-col md:flex-row flex justify-around gap-2">
            <CarDetailCard headerText="EXTERIOR" specs={exterior} />
            <CarDetailCard headerText="PERFORMANCE" specs={performance} />
          </div>
        </>
      ) : (
        <p>No Car Found</p>
      )}
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
