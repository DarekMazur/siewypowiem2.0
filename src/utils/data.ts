// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';

interface IDataTypes {
  username: string;
  bio: string;
  avatar: string;
}

export const data: IDataTypes = {
  username: faker.internet.userName(),
  bio: faker.person.bio(),
  avatar: faker.image.avatar(),
};
