'use client';

/* eslint-disable react/no-danger */
import { IArchiveItem } from '@/utils/data/types';
import { dateFormat } from '@/utils/methods/dateFormat';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setArchiveHeroData } from '@/store';
import defaultCover from '@/assets/dafault.jpg';
import { MainWrapper } from '../PageView/PageView.styles';
import { SingleArticleWrapper } from '../ArticleView/ArticleView.styles';

interface IArchiveData extends IArchiveItem {
  contentHtml: string;
}

const ArchiveView = ({ archiveData }: { archiveData: IArchiveData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (archiveData) {
      dispatch(
        setArchiveHeroData({
          title: archiveData.title,
          category: archiveData.category,
          author: 'Jillian',
          cover: archiveData.cover || defaultCover.src,
          date: dateFormat(archiveData.date.toString()),
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [archiveData]);

  return (
    <MainWrapper>
      <SingleArticleWrapper $withAside={false}>
        <div dangerouslySetInnerHTML={{ __html: archiveData.contentHtml }} />
      </SingleArticleWrapper>
    </MainWrapper>
  );
};

export default ArchiveView;
