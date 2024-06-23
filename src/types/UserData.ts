export type UserData = {
  id?: number;
  email?: string;
  password?: string;
  profile?: Profile;
};

export type Profile = {
  name?: string;
  address?: string;
  birth_date?: string;
  preferred_payment?: string;
  phone?: string;
  profile_photo?: string | File;
};
