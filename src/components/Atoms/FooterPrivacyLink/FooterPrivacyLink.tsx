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
        Privacy Policy
      </StyledLink>
    </StyledFooterPrivacfyLink>
  );
};

export default FooterPrivacyLink;
