import { IInstaType } from '@/mocks/types';
import Image from 'next/image';

const InstaWrapper = ({ instagram }: { instagram: Array<IInstaType> }) => {
  return (
    <section>
      {instagram.slice(0, 3).map((instaImg) => (
        <Image
          key={instaImg.id}
          src={instaImg.media_url}
          alt={`Insta photo ${instaImg.id}`}
          width={250}
          height={0}
          loading='lazy'
          style={{ width: '250px', height: 'auto' }}
        />
      ))}
    </section>
  );
};

export default InstaWrapper;
