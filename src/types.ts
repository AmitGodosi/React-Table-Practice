import { TableOptions } from "react-table";

export type IUser = {
  isUserLogged: boolean;
  userDetails: IUserDetails;
};

export type IUserInfoList = {
  userInfo: IUserInfo[];
};

export interface MyTableOptions<D extends object> extends TableOptions<D> {}

type IUserDetails = {
  token?: string;
  personalDetails?: IPersonalDetails;
};

type IPersonalDetails = {
  Team: string;
  avatar: string;
  joinedAt: string;
  name: string;
};

type IUserInfo = {
  id: string;
  name: string;
  score: number;
  durationInDays: number;
  bugsCount: number;
  madeDadeline: boolean;
};
