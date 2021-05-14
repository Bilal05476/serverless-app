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

module.exports = {
  GET_LINKS,
  CREATE_LINKS,
};
