import { forwardRef } from 'react';
import { StyledTitleWrapper } from './TitleWrapper.styles';

type Ref = HTMLDivElement;

const TitleWrapper = forwardRef<Ref>((_, ref) => {
  return (
    <StyledTitleWrapper ref={ref}>
      <h1>Się Wypowiem</h1>
      <p>by Jillian</p>
    </StyledTitleWrapper>
  );
});

export default TitleWrapper;
