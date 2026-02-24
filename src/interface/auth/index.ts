export type UserLogin = {
  email: string;
  password: string;
};

export type UserValues = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export type UserSignUp = {
  name: string;
  email: string;
  password: string;
};

export type ForgetPasswordValues = {
  email: string;
};

export type ResetPasswordValues = {
  password: string;
  confirmPassword: string;
};

export type UserProfile = {
  name: string;
  email: string;
  role: string;
  email_user: string;
  isActive: string;
  organization_id: string;
  organization_name: string;
  organization_phone: string;
  organization_email: string;
  organization_address: string;
  branch_id: string;
  branch_name: string;
  branch_address: string;
  branch_phone: string;
};
