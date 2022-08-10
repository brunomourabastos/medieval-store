import { ResultSetHeader } from 'mysql2'; 
import connection from './connection';
import Users from '../interface/userInterface';

async function getByUsername(userData: string): Promise<Users> {
  const query = 'SELECT * FROM MedievalStore.Users WHERE username = ? ';
  const value = [userData];

  const [data] = await connection.execute(query, value);
  const [username] = data as Users[];
  return username;
}

async function createUser(user: Users): Promise<Users> {
  const { username, classe, level, password } = user;
  const query = 'INSERT INTO MedievalStore.Users (username,classe,level,password) VALUES (?, ?, ?, ?)';
  const values = [username, classe, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newUser: Users = { id, username, classe, level, password };
  return newUser;
}

export { createUser, getByUsername };