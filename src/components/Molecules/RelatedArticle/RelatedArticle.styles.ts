import styled from 'styled-components';

export const RelatedThumb = styled.div`
  display: block;
  position: relative;
  min-height: 9rem;
  width: 40%;

  img {
    object-fit: cover;
  }
`;

export const StyledRelatedArticle = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 0;

  h4 {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.orange};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 0.2rem;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.orange};
      transform-origin: 0 0;
      transform: scaleX(0);
      transition: transform 200ms ease;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
`;
