import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { StyledSocialMenu } from './SocialMenu.styles';

const SocialMenu = ({
  color,
}: {
  color?:
    | 'white'
    | 'grey'
    | 'transparentGrey'
    | 'orange'
    | 'black'
    | 'blue'
    | 'brown'
    | 'red'
    | 'glassBgr'
    | 'glassShadow';
}) => {
  return (
    <StyledSocialMenu $color={color}>
      <span>Obserwuj mnie </span>
      <ul>
        <li>
          <Link
            href={`https://instagram.com/${process.env.NEXT_PUBLIC_IG_PROFILE}`}
            target='_blank'
            rel='noreferer'
          >
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </Link>
        </li>
      </ul>
    </StyledSocialMenu>
  );
};

export default SocialMenu;
