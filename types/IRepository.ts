type Developer = {
  avatar: string;
  url: string;
  username: string;
};

export interface IRepository {
  builtBy: Array<Developer>;
  description: string;
  forks: number;
  language: string;
  rank: number;
  repositoryName: string;
  since: string;
  startSince: string;
  totalStars: string;
  url: string;
  username: string;
}
