export interface IProfileInfo {
  user: number;
  user_pk: number;
  job: string;
  developer_level: string;
  designer_and_pm_level: string;
  image: string | null;
  email: string;
  info: string | null;
  git: string | null;
  stacks: string[];
}

export interface IPortfolio {
  id: number;
  title: string;
  contents: string;
}

export interface IBoard {
  count: number;
  next: string;
  previous: string;
  results: IPostItem[];
}

export interface IUser {
  id: number;
  profile: {
    nickname: string;
    image: string;
  };
}

export interface ILikedPost {
  commonpost: IPostItem;
}

export interface IPostItem {
  id: number;
  title: string;
  category: string;
  content: string;
  image?: string;
  create_at?: string;
  user: IUser;
  likes?: number;
  comments?: number;
  is_like?: boolean;
  worker: Array<string>;
  stack: Array<string>;
}

export interface IPost {
  id: number;
  title: string;
  category: string;
  content: string;
  image?: string;
  create_at?: string;
  user: number;
  likes?: number;
  comments?: number;
  worker: Array<string>;
  stack: Array<string>;
}

export interface ICommentList {
  commonpost?: number;
  content: string;
  create_at: string;
  recruitpostpost?: number;
  user: IUser;
}

export interface IComment {
  user: IUser;
  commonpost?: number;
  recruitpost?: number;
  content: string;
  create_at: string;
}

// 수정하기TODO
// export interface ISearchPost {

// }

export interface LoginProps {
  onClose: () => void;
}

export interface IRecruitPost {
  comments: number;
  content: string;
  create_at: string;
  designer: number;
  developer: number;
  end_date: string;
  id: number;
  is_like: boolean;
  likes: number;
  pm: number;
  stack: Array<string>;
  start_date: string;
  status: boolean;
  study: {
    content: string;
    created_at: string;
    id: number;
    image: string | null;
    name: string;
    user: number;
  };
  title: string;
  user: IUser;
  worker: string[];
}

export interface IPostId {
  postId: string;
}