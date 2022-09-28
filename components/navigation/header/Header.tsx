import Link from 'next/link';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaSearch } from 'react-icons/fa';
import styles from './Header.module.css';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const BaseTemplate: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      className={`w-full flex flex-row justify-between h-14 bg-black overflow-hidden ${className}`}
      {...headerProps}
    >
      <div className="space-x-5 m-5"></div>
      <div className="flex ">
        <div className={`h-full text-white pt-6 pb-4 px-6 `}>
          <Link href="/">
            <div>
              <FaSearch />
            </div>
          </Link>
        </div>
        <div
          className={`h-full bg-orange-500 pt-6 pb-4 px-6 text-white hover:bg-orange-400 hover:cursor-pointer ${styles.nav_item}`}
        >
          <Link href="/">
            <div className={`${styles.nav_item__content}`}>
              <FaMapMarkerAlt />
            </div>
          </Link>
        </div>
        <div className="bg-orange-500">
          <div
            className={`h-full bg-orange-500 pt-6 pb-4 px-6 text-white hover:bg-orange-400 hover:cursor-pointer ${styles.nav_item}`}
          >
            <Link href="/">
              <div className={`${styles.nav_item__content}`}>
                <FaPhoneAlt />
              </div>
            </Link>
          </div>
        </div>

        <div className="bg-orange-500">
          <div
            className={`h-full bg-orange-500 pt-6 pb-4 px-6 text-white hover:bg-orange-400 hover:cursor-pointer ${styles.nav_item}`}
          >
            <Link href="/">
              <div className={`${styles.nav_item__content}`}>
                <FaClock />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BaseTemplate;
