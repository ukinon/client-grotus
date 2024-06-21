export type UserData = {
  email?: string;
  password?: string;
  profile?: Profile;
  profile_photo?: string | File;
};

export type Profile = {
  name?: string;
  address?: string;
  birth_date?: string;
  preferred_payment?: string;
};
