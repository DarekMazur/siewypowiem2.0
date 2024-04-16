import Link from 'next/link';
import { StyledBlogLink } from './GoToBlog.styles';

const GoToBlog = () => {
  return (
    <StyledBlogLink>
      <Link href='/'>Check for more</Link>
    </StyledBlogLink>
  );
};

export default GoToBlog;
