import AsyncStorage from "@react-native-async-storage/async-storage";
import create from "zustand";
import { persist } from "zustand/middleware";

interface IUser {
  name: string;
  email: string;
  token: string;
}

interface UserStore {
  user: IUser | null;
  setUser: (user: IUser) => void;
  reset: () => void;
}

export const userStore = create(
  persist<UserStore>(
    (set) => ({
      user: null,
      setUser: (user: IUser) => set(() => ({ user: user })),
      reset: () => set(() => ({ user: null })),
    }),
    {
      name: "user-storage",
      getStorage: () => AsyncStorage,
    }
  )
);
