export interface IRoleTypes {
  id: number;
  name: string;
  description: string;
  type: string;
}

export interface IUserAttributes {
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  uuid: string;
  role: IRoleTypes;
  articles: { data: Array<IArticleTypes> };
  comments: { data: Array<ICommentTypes> };
  avatar: {
    name: string;
    url: string;
  };
}

export interface ICategoryAttributes {
  title: string;
  uuid: string;
  description: string;
  articles: { data: Array<IArticleTypes> };
}

export interface IArticleAttributes {
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
  categories: { data: Array<ICategoryTypes> };
  author: IUserAsPopulate;
  comments: { data: Array<ICommentTypes> };
}

export interface ICommentAttributes {
  body: string;
  uuid: string;
  shadowed: boolean;
  author: IUserTypes;
  article: IArticleTypes;
}

export interface IUserTypes extends IUserAttributes {
  id: number;
}

export interface IUserAsPopulate {
  id: number;
  attributes: IUserAttributes;
}

export interface ICategoryTypes {
  id: number;
  attributes: ICategoryAttributes;
}

export interface IArticleTypes {
  id: number;
  attributes: IArticleAttributes;
}

export interface ICommentTypes {
  id: number;
  attributes: ICommentAttributes;
}

export interface IInstaTypes {
  permalink: string;
  media_url: string;
  media_type: 'IMAGE' | 'CAROUSEL_ALBUM';
  id: number;
  caption: string;
  uuid?: string;
}

export interface IMetaTypes {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
