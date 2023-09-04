const { Projects } = require("./models/Project");

const resolvers = {
    Query: {
        projects: async () => await Projects.find({}),
        project: async (_, args) => await Projects.findOne({ name: args.name }),
    },
};

module.exports = { resolvers };