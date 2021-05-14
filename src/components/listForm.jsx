import { useState } from "react";

const ListForm = ({ refreshLinks }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { name, description, url };
    try {
      const res = await fetch("/api/createLinks", {
        method: "POST",
        body: JSON.stringify(body),
      });
      setName("");
      setDescription("");
      setUrl("");
      refreshLinks();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <h2 className="my-4">Create Links</h2>
      <div className="card">
        <div className="card-header">Add Link</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="url">Url</label>
              <input
                type="text"
                name="url"
                className="form-control"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ListForm;
