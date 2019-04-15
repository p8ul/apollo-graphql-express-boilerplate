import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config';
import { User } from '../models';

export const authenticate = (plainTextPass, password) => {
  if (!plainTextPass) return false;
  return bcrypt.compareSync(plainTextPass, password);
};

export const encryptPassword = password => bcrypt.hashSync(password, 8);

export const generateToken = user => `JWT ${jwt.sign({ id: user.id, email: user.email }, jwtSecret)}`;

export const getUser = async (token) => {
  if (!token) {
    return {
      user: null,
    };
  }

  try {
    const decodedToken = jwt.verify(token.substring(4), jwtSecret);
    const user = await User.findOne({ where: { id: decodedToken.id } });

    return {
      user,
    };
  } catch (err) {
    return {
      user: null,
    };
  }
};
