export interface ICTAButton extends React.ComponentPropsWithoutRef<'button'> {
  text: string;
}

const CTAButton: React.FC<ICTAButton> = ({
  text,
  className,
  ...buttonProps
}) => {
  return (
    <button
      className={`xs:block md:hidden bg-[#3FB34A] hover:bg-[#106838] text-white font-bold py-5 w-full transition-colors duration-300 ${className}`}
      {...buttonProps}
    >
      {text}
    </button>
  );
};

export default CTAButton;
