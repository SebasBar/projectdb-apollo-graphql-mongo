const gql = require("graphql-tag");

const typeDefs = gql`

type TechLang {
    name: String,
    description: String
}

type Client {
    name: String,
    description: String
}

type Teammate {
    name: String,
    description: String
}

type Project {
    id: ID,
    name: String
    description: String
    description2: String
    description3: String
    github_link: String
    deployed_link: String
    pictures: String
    tech_lang: [TechLang],
    clients: [Client],
    teammates: [Teammate],
}

  type Query {
    projects: String
    # name: String
    # description: String,
    # description2: String,
    # description3: String,
    # github_link: String,
    # deployed_link: String,
    # pictures: String,
    # tech_lang(name: String, description: String): [TechLang],
    # clients(name: String, description: String): [Client],
    # teammates(name: String, description: String): [Teammate]
  }
`;

module.exports = { typeDefs };