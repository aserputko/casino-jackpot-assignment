import { Configuration, GamesApi } from './generated';

export const useAPIService = () => {
  return new GamesApi(
    new Configuration({
      basePath: 'http://localhost:3000',
      fetchApi: fetch,
    }),
  );
};
