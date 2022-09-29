import Head from 'next/head';
import { Footer } from '../../navigation/footer';
import { Header } from '../../navigation/header';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Car Detail</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center">
        <Header />
        <main className="w-full">{children}</main>
        <div className="m-auto"></div>
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
