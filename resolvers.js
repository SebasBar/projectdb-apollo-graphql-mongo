const { Projects } = require("./models/Project");

const resolvers = {
    Query: {
        projects: async () => await Projects.find({}),
        project: async (_, args) => await Projects.find(args.name),
        // description: () => 'description',
        // description2: () => 'description2',
        // description3: () => 'description3',
        // github_link: () => 'github_link',
        // deployed_link: () => 'deployed_link',
        // pictures: () => 'pictures',
        // tech_lang: (_, args) => [{ name: args.name, description: args.description }],
        // clients: (_, args) => [{ name: args.name, description: args.description }],
        // teammates: (_, args) => [{ name: args.name, description: args.description }]

    },
};

module.exports = { resolvers };