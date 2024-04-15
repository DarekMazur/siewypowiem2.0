import { convertToRoman } from '@/utils/convertToRoman';
import { getYear } from '@/utils/getYear';
import { SytledCopyrights } from './Copyrights.styles';

const Copyrights = () => {
  return (
    <SytledCopyrights>
      Jillian &copy; {convertToRoman(getYear())}
    </SytledCopyrights>
  );
};

export default Copyrights;
