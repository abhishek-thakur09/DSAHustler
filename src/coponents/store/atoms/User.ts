import { atom } from "recoil";

type UserState = {
  isLoggedIn: boolean;
  user?: {
    email: string;
  };
};

export const userAtom = atom<UserState>({
  key: "userAtom",
  default: {
    isLoggedIn: false,
  },
});
