const { UPDATE_LINK } = require("./utils/linkQueries.js");
const sendQuery = require("./utils/sendQuery");
const formatedResponse = require("./utils/formatedResponse");

exports.handler = async (event) => {
  if (event.httpMethod !== "PUT") {
    return formatedResponse(405, { err: "Method not supported" });
  }
  const { name, url, description, _id: id, archived } = JSON.parse(event.body);
  const variables = { name, url, description, archived, id };
  try {
    const { updateLink: updatedLink } = await sendQuery(UPDATE_LINK, variables);

    return formatedResponse(200, updatedLink);
  } catch (err) {
    console.error(err);
    return formatedResponse(500, { err: "Something went wrong" });
  }
};
