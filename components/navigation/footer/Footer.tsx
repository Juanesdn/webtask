export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer
      className={`w-full p-5 bg-black text-white flex justify-center items-center ${className}`}
      {...footerProps}
    >
      <ul className="xs:w-full  md:w-2/4 list-none flex justify-between">
        <li>About Us</li>
        <li>/</li>
        <li>Terms</li>
        <li>/</li>
        <li>Privacy Policy</li>
      </ul>
    </footer>
  );
};

export default Footer;
