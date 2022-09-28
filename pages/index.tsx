import Head from 'next/head';
import PrimaryLayout from '../components/layouts/base/PrimaryLayout';
import { NextPageWithLayout } from './pages';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Car Detail</title>
        <meta name="description" content="Car Detail" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
