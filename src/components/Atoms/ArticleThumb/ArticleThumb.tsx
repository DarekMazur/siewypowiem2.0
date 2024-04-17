import { FC } from 'react';
import { StyledArticleThumb } from './ArticleThumb.styles';

interface IThumbProps {
  name: string;
  url: string;
}

const ArticleThumb: FC<IThumbProps> = ({ name, url }) => {
  return <StyledArticleThumb src={url} alt={name} width={450} height={0} />;
};

export default ArticleThumb;
