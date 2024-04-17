import { FC } from 'react';
import { StyledArticleThumb } from './ArticleThumb.styles';

interface IThumbProps {
  name: string;
  url: string;
}

const ArticleThumb: FC<IThumbProps> = ({ name, url }) => {
  return <StyledArticleThumb src={url} alt={name} fill />;
};

export default ArticleThumb;
