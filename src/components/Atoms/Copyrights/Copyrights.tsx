import { convertToRoman } from '@/utils/methods/convertToRoman';
import { getYear } from '@/utils/methods/getYear';
import { SytledCopyrights } from './Copyrights.styles';

const Copyrights = () => {
  return (
    <SytledCopyrights>
      Jillian &copy; {convertToRoman(getYear())}
    </SytledCopyrights>
  );
};

export default Copyrights;
