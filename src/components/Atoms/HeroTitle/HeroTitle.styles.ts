import styled from 'styled-components';

export const StyledHeroTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  line-height: calc(${({ theme }) => theme.fontSize.xxxl});
  position: relative;
  margin: 0 0 1.5rem;
`;
