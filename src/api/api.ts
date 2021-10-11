export const getRepositories = (languageFilter: string) => {
  return () => {
    let url = "https://gh-trending-api.herokuapp.com/repositories";
    if (languageFilter !== "") url += `/${languageFilter}`;

    return fetch(url).then((res) => res.json());
  };
};

export const getDevelopers = (languageFilter: string) => {
  return () => {
    let url = "https://gh-trending-api.herokuapp.com/developers";
    if (languageFilter !== "") url += `/${languageFilter}`;

    return fetch(url).then((res) => res.json());
  };
};
