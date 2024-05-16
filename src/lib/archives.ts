import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import moment from 'moment';

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
