import {
  StyledError,
  StyledErrorIcon,
  StyledErrorMessage,
} from './Error.styles';

const Error = () => {
  return (
    <StyledError>
      <StyledErrorIcon icon={['fas', 'triangle-exclamation']} />
      <StyledErrorMessage>
        <p>Nie udało się załadować artykułu...</p>
        <p>Spróbuj ponownie później</p>
      </StyledErrorMessage>
    </StyledError>
  );
};

export default Error;
