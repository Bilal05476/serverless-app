export default function LinkCard({ link, refreshLinks }) {
  const archiveLink = async () => {
    link.archived = !link.archived;
    try {
      await fetch("/.netlify/functions/updateLink", {
        method: "PUT",
        body: JSON.stringify(link),
      });
      refreshLinks();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteLink = async () => {
    const id = link._id;
    try {
      await fetch("/.netlify/functions/deleteLink", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      refreshLinks();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card my-5" data-aos="zoom-in">
      <div className="card-header">{link.name}</div>
      <div className="card-body">
        <a href={link.url}>{link.url}</a>
        <p>{link.description}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-warning mt-2" onClick={archiveLink}>
          Archive
        </button>
        <button className="btn btn-danger mt-2 mx-2" onClick={deleteLink}>
          Delete
        </button>
      </div>
    </div>
  );
}
