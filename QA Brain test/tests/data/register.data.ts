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
