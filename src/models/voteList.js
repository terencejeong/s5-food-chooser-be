import mongoose  from 'mongoose';
const { Schema } = mongoose;

const voteListSchema = new Schema ({
  users: [{
    userName: String,
    content: String,
  }],
  columns: [{
    columnName: String,
    title: String,
    userNames: [String]
  }],
  columnOrder: [String]
});

export const VoteList = mongoose.model('user', voteListSchema);
