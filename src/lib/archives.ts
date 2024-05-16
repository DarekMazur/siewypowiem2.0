import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import moment from 'moment';
import { remark } from 'remark';
import html from 'remark-html';

import { IArchiveItem } from '@/utils/data/types';

const archivesDirectory = path.join(process.cwd(), 'src/archives');

export const getSortedArchives = (): IArchiveItem[] => {
  const fileNames = fs.readdirSync(archivesDirectory);

  const allArchivesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(archivesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);

    const archiveData: IArchiveItem = {
      id,
      title: matterResult.data.Title,
      date: matterResult.data.date,
      category: matterResult.data.Category,
      cover: matterResult.data.cover,
    };

    return archiveData;
  });

  const sortedArchives = allArchivesData.sort((a, b) => {
    const format = 'DD.MM.YYYY';
    const dateOne = moment(a.date, format);
    const dateTwo = moment(b.date, format);

    if (dateTwo.isBefore(dateOne)) {
      return -1;
      // eslint-disable-next-line no-else-return
    } else if (dateOne.isAfter(dateTwo)) {
      return 1;
    } else {
      return 0;
    }
  });

  return sortedArchives;
};

export const getArchiveData = async (id: string) => {
  const fullPath = path.join(archivesDirectory, `${id}.md`);

  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.data.Title,
    date: moment(matterResult.data.date, 'DD.MM.YYYY').format('YYYY-MM-DD'),
    category: matterResult.data.Category,
    cover: matterResult.data.cover,
  };
};
