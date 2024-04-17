export interface IRoleTypes {
  id: number;
  name: string;
  description: string;
  type: string;
}

export interface ICommentType {
  id: number;
  attributes: {
    body: string;
    uuid: string;
    shadowed: boolean;
    author: IUserType;
    article: IArticleType;
  };
}

export interface IArticleType {
  id: number;
  attributes: {
    uuid: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    isSticky: boolean;
    title: string;
    description: string;
    likes: number;
    tags: string;
    body: string;
    cover: {
      data: {
        attributes: {
          name: string;
          url: string;
        };
      };
    };
    categories: Array<ICategoryType>;
    author: IUserType;
    comments: Array<ICommentType>;
  };
}

export interface ICategoryType {
  id: number;
  attributes: {
    title: string;
    uuid: string;
    description: string;
    articles: Array<IArticleType>;
  };
}

export interface IUserType {
  id: number;
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  uuid: string;
  role: IRoleTypes;
  articles: Array<IArticleType>;
  comments: Array<ICommentType>;
  avatar: {
    name: string;
    url: string;
  };
}
