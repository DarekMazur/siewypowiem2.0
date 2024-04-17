import Link from 'next/link';
import { StyledBlogLink } from './GoToBlog.styles';

const GoToBlog = () => {
  return (
    <StyledBlogLink>
      <Link href='/'>
        <span>Check for more</span>
        <span>Go to blog!</span>
      </Link>
    </StyledBlogLink>
  );
};

export default GoToBlog;
