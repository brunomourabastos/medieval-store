import { Request, Response } from 'express';
import * as userService from '../services/userService';
import Users from '../interface/userInterface';

export default async function createUser(req: Request, res: Response) {
  try {
    const user = req.body as Users;
    const { status, error, data } = await userService.default(user);
    if (error) { return res.status(status).json(error); }
    return res.status(status).json({ token: data });
  } catch (error) {
    console.log(error);
  }
}