import Title from '@/components/Atoms/Title/Title';
import { StyledNavigation } from '../Navigation/Navigation.styles';
import NavigationList from '../NavigationList/NavigationList';
import SocialMenu from '../SocialMenu/SocialMenu';
import { StyledFooterMainSection } from './FooterMainSection.styles';

const FooterMainSection = () => {
  return (
    <StyledFooterMainSection>
      <div>
        <Title title='Sie Wypowiem' author='Jillian' tag='h2' />
      </div>
      <StyledNavigation $isFooter>
        <NavigationList />
        <SocialMenu />
      </StyledNavigation>
    </StyledFooterMainSection>
  );
};

export default FooterMainSection;
