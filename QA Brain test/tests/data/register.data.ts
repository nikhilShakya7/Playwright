export interface registerationData {
  name: string;
  account: string;
  country: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const validCredentials: registerationData = {
  name: "Jin Doe",
  country: "Aland",
  account: "Student",
  email: "admin1@test.com",
  password: "123456",
  confirmPassword: "123456",
};

export const emptyRegistrationMessage = {
  emptyName: "Name is a required field",
  emptyCountry: "Country is a required field",
  emptyAccount: "Account is a required field",
  emptyEmail: "Email is a required field",
  emptyPassword: "Password is a required field",
  emptyConfirmPassword: "Confirm Password is required",
};
