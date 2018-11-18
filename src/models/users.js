import mongoose  from 'mongoose';
const { Schema } = mongoose

const userSchema = new Schema ({
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

export const User = mongoose.model('user', userSchema);
