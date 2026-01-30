export interface ecommerceData {
  email: string;
  password: string;
}

export const validData = [
  { email: "test@qabrains.com", password: "Password123" },
  { email: "practice@qabrains.com", password: "Password123" },
  { email: "student@qabrains.com", password: "Password123" },
];

export const invalidData = {
  invalidEmail: "dfg@wf.agf",
  password: "sfgver",
};
