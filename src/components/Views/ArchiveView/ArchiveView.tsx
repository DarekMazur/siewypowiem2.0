'use client';

/* eslint-disable react/no-danger */
import { IArchiveItem } from '@/utils/data/types';
import { dateFormat } from '@/utils/methods/dateFormat';
import { MainWrapper } from '../PageView/PageView.styles';
import { SingleArticleWrapper } from '../ArticleView/ArticleView.styles';

interface IArchiveData extends IArchiveItem {
  contentHtml: string;
}

const ArchiveView = ({ archiveData }: { archiveData: IArchiveData }) => {
  return (
    <MainWrapper>
      <h2>{archiveData.title}</h2>
      <p>by Jillian</p>
      <p>{archiveData.category}</p>
      <div>
        <p>{dateFormat(archiveData.date.toString())}</p>
      </div>
      <SingleArticleWrapper $withAside={false}>
        <div dangerouslySetInnerHTML={{ __html: archiveData.contentHtml }} />
      </SingleArticleWrapper>
    </MainWrapper>
  );
};

export default ArchiveView;
