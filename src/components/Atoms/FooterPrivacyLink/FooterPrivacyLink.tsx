import { StyledLink } from '../Link/Link.styles';
import { StyledFooterPrivacfyLink } from './FooterPrivacyLink.styles';

const FooterPrivacyLink = () => {
  return (
    <StyledFooterPrivacfyLink>
      <StyledLink
        href='/privacy'
        $color='blue'
        target='_blank'
        rel='noreferrer'
      >
        Polityka prywatności
      </StyledLink>
    </StyledFooterPrivacfyLink>
  );
};

export default FooterPrivacyLink;
