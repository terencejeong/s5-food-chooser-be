import { getUsers, createUsers } from './controllers/user.controller';

export const router = (app) => {
  app.get('/', (req, res) => {
    return res.status(200).json("Terrys crib")
  });
  app.get('/users', getUsers);

  app.post('/new-users', createUsers);
}
