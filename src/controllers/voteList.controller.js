import { VoteList } from '../models/voteList';

export const createVoteList = async(req, res) => {
  try {
    const users = req.body.users;
    const columns = req.body.columns;
    const columnOrder = req.body.columnOrder;

    const newVoteList = new VoteList({
      users: users,
      columns: columns,
      columnOrder: columnOrder
    });

    await newVoteList.save();
    res.status(200).send(newVoteList);

  } catch(e) {
    res.status(400).send('errror', e);
  }
}

export const getVoteList = async (req, res) => {
  try {
    const voteList = await VoteList.find();
    res.send(voteList)
  } catch(e) {
    res.status(400).send(e)
  }
};
