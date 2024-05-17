import Link from 'next/link';
import { StyledBlogLink } from './GoToBlog.styles';

const GoToBlog = () => {
  return (
    <StyledBlogLink>
      <Link href='/blog'>
        <span>Zobacz więcej</span>
        <span>Sprawdź blog!</span>
      </Link>
    </StyledBlogLink>
  );
};

export default GoToBlog;
