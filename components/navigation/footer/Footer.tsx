import styles from './Footer.module.css';

export interface IFooter {
  sampleTextProp: string;
}

const Footer: React.FC<IFooter> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default Footer;
