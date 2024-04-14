import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const StyledError = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
`;

export const StyledErrorMessage = styled.div`
  font-weight: 600;
  text-align: center;
`;

export const StyledErrorIcon = styled(FontAwesomeIcon)`
  position: static !important;
  color: ${({ theme }) => theme.colors.red} !important;
  font-size: ${({ theme }) => theme.fontSize.xxl} !important;

  &:hover {
    transform: scale(1) !important;
  }
`;
