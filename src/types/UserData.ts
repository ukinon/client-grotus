export type UserData = {
  name: string;
  email: string;
  password: string;
  address: string;
  birth_date: string;
  preferred_payment?: string;
  profile_photo: string | File;
};
