import Image from 'next/image';
import styled from 'styled-components';

export const StyledArticleThumb = styled(Image)`
  position: absolute;
  height: auto;
  padding: 0;
  margin: 0;
  object-fit: cover;
  transition: transform 200ms ease-in-out;
`;
