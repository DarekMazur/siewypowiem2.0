import { ElementType, FC } from 'react';
import { StyledTitle } from './Title.styles';

interface ITitleProps {
  title: string;
  author?: string;
  tag?: ElementType;
}

const Title: FC<ITitleProps> = ({ title, author, tag }) => {
  return (
    <>
      <StyledTitle
        as={
          ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(String(tag))
            ? tag
            : 'h1'
        }
      >
        {title}
      </StyledTitle>
      {author ? <p>by {author}</p> : null}
    </>
  );
};

export default Title;
