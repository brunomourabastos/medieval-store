import jwt, { SignOptions, Secret } from 'jsonwebtoken';

const jwtConfig: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '10d',
};

const JWTSECRET: Secret = 'secret';

export default function createToken(user: string) {
  const token = jwt.sign({ user }, JWTSECRET, jwtConfig);
  return token;
}