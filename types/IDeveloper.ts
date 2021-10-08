type Repository = {
  repositoryName: string;
  description: string;
  url: string;
};

export interface IDeveloper {
  avatar: string;
  name: string;
  popularRepository: Repository;
  rank: number;
  since: string;
  url: string;
  username: string;
}
