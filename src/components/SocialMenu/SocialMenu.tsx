import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { StyledSocialMenu } from './SocialMenu.styles';

const SocialMenu = () => {
  return (
    <StyledSocialMenu>
      <span>Follow me </span>
      <ul>
        <li>
          <Link href='https://instagram.com' target='_blank' rel='noreffer'>
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </Link>
        </li>
      </ul>
    </StyledSocialMenu>
  );
};

export default SocialMenu;
