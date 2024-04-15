import Title from '@/components/Atoms/Title/Title';
import { FooterWrapper } from '@/components/Molecules/FooterWrapper/FooterWrapper.styles';
import { StyledNavigation } from '@/components/Molecules/Navigation/Navigation.styles';
import NavigationList from '@/components/Molecules/NavigationList/NavigationList';
import SocialMenu from '@/components/Molecules/SocialMenu/SocialMenu';
import { convertToRoman } from '@/utils/convertToRoman';
import { getYear } from '@/utils/getYear';
import theme from '@/utils/theme';
import Link from 'next/link';

const Footer = () => {
  return (
    <FooterWrapper>
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: `0.2rem solid ${theme.colors.orange}`,
          padding: '0 4rem',
        }}
      >
        <div>
          <Title title='Sie Wypowiem' author='Jillian' tag='h2' />
        </div>
        <StyledNavigation $isFooter>
          <NavigationList />
          <SocialMenu />
        </StyledNavigation>
      </section>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '5rem 0 1rem',
          fontFamily: theme.fonts.serif,
        }}
      >
        Jillian &copy; {convertToRoman(getYear())}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <p
          style={{
            fontFamily: theme.fonts.mono,
          }}
        >
          <Link
            href='https://nerdistry.pl'
            style={{ color: theme.colors.blue }}
          >
            Nerdistry
          </Link>
        </p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
