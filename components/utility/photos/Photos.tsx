import Image from 'next/image';

export interface IPhotos {}

const Photos: React.FC<IPhotos> = () => {
  return (
    <div className="lg:columns-6 md:columns-3 xs:hidden md:block gap-1 mt-8 mb-6">
      <Image
        width={150}
        height={170}
        src={'/car.jpg'}
        alt={''}
        layout="responsive"
      />
      <Image
        width={150}
        height={170}
        src={'/car.jpg'}
        alt={''}
        layout="responsive"
      />
      <Image
        width={150}
        height={170}
        src={'/car.jpg'}
        alt={''}
        layout="responsive"
      />
      <Image
        width={150}
        height={170}
        src={'/car.jpg'}
        alt={''}
        layout="responsive"
      />
      <Image
        width={150}
        height={170}
        src={'/car.jpg'}
        alt={''}
        layout="responsive"
      />
      <Image
        width={150}
        height={170}
        src={'/car.jpg'}
        alt={''}
        layout="responsive"
      />
    </div>
  );
};

export default Photos;
