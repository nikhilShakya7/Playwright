export interface ecommerceData {
  email: string;
  password: string;
}

export const validData: ecommerceData = {
  email: "test@qabrains.com",
  password: "Password123",
};

export const invalidData = {
  invalidEmail: "dfg@wf.agf",
  password: "sfgver",
};
