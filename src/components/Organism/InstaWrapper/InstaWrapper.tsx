import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { IInstaTypes } from '@/utils/data/types';
import { StyledInstaWrapper } from './InstaWrapper.styles';

const InstaWrapper = ({ instagram }: { instagram: Array<IInstaTypes> }) => {
  const getRandom = (images: Array<IInstaTypes>) => {
    const randomizeImages: Array<IInstaTypes> = [];
    const indexList: Array<number> = [];

    for (let i = 0; indexList.length < 3; i += 1) {
      const randomIndex = Math.floor(Math.random() * (images.length - 1));
      if (!indexList.find((index) => index === randomIndex)) {
        if (images[randomIndex].media_type !== 'VIDEO') {
          indexList.push(randomIndex);
          randomizeImages.push(images[randomIndex]);
        }
      }
    }

    return randomizeImages;
  };

  return (
    <StyledInstaWrapper>
      <FontAwesomeIcon icon={['fab', 'instagram']} />
      {getRandom(instagram).map((instaImg) => (
        <div key={instaImg.id}>
          <Link href={instaImg.permalink} target='_blank' rel='norefferer'>
            <Image
              src={instaImg.media_url}
              alt={`Insta photo ${instaImg.id}`}
              loading='lazy'
              fill
            />
          </Link>
        </div>
      ))}
    </StyledInstaWrapper>
  );
};

export default InstaWrapper;
