import Head from 'next/head';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { CarDetail } from '../components/utility/car-detail';
import { Photos } from '../components/utility/photos';
import { NextPageWithLayout } from './pages';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Car Detail</title>
        <meta name="description" content="Car Detail" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CarDetail src={'/car.jpg'} />
      <Photos />
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
