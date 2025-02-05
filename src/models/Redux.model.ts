export interface User {
  id: string;
  token: string;
  fullName: string;
  username: string;
  password: string;
  imgUrl?: string;
}

export type MainStoreInitialState = {
  general: {
    sample: number;
  };
  account: {
    isLoading: boolean;
    isLoggedIn: boolean;
    playerDetails: User | null;
  };
  games: {
    isLoading: boolean;
    list: [];
  };
};
