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

module.exports = {
  GET_LINKS,
};
