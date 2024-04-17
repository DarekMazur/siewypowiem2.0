import styled from 'styled-components';
import footerImage from '@/assets/footerImg.jpg';

export const FooterWrapper = styled.footer`
  position: relative;
  background: url(${footerImage.src}) 10% / cover no-repeat;
  padding: 1rem 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: ${({ theme }) => `0.4rem solid ${theme.colors.black}`};

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.grey};
    opacity: 0.65;
    z-index: 0;
  }
`;
