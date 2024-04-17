import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledLikes } from './Likes.styles';

const Likes = ({ count }: { count: number }) => {
  return (
    <StyledLikes>
      {count.toString()} <FontAwesomeIcon icon={['fas', 'heart']} />
    </StyledLikes>
  );
};

export default Likes;
