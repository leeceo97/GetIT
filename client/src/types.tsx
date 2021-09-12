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
  results: IPost[];
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
  worker: string;
}

export interface ICommentList {
  commonpost?: number;
  content: string;
  create_at: string;
  recruitpostpost?: number;
  user: {
    id: number;
    profile: {
      image: string;
      nickname: string;
    };
  };
}

export interface IComment {
  user: number;
  commonpost?: number;
  recruitpost?: number;
  content: string;
  create_at?: string;
}
