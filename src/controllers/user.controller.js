import { User } from '../models/users';

export const createUsers = async(req, res) => {
  try {
    const users = req.body.users;
    const columns = req.body.columns;
    const columnOrder = req.body.columnOrder;

    const newUsers = new User({
      users: users,
      columns: columns,
      columnOrder: columnOrder
    });

    await newUsers.save();
    res.status(200).send(newUsers);

  } catch(e) {
    res.status(400).send('errror', e);
  }
}

export const getUsers = async (req, res) => {
  try {
    const userList = await User.find();
    res.send(userList)
  } catch(e) {
    res.status(400).send(e)
  }
};
