import Likes from '@/components/Atoms/Likes/Likes';
import { FC } from 'react';
import ArticleDate from '@/components/Atoms/ArticleDate/ArticleDate';
import { StyledArticleShortHeader } from './ArticleShortHeader.styles';

interface IArticleShortHeaderProps {
  likes: number;
  date: string;
}

const ArticleShortHeader: FC<IArticleShortHeaderProps> = ({ likes, date }) => {
  return (
    <StyledArticleShortHeader>
      <ArticleDate date={date} />
      <Likes count={likes} />
    </StyledArticleShortHeader>
  );
};

export default ArticleShortHeader;
