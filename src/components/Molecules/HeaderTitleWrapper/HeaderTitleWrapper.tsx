import { forwardRef } from 'react';
import Title from '@/components/Atoms/Title/Title';
import { StyledTitleWrapper } from '../TitleWrapper/TitleWrapper.styles';

type Ref = HTMLDivElement;

const HeaderTitleWrapper = forwardRef<Ref>((_, ref) => {
  return (
    <StyledTitleWrapper ref={ref}>
      <Title title='Się Wypowiem' author='Jillian' />
    </StyledTitleWrapper>
  );
});

export default HeaderTitleWrapper;
