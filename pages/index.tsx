import Head from 'next/head';
import { CTAButton } from '../components/buttons/call-to-action';
import { CarDetailCard } from '../components/cards/car-detail-card';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { CarDetail } from '../components/utility/car-detail';
import { Photos } from '../components/utility/photos';
import { NextPageWithLayout } from './pages';

const specs = [
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
];

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Car Detail</title>
        <meta name="description" content="Car Detail" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CarDetail src={'/car.jpg'} />
      <CTAButton text="CALL US" />
      <Photos />
      <div className="mb-10 xs:mx-0 md:mx-8 xs:flex-col md:flex-row flex justify-around gap-2">
        <CarDetailCard headerText="EXTERIOR" specs={specs} />
        <CarDetailCard headerText="PERFORMANCE" specs={specs} />
      </div>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
