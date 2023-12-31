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
    projects: [Project]
    project(name: String): Project
  }
`;

module.exports = { typeDefs };