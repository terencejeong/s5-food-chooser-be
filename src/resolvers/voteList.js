
export default {
  Query: {
    voteList: async (parent, args, { VoteList }) => {
      return await VoteList.find().exec();
    }
  },
  VoteList: {
    async users(parent, args, { VoteList }) {
      return parent.users
    },
    columns: async(parent, args, {VoteList}) => {
      return parent.columns
    }
  }
}
