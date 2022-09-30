import Image from 'next/image';

export interface IPhotos {
  photos: string[];
  setPhoto: Function;
}

const Photos: React.FC<IPhotos> = ({ photos, setPhoto }) => {
  return (
    <div className="lg:columns-6 md:columns-3 xs:hidden md:block gap-1 mt-8 mb-6">
      {photos.map((photo, i) => (
        <Image
          key={i}
          width={150}
          height={170}
          src={photo}
          alt={'Car photo'}
          layout="responsive"
          className="hover:cursor-pointer"
          onClick={() => setPhoto(photo)}
        />
      ))}
    </div>
  );
};

export default Photos;
