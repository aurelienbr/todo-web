// @flow
export type UserType = {
  email: string,
};

export type UserProfileType = {
  has_email_verified: boolean,
  organization: any,
  settings: {
    payload: {
      brands: Array<string>,
      targets: Array<string>,
      types: Array<string>,
    },
  },
  user: {
    email: string,
    first_name: string,
    last_name: string,
  },
};

export const nullUserProfileType: UserProfileType = {
  has_email_verified: true,
  organization: null,
  settings: {
    payload: {
      brands: [],
      targets: [],
      types: [],
    },
  },
  user: {
    email: '',
    first_name: '',
    last_name: '',
  },
};
