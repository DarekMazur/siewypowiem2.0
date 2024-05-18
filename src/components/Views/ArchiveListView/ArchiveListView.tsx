'use client';

import defaultCover from '@/assets/dafault.jpg';
import { IArchiveItem } from '@/utils/data/types';
import { StyledLink } from '@/components/Atoms/Link/Link.styles';
import { ArchiveCover } from '@/components/Atoms/ArchiveCover/ArchiveCover.styles';
import { ArchiveWrapper } from './ArchiveListview.styles';

const ArchiveListView = ({ articles }: { articles: IArchiveItem[] }) => {
  return (
    <ArchiveWrapper>
      <ul>
        {articles &&
          articles.map((article) => (
            <li key={article.id}>
              <ArchiveCover
                src={article.cover || defaultCover.src}
                alt={article.title}
                fill
              />
              <div>
                <StyledLink $color='blue' href={`archives/${article.id}`}>
                  {article.title}
                </StyledLink>
                <p>{article.date} r.</p>
              </div>
            </li>
          ))}
      </ul>
    </ArchiveWrapper>
  );
};

export default ArchiveListView;
