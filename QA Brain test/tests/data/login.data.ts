export interface LoginCredentials {
  email: string;
  password: string;
}

export const validCredentials: LoginCredentials = {
  email: "qa_testers@qabrains.com",
  password: "Password123",
};

export const invalidCredentials = {
  invalidEmail: "invalid@email.com",
  invalidPassword: "wrongpassword",
  emptyEmail: "",
  emptyPassword: "",
  invalidFormatEmail: "invalid-email",
};
