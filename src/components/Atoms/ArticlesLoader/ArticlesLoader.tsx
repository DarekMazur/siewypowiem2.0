import { Loader, LoaderElement, LoaderWrapper } from './ArticlesLoader.styles';

const ArticlesLoader = () => {
  return (
    <LoaderWrapper>
      <Loader>
        <LoaderElement />
        <LoaderElement />
        <LoaderElement />
        <LoaderElement />
      </Loader>
    </LoaderWrapper>
  );
};

export default ArticlesLoader;
