import bycript from "bcrypt";

const saltRounds: number = 10;

export const hashPassword = (password: string): Promise<string> => {
  return bycript.hash(password, saltRounds);
};

export const comparePassword = (
  password: string,
  hash: string
): Promise<boolean> => {
  return bycript.compare(password, hash);
};
