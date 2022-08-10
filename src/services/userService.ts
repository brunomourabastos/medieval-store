import Users from '../interface/userInterface';
import * as userModel from '../models/userModel';
import createToken from './jwtService';

export default async function createUser(user: Users) {
  const userExists = await userModel.getByUsername(user.username);
  if (userExists) return { status: 400, error: { message: 'Usuário já cadastrado' } };

  await userModel.createUser(user);
  const token = createToken(user.username);
  return { status: 201, data: token };
}