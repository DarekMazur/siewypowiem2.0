import Copyrights from '@/components/Atoms/Copyrights/Copyrights';
import Creator from '@/components/Atoms/Creator/Creator';
import FooterMainSection from '@/components/Molecules/FooterMainSection/FooterMainSection';
import { FooterWrapper } from './Footer.styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterMainSection />
      <Copyrights />
      <Creator />
    </FooterWrapper>
  );
};

export default Footer;
