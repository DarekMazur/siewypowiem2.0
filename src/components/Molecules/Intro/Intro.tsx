import Image from 'next/image';
import icon from '../../../assets/icons/logo.svg';
import { StyledIntro } from './Intro.styles';

const Intro = () => {
  return (
    <StyledIntro>
      <div>
        <span>SIĘ</span>
        <Image priority src={icon} alt='' />
      </div>
      <div>
        <span>WYPOWIEM</span>
      </div>
    </StyledIntro>
  );
};

export default Intro;
