import { getVoteList, createVoteList } from './controllers/voteList.controller';

export const router = (app) => {
  app.get('/', (req, res) => {
    return res.status(200).json("Terrys crib")
  });
  app.get('/users', getVoteList);

  app.post('/new-users', createVoteList);
}
