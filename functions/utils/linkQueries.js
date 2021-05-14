const GET_LINKS = `
query{
    allLinks{
        data{
        name
        description
        _id
        archived
        url
        }
    }
}`;

const CREATE_LINKS = `
mutation($name: String!, $url: String!, $description: String!){
  createLink(data: {name: $name, url: $url, description: $description, archived: true})
  {
    name
    url
    _id
    description
    archived
  }
}`;

const UPDATE_LINK = `
  mutation($id: ID!, $archived: Boolean!, $name: String!, $url: String!, $description: String!  ) {
        updateLink( id: $id, data: { name:$name, url: $url, description: $description, archived: $archived }) {
            name
            _id
            url
            description
            archived
        }
    }
`;

const DELETE_LINK = `
  mutation($id: ID!) {
        deleteLink( id: $id) {
            _id
        }
    }
`;

module.exports = {
  GET_LINKS,
  CREATE_LINKS,
  UPDATE_LINK,
  DELETE_LINK,
};
